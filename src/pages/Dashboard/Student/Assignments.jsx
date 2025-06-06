import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import supabase from '../../../services/supabaseClient';
import toast from 'react-hot-toast';
import AssignmentSubmission from '../../../components/AssignmentSubmission';

const Assignments = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, upcoming, submitted, graded
  const [sortBy, setSortBy] = useState('dueDate'); // dueDate, course, status
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  useEffect(() => {
    fetchAssignments();
  }, [user]);

  const fetchAssignments = async () => {
    try {
      const { data, error } = await supabase
        .from('assignments')
        .select(`
          *,
          courses (
            id,
            name,
            code
          )
        `)
        .eq('student_id', user.id)
        .order('due_date', { ascending: true });

      if (error) throw error;

      setAssignments(data);
    } catch (error) {
      toast.error('Error fetching assignments');
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmissionSuccess = () => {
    fetchAssignments();
    setSelectedAssignment(null);
  };

  const filteredAssignments = assignments.filter(assignment => {
    switch (filter) {
      case 'upcoming':
        return assignment.status === 'pending' && new Date(assignment.due_date) > new Date();
      case 'submitted':
        return assignment.status === 'submitted';
      case 'graded':
        return assignment.status === 'graded';
      default:
        return true;
    }
  });

  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    switch (sortBy) {
      case 'course':
        return a.courses.name.localeCompare(b.courses.name);
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return new Date(a.due_date) - new Date(b.due_date);
    }
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Assignments & Exams</h2>
        <div className="flex items-center space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="submitted">Submitted</option>
            <option value="graded">Graded</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="dueDate">Due Date</option>
            <option value="course">Course</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      {sortedAssignments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No assignments found.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {sortedAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {assignment.courses.name} ({assignment.courses.code})
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    assignment.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : assignment.status === 'submitted'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Due Date</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(assignment.due_date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="text-sm font-medium text-gray-900">
                    {assignment.type}
                  </p>
                </div>
                {assignment.status === 'graded' && (
                  <div>
                    <p className="text-sm text-gray-500">Grade</p>
                    <p className="text-sm font-medium text-gray-900">
                      {assignment.grade || 'N/A'}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-sm text-gray-900 mt-1">{assignment.description}</p>
              </div>

              {assignment.status === 'pending' && (
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedAssignment(assignment)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Submit Assignment
                  </button>
                </div>
              )}

              {assignment.status === 'submitted' && assignment.submission_file && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Submitted File</p>
                  <a
                    href={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/assignments/${assignment.submission_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:text-primary-500"
                  >
                    View Submission
                  </a>
                </div>
              )}

              {assignment.status === 'graded' && assignment.feedback && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Feedback</p>
                  <p className="text-sm text-gray-900 mt-1">{assignment.feedback}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {selectedAssignment && (
        <AssignmentSubmission
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
          onSuccess={handleSubmissionSuccess}
        />
      )}
    </div>
  );
};

export default Assignments; 
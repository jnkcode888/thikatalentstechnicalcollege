import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { supabase } from '../../../services/supabase';
import toast from 'react-hot-toast';

const CourseList = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [enrolledIds, setEnrolledIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, [user]);

  const fetchCourses = async () => {
    setLoading(true);
    // Fetch all courses
    const { data: allCourses, error: courseError } = await supabase.from('courses').select('*');
    // Fetch enrolled courses for this student
    const { data: myCourses, error: myError } = await supabase.from('student_courses').select('course_id').eq('student_id', user.id);
    setCourses(allCourses || []);
    setEnrolledIds((myCourses || []).map(c => c.course_id));
    setLoading(false);
    if (courseError || myError) toast.error('Error loading courses');
  };

  const handleEnroll = async (courseId) => {
    setEnrolling(courseId);
    const { error } = await supabase.from('student_courses').insert({ student_id: user.id, course_id: courseId, status: 'active' });
    setEnrolling(null);
    if (error) {
      toast.error('Failed to enroll');
    } else {
      toast.success('Enrolled successfully!');
      setEnrolledIds([...enrolledIds, courseId]);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div></div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Available Courses</h2>
      </div>
      {courses.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No courses available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-500">Code: {course.code}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm">{course.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <p className="text-sm text-gray-500">Instructor: <span className="text-gray-700">{course.instructor}</span></p>
                {enrolledIds.includes(course.id) ? (
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Enrolled</span>
                ) : (
                  <button
                    onClick={() => handleEnroll(course.id)}
                    disabled={enrolling === course.id}
                    className="btn btn-primary btn-sm"
                  >
                    {enrolling === course.id ? 'Enrolling...' : 'Enroll'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList; 
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import supabase from '../../../services/supabaseClient';
import toast from 'react-hot-toast';

const MyCourses = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, [user]);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('student_courses')
        .select(`
          *,
          courses (
            id,
            name,
            code,
            description,
            instructor
          )
        `)
        .eq('student_id', user.id);

      if (error) throw error;

      setCourses(data.map(item => item.courses));
    } catch (error) {
      toast.error('Error fetching courses');
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">My Courses</h2>
        <span className="text-sm text-gray-500">{courses.length} courses enrolled</span>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">You are not enrolled in any courses yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-500">Code: {course.code}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  Active
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">{course.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Instructor: <span className="text-gray-700">{course.instructor}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses; 
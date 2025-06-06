import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import supabase from '../../../services/supabaseClient';
import toast from 'react-hot-toast';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  '8:00 AM - 9:30 AM',
  '9:45 AM - 11:15 AM',
  '11:30 AM - 1:00 PM',
  '2:00 PM - 3:30 PM',
  '3:45 PM - 5:15 PM',
];

const Timetable = () => {
  const { user } = useAuth();
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchedule();
  }, [user]);

  const fetchSchedule = async () => {
    try {
      const { data, error } = await supabase
        .from('student_courses')
        .select(`
          *,
          courses (
            id,
            name,
            code,
            instructor
          )
        `)
        .eq('student_id', user.id);

      if (error) throw error;

      // Transform the data into a schedule format
      const scheduleData = days.map(day => ({
        day,
        slots: timeSlots.map(time => ({
          time,
          course: data.find(course => 
            course.schedule_day === day && course.schedule_time === time
          )?.courses || null
        }))
      }));

      setSchedule(scheduleData);
    } catch (error) {
      toast.error('Error fetching schedule');
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

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
        <h2 className="text-2xl font-semibold text-gray-900">Weekly Schedule</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Current Term: Fall 2024</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {days.map(day => (
                  <th key={day} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timeSlots.map((time, timeIndex) => (
                <tr key={time}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {time}
                  </td>
                  {days.map(day => {
                    const slot = schedule.find(d => d.day === day)?.slots[timeIndex];
                    return (
                      <td key={`${day}-${time}`} className="px-6 py-4 whitespace-nowrap">
                        {slot?.course ? (
                          <div className="bg-primary-50 rounded-lg p-3">
                            <h3 className="text-sm font-medium text-primary-900">
                              {slot.course.name}
                            </h3>
                            <p className="text-xs text-primary-600 mt-1">
                              {slot.course.code}
                            </p>
                            <p className="text-xs text-primary-500 mt-1">
                              {slot.course.instructor}
                            </p>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-400">-</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-primary-50 rounded"></div>
            <span className="text-sm text-gray-600">Scheduled Class</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-gray-50 rounded"></div>
            <span className="text-sm text-gray-600">Free Period</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import toast from 'react-hot-toast';

const ApplyForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('applications').insert([form]);
    setLoading(false);
    if (error) {
      toast.error('Failed to submit application!');
    } else {
      toast.success('Application submitted!');
      setForm({
        first_name: '', last_name: '', email: '', phone: '', course: '', education: '', message: ''
      });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        <h2 className="text-2xl font-bold text-center">Student Application Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input name="first_name" value={form.first_name} onChange={handleChange} required placeholder="First Name" className="input input-bordered w-1/2" />
            <input name="last_name" value={form.last_name} onChange={handleChange} required placeholder="Last Name" className="input input-bordered w-1/2" />
          </div>
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="input input-bordered w-full" />
          <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="input input-bordered w-full" />
          <input name="course" value={form.course} onChange={handleChange} required placeholder="Course Applying For" className="input input-bordered w-full" />
          <input name="education" value={form.education} onChange={handleChange} required placeholder="Education Background" className="input input-bordered w-full" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" className="input input-bordered w-full" />
          <button type="submit" disabled={loading} className="btn btn-primary w-full">
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm; 
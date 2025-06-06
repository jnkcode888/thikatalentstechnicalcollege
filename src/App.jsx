import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import Login from './pages/Login';
import Navbar from './components/layout/Navbar';
import DashboardNavbar from './components/layout/DashboardNavbar';
import Footer from './components/layout/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Public/Home'));
const About = lazy(() => import('./pages/Public/About'));
const ApplyForm = lazy(() => import('./pages/Public/ApplyForm'));
const StudentDashboard = lazy(() => import('./pages/Dashboard/Student/Dashboard'));
const CourseList = lazy(() => import('./pages/Dashboard/Student/CourseList'));
const MyCourses = lazy(() => import('./pages/Dashboard/Student/MyCourses'));
const Timetable = lazy(() => import('./pages/Dashboard/Student/Timetable'));
const Assignments = lazy(() => import('./pages/Dashboard/Student/Assignments'));
const FeeStatement = lazy(() => import('./pages/Dashboard/Student/FeeStatement'));
const StudentAnnouncements = lazy(() => import('./pages/Dashboard/Student/Announcements'));
const Support = lazy(() => import('./pages/Dashboard/Student/Support'));
const StaffDashboard = lazy(() => import('./pages/Dashboard/Staff/Dashboard'));
const Uploads = lazy(() => import('./pages/Dashboard/Staff/Uploads'));
const StaffStudents = lazy(() => import('./pages/Dashboard/Staff/Students'));
const StaffTimetable = lazy(() => import('./pages/Dashboard/Staff/Timetable'));
const Grades = lazy(() => import('./pages/Dashboard/Staff/Grades'));
const StaffAnnouncements = lazy(() => import('./pages/Dashboard/Staff/Announcements'));
const AdminDashboard = lazy(() => import('./pages/Dashboard/Admin/Dashboard'));
const UserManagement = lazy(() => import('./pages/Dashboard/Admin/UserManagement'));
const Applications = lazy(() => import('./pages/Dashboard/Admin/Applications'));
const AdminAnnouncements = lazy(() => import('./pages/Dashboard/Admin/Announcements'));
const Analytics = lazy(() => import('./pages/Dashboard/Admin/Analytics'));

// Role-based dashboard switcher
function DashboardSwitcher() {
  const { user, role, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (role === 'admin') return <AdminDashboard />;
  if (role === 'staff') return <StaffDashboard />;
  return <StudentDashboard />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/apply" element={<ApplyForm />} />
      <Route path="/student/*" element={<DashboardSwitcher />} />
      <Route path="/staff/*" element={<DashboardSwitcher />} />
      <Route path="/admin/*" element={<DashboardSwitcher />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function AppLayout({ children }) {
  const location = useLocation();
  const isDashboard =
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/staff') ||
    location.pathname.startsWith('/admin');
  return (
    <div className="min-h-screen flex flex-col">
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppLayout>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </AppLayout>
        <Toaster position="top-right" />
      </AuthProvider>
    </Router>
  );
}

export default App; 
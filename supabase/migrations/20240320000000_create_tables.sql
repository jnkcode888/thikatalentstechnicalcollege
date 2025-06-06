-- Create applications table
CREATE TABLE applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT NOT NULL,
    education TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create courses table
CREATE TABLE courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    instructor TEXT,
    credits INTEGER NOT NULL,
    duration TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create student_courses table (junction table for student enrollment)
CREATE TABLE student_courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(student_id, course_id)
);

-- Create RLS policies
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_courses ENABLE ROW LEVEL SECURITY;

-- Applications policies
CREATE POLICY "Anyone can create applications"
    ON applications FOR INSERT
    TO public
    WITH CHECK (true);

CREATE POLICY "Only admins can view applications"
    ON applications FOR SELECT
    TO authenticated
    USING (auth.role() = 'admin');

CREATE POLICY "Only admins can update applications"
    ON applications FOR UPDATE
    TO authenticated
    USING (auth.role() = 'admin');

-- Courses policies
CREATE POLICY "Anyone can view courses"
    ON courses FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Only admins can manage courses"
    ON courses FOR ALL
    TO authenticated
    USING (auth.role() = 'admin');

-- Student courses policies
CREATE POLICY "Students can view their own enrollments"
    ON student_courses FOR SELECT
    TO authenticated
    USING (auth.uid() = student_id);

CREATE POLICY "Only admins can manage enrollments"
    ON student_courses FOR ALL
    TO authenticated
    USING (auth.role() = 'admin');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_applications_updated_at
    BEFORE UPDATE ON applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at
    BEFORE UPDATE ON courses
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_student_courses_updated_at
    BEFORE UPDATE ON student_courses
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample courses
INSERT INTO courses (code, name, description, instructor, credits, duration) VALUES
    ('CS101', 'Introduction to Computer Science', 'Basic concepts of computer science and programming', 'Dr. John Smith', 3, '1 semester'),
    ('EE201', 'Electrical Engineering Fundamentals', 'Core principles of electrical engineering', 'Prof. Sarah Johnson', 4, '1 semester'),
    ('ME301', 'Mechanical Engineering Basics', 'Introduction to mechanical systems and design', 'Dr. Michael Brown', 4, '1 semester'),
    ('CE401', 'Civil Engineering Principles', 'Fundamentals of civil engineering and construction', 'Prof. Emily Davis', 3, '1 semester'); 
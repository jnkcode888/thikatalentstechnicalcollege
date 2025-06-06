-- Add schedule columns to student_courses table
ALTER TABLE student_courses
ADD COLUMN schedule_day TEXT,
ADD COLUMN schedule_time TEXT;

-- Add a constraint to ensure valid schedule days
ALTER TABLE student_courses
ADD CONSTRAINT valid_schedule_day
CHECK (schedule_day IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'));

-- Add a constraint to ensure valid schedule times
ALTER TABLE student_courses
ADD CONSTRAINT valid_schedule_time
CHECK (schedule_time IN (
  '8:00 AM - 9:30 AM',
  '9:45 AM - 11:15 AM',
  '11:30 AM - 1:00 PM',
  '2:00 PM - 3:30 PM',
  '3:45 PM - 5:15 PM'
));

-- Add a unique constraint to prevent schedule conflicts
ALTER TABLE student_courses
ADD CONSTRAINT unique_schedule_slot
UNIQUE (student_id, schedule_day, schedule_time);

-- Update RLS policies to allow students to view their schedule
CREATE POLICY "Students can view their own schedule"
    ON student_courses FOR SELECT
    TO authenticated
    USING (auth.uid() = student_id); 
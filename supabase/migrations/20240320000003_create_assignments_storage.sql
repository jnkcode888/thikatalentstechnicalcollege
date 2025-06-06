-- Create storage bucket for assignments
INSERT INTO storage.buckets (id, name, public) VALUES ('assignments', 'assignments', false);

-- Create policy to allow students to upload their own assignments
CREATE POLICY "Students can upload their own assignments"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'assignments' AND
  auth.uid() = (storage.foldername(name))[1]::uuid
);

-- Create policy to allow students to view their own assignments
CREATE POLICY "Students can view their own assignments"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'assignments' AND
  auth.uid() = (storage.foldername(name))[1]::uuid
);

-- Create policy to allow students to update their own assignments
CREATE POLICY "Students can update their own assignments"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'assignments' AND
  auth.uid() = (storage.foldername(name))[1]::uuid
);

-- Create policy to allow students to delete their own assignments
CREATE POLICY "Students can delete their own assignments"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'assignments' AND
  auth.uid() = (storage.foldername(name))[1]::uuid
); 
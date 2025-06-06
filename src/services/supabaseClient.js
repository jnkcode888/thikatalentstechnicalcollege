import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ahjtytkfxzaapkwzppwk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoanR5dGtmeHphYXBrd3pwcHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NDY5NzcsImV4cCI6MjA2MzQyMjk3N30.lOEid1_YLrjzRNZNi3FX4OmQlnqX0g07qzBm8aUufXA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase; 
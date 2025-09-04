-- Create table for registration interest
CREATE TABLE public.registration_interests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registration_interests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public registration)
CREATE POLICY "Anyone can register interest" 
ON public.registration_interests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own registration (if needed later)
CREATE POLICY "Users can view all registrations" 
ON public.registration_interests 
FOR SELECT 
USING (true);
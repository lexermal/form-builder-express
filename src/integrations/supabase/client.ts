// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pstgywdygsufjywlnerp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzdGd5d2R5Z3N1Zmp5d2xuZXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MTc0ODcsImV4cCI6MjA1NDE5MzQ4N30.37VTFb5bHc1NwrFYD0dc_iNFpBq-JX45QuJ4oQOruQ4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
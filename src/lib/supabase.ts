import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  import.meta.env.VITE_SB_URL as string,
  import.meta.env.VITE_SB_ANON_KEY as string,
  {
    fetch: (...args) => fetch(...args)
  }
);
export default supabase;

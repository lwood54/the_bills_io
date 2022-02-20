import { createClient } from '@supabase/supabase-js';
console.log('SB_URL', import.meta.env.VITE_SB_URL);
console.log('SB_ANON', import.meta.env.VITE_SB_ANON_KEY);
const supabase = createClient(
  import.meta.env.VITE_SB_URL as string,
  import.meta.env.VITE_SB_ANON_KEY as string
);
export default supabase;

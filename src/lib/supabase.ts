import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  import.meta.env.VITE_SB_URL as string,
  import.meta.env.VITE_SB_ANON_KEY as string,
  {
    fetch: (...args) => fetch(...args) // prevents error XMLHttpRequest not defined: https://github.com/supabase/supabase-js/issues/154
  }
);
export default supabase;

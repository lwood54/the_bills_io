import type { Session } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const userSession = writable<Session>();
export const authorized = writable(false);

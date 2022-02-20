import type { Bill } from '$lib/types/bills';
import { writable } from 'svelte/store';

export const bills = writable<Bill[]>([]);

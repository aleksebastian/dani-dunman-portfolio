import { writable } from 'svelte/store';

export const currentPage = writable('');
export const yOffSet = writable(0);
export const isMobileNavOpen = writable(false);

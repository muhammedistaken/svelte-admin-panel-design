import { writable } from 'svelte/store';

export const currentPage = writable('Dashboard');

export function navigate(page: string) {
    currentPage.set(page);
}

export const pages = {
    Dashboard: 'Dashboard',
    Users: 'Users',
    Analytics: 'Analytics',
    Settings: 'Settings'
} as const;

export type PageType = typeof pages[keyof typeof pages];

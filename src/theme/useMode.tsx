import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { StorageKey } from '../types';

const storage = createJSONStorage(() => localStorage);

type Mode = 'dark' | 'light';
interface Store {
    mode: Mode;
    toggle: (mode?: Mode) => void;
}

export const useMode = create<Store>()(
    devtools(
        persist(
            (set) => ({
                mode: 'light',
                toggle: (mode) =>
                    set((state) => {
                        const newMode = mode ?? (state.mode === 'light' ? 'dark' : 'light');
                        return { mode: newMode };
                    }),
            }),
            {
                name: StorageKey.ColorSchema,
                storage,
            }
        )
    )
);
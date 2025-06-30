import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      hydrated: false,
      setHydrated: (flag) => set({ hydrated: flag }),

      highContrast: false,
      lowPosture: false,
      language: 'ko',
      voiceVolume: 25,
      voiceSpeed: 1,    // 1,2,4,8
      fontSize: 62.5,   // 62.5,65,69

      setHighContrast: (value) => set({ highContrast: value }),
      setLowPosture: (value) => set({ lowPosture: value }),
      setLanguage: (lang) => set({ language: lang }),
      setVoiceVolume: (vol) => set({ voiceVolume: vol }),
      setVoiceSpeed: (speed) => set({ voiceSpeed: speed }),
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      name: 'accessibility-store',
      getStorage: () => localStorage,
      onRehydrateStorage: () => (state) => {
        state.setHydrated(true)
      },
    }
  )
)
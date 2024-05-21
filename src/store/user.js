import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let useUserStore = create(persist(
    immer((set) => ({
        user: {},
        isloggedin: false,

        login: (user) => set(
            (state) => {
                state.user = user
                state.isloggedin = true
              
            }
        ),

        logout : () => set(
            (state) => {
                state.user = {}
                state.isloggedin = false
            
            }
        )

    }),
    ),

    {
        name: 'userstore',
        getStorage: () => localStorage,
    })
)
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let useCartStore = create(persist(
    immer((set) => ({
        items: [],
        totalprice: 0,

        updateitems : (item) => set((state) => {
            let index = state.items.findIndex(i => i.id == item.id)

            if(index == -1){
                state.items.push(item)
            }else{
                state.items[index].quantity = state.items[index].quantity + 1 
                state.items[index].tprice = state.items[index].quantity * state.items[index].price
            }

            
            state.totalprice = state.items.reduce((prev, curr) => prev + curr.tprice, 0)
        }),

        removeitem:(index) => set((state) => {
            state.items.splice(index,1)
            state.totalprice = state.items.reduce((prev, curr) => prev + curr.tprice, 0)
        }),
        
        updatecart: (index, quantity) => set(
            (state) => {
                state.items[index].quantity = quantity
                state.items[index].tprice = quantity * state.items[index].price
                state.totalprice = state.items.reduce((prev, curr) => prev + curr.tprice, 0)
            }
        ),
        clearcart: (index, quantity) => set(
            (state) => {
                localStorage.clear()
                state.items = []
                state.totalprice = 0
                
            }
        ),

    }
    )
    ),
    {
        name: 'cartstore',
        getStorage: () => sessionStorage,
    })
)
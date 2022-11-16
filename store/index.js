export const state = () => ({
    wmId:[],
    type: 0

  })
  
export const getters = {
    filterDisplay (state) {
        let display = []
        const filterkeyword = state.type === 1 ? "Available" : state.type === 2 ? "Unvailable" : ""
        display =  state.wmId.filter((item) =>{
          return item.status === filterkeyword
        })
        console.log('d', display);
        console.log('state.wmId', state.wmId);
        return display.length ? display : state.wmId
    
      }
}

// ----------------------------------------------------------------
export const mutations = {
setData(state, payload) {
    state.wmId.push(payload)
},
popData(state) {
    state.wmId.pop()
},
typeShow(state, filterType){
    state.type = filterType
},

increment (state, index) {
    state.wmId[index].currentCoin++
    if (state.wmId[index].currentCoin === 4) {
        state.wmId[index].status = "Unvailable"
      } else {
        state.wmId[index].status = "Available"
      }
},

resetWm (state, index) {
    state.wmId[index].currentCoin = 0;
    state.wmId[index].status = "Available"
}

}
// ----------------------------------------------------------------
export const state = () => ({
    search:''
  })
  
  export const mutations = {
    searchPass(state,n) {
        state.search = n
    }
  }
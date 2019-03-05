import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//state 在vue中用于存储数据
var state=
{
    count:1,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
}
var getters= {		   
    computedCount: (state) => {
    return state.count*2
    }
}
//里面放的是方法 方法主要用于改变state里面的数据
var mutations={
    incCount(){
        ++state.count;
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    })
var actions={
        incMutationsCount (context) {
            context.commit("incCount")
        }
    }
export default store;

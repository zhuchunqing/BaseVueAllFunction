<template>
  <div id="TopLeft">
    <h1>{{TopLeft}}</h1>
    <h1>{{APPVueMessage}}</h1>
    <h1>{{APPVueMessage1}}</h1>
    <h1>{{this.$store.state.count}} {{this.$store.getters.computedCount}} </h1>
    <button @click="incCount()">增加数量+</button>
    <button v-on:click="sendMsgToParent">子组件传值给父组件</button>
    <button @click="emitNews()">给兄弟组件广播数据</button>
  </div>
</template>
<script>
import VueEvent from '../vueevent.js';
import store from "../Vuex/store.js"
export default {
  data(){
    return{
      TopLeft:"TopLeft",
      msg:"left-right"
    }
  },
    props:["APPVueMessage","APPVueMessage1"],
    methods:{
      sendMsgToParent:function(){
        this.$emit("sendToParentFun","子组件传递给父组件")
      },
      incCount(){
        //改变vuex store里面的数据
            // this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
            this.$store.dispatch('incCount');
            },

      emitNews(){
      //广播数据
        VueEvent.$emit('to-news',"this.msg")

      }
    },
    store,
}
</script>

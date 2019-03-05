<template>
  <div id="Main">
    <h1>{{ msg }}</h1>
    <h1>{{ APPVueMessage }}</h1>

    <h1>{{this.$store.state.count}}</h1>
    <button v-on:click="emitNews()">给MainLeft组件广播数据</button>
  </div>
</template>
<script>
// 1.引入组件
// 2.挂着组件
// 3.应用组件
import VueEvent from "../vueevent.js";
import store from "../Vuex/store.js"
export default {
  name: 'Main',
  props:["APPVueMessage"],
  data () {
    return {
        msg:"MainLeft",
        Brother:"TobrotherMainRight"
    }
  },
  methods:{
                 emitNews(){
                //广播数据

                VueEvent.$emit('to-news',this.Brother)

            }
  },
   store,
}
</script>
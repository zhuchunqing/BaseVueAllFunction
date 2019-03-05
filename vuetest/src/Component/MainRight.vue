<template>
  <div id="Main">
    <h1>{{ msg }}</h1>
    <h1>{{ APPVueMessage }}</h1>
    <h1>{{ msg1 }}</h1>
  </div>
</template>
<script>
// 1.引入组件
// 2.挂着组件
// 3.应用组件
import VueEvent from "../vueevent.js";
export default {
  name: 'Main',
  props:["APPVueMessage"],
  data () {
    return {
        msg:"MainRight",
        msg1:"",
    }
  },
  methods:{
  },
        mounted(){

            VueEvent.$on('to-news',function(data){
              this.msg1=data
            })
        }
}
</script>
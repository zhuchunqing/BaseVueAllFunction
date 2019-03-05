<template>
  <div id="TopRight">
    <h1>{{TopRight}}</h1>
    <h1>{{FromBrotherLeft}}</h1>
  </div>
</template>

<script>
import VueEvent from '../vueevent.js';
export default {
  data(){
    return{
      TopRight:"TopRight",
      FromBrotherLeft:"",
    }
  },
    methods:{
    },
    mounted(){
            VueEvent.$on('to-news',function(data){
                console.log( this.FromBrotherLeft);
                this.FromBrotherLeft=data;
                console.log( this.FromBrotherLeft);
            })
    }
}
</script>

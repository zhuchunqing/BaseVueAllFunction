<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link to="/MainLeft">Go to Foo</router-link>
    <router-link to="/MainRight">Go to Bar</router-link>
    <V-topRightName></V-topRightName>
    <V-topLeftName ></V-topLeftName>

    <br>
    <hr>
    <br>
    <router-view></router-view>
     <button @click="getData()">请求数据</button>
     <p>{{list}}</p>
      <p>{{list1}}</p>
  </div>
</template>

<script>
// 1.引入组件
// 2.挂着组件
// 3.应用组件
import topName from './Component/TopLeft.vue';
import topName1 from './Component/TopRight.vue';
import Axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      counter: 1,
      name: 'Vue.js',
      msg:"appvue",
      list:"",
      list1:"",
    }
  },
  methods:{         
            getData(){
                    //请求数据
                    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

                    Axios.get(api).then((response)=>{
                        console.log(response);
                        //注意this指向
                        this.list=response.data.result;
                    },function(err){
                            console.log(err);
                    })
            },
            showMsgFromChild:function(data){
              this.list1=data
            },
            emitNews(){
              VueEvent.$emit("toNew",this.msg)
            }
  },
          mounted(){  /*生命周期函数*/

        },
  components:{
    "V-topLeftName":topName,
    "V-topRightName":topName1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.class1{
  background: #444;
  color: #eee;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

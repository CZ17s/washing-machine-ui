<template lang="pug">

v-row
  v-col(cols="12" md="6" lg="4" xl="3" )
    div.btnBox.d-flex.flex-column.blue.lighten-4.mx-auto.mt-12.pb-5.px-5
      v-btn.btnSize.mt-2(color="green" large @click="onFilterData(1)") เช็คเครื่องว่าง
      v-btn.mt-5(color="red" large @click="onFilterData(2)") เครื่องที่กำลังใช้งาน
      v-btn.mt-5(color="orange" large @click="onFilterData(0)") ทั้งหมดเครื่องทั้งหมด {{filterType}}
      hr.mt-10
      v-btn.mt-5(color="primary" large @click="inSertwashing") เพิ่มเครื่องซักผ้า
      v-btn.mt-7(color="red" large @click="deleteWashing") ลบเครื่องซักผ้า
  
  v-col( cols="12" md="6" lg="4" xl="3" v-for="(item, ID) in filterDisplay" :key="ID" )
    h1.text-center.mb-2 {{item.id}}
    Washing_Machine(@setStatus="changeStatus" :data="item" :index="ID").mx-auto
  
</template>
  
  <script>
  import Washing_Machine from "./Washing_Machine.vue";
  import { mapState } from "vuex"
  import { mapGetters } from "vuex";
  export default {
    name: 'IndexPage',
    components: {Washing_Machine},
    data(){
      return{
        statusShowWM: true,
        showAvailable: false,
        filterType: 0
      }
    },
    computed: {
      ...mapState({
        wmId: state => state.wmId,
        type: state => state.type,
      }),
      ...mapGetters([
        'filterDisplay'
      ]),
      displayData () {

        this.$store.commit('typeShow',this.filterType )

        return this.filterType ? this.onFilterData() : this.wmId
      }
    },
    methods: {
      inSertwashing(){
        this.$store.commit('setData',{id: "WM-" + (this.wmId.length+1), status:"Available", expectCoins: 4, currentCoin : 0} )
      },
      deleteWashing(){
        this.$store.commit('popData')
      },
      onFilterData (type) {
        console.log('22');
        this.$store.commit('typeShow',type )
      },
      changeStatus (index, status) {
        console.log("form changstatus : "+ index, status);
        this.wmId[index].status = status
        this.$forceUpdate();
      },
      
    },
  }
  </script>
  
<style>
.btnBox{
  width: 350px
}

</style>
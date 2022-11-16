<template lang="pug">

v-row.blue.lighten-4(style="width: 350px")
  v-col(cols='12')
    .text-center.font-weight-Bold 
      h1.black--text Washing Machine
      v-chip(:color="data.status !== 'Available' ? 'red' : 'green'") {{data.status}}

  v-col(cols='6')      
    .machine
      .drawer
      .panel
      .door
        .drum

  v-col(cols='6')   
    .text-center.font-weight-Bold
      .mt-5
        v-chip(color="primary" ) {{data.expectCoins*10}} BAHT
      .mt-5
        v-chip(:color="statusMoney  ? 'green' : 'red'") {{data.currentCoin * 10}} BAHT
      .mt-5
        v-btn(v-if="statusMoney" disabled @click="payMoney") Pay 10 Baht
        v-btn(v-else color="orange"  @click="payMoney") Pay 10 Baht
        

  v-col(cols='12')
    .text-center.mt-8
      v-btn(:disabled="data.status === 'Available'"  @click="finish" ) Finish
          
</template>

<script>

export default {
  name: "Washing_Machine",
  props:{
    data: {
      default: String
    },
    index: {
      default: null
    }
  },
  data(){
    return {
      Money0baht: 0,
    };
  },
  methods: {
    payMoney() {
      if (this.data.currentCoin < 4) {
          this.$store.commit('increment', this.index);
      }
    },
    finish() {
      this.$store.commit('resetWm', this.index);
    }
  },
  computed: {
    statusMoney() {
      return this.data.currentCoin === 4;
    }
  }
  }
</script>

<style >
  
  .machine {
    position: absolute;
    width: 150px;
    height: 200px;
    background: white;
    border-radius: 2%;
  }
  .drawer {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 50px;
    height: 25px;
    border: 2px solid gray;
    border-radius: 0 0 20% 0;
  }
  .drawer::after {
    content: "";  position: absolute;
    width: 35px;
    height: 7.5px;
    background: gray;
    bottom: 2.5px;
    right: 2.5px;
    border-radius: 0 0 30% 0;
  }
  .panel {
    position: absolute;
    width: 20px;
    height: 7.5px;
    background: gray;
    left: 75px;
    top: 15px;
  }
  .panel::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    background: #5fbd9d;
    right: 2.5px;
    top: 1px;
  }
  .panel::after {
    content: "";
    position: absolute;
    left: 40px;
    top: -5px;
    width: 17.5px;
    height: 17.5px;
    border: 2px solid gray;
    border-radius: 50%;
  }
  .door {
    position: absolute;
    background: white;
    left: 30px;
    bottom: 45px;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 5px solid gray;
    overflow: hidden;
  }
  .drum {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: gray;
    overflow: hidden;
    animation: drumRotate 2s infinite;
  }

</style>
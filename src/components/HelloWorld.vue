<template>
  <div id="example-1">
    <button @click="add">+</button>
    <span>{{count}}</span>
    <button @click="sub">-</button>
  </div>
</template>

<script>
  export default {
    name: "test01",
    el: '#example-1',
    data () {
      return {
        count: 0,
      }
    },
    methods: {
      add: function () {
        this.count++;
      },
      sub: function () {
        this.count--;
      }
    }
  }

</script>

<style scoped>

</style>
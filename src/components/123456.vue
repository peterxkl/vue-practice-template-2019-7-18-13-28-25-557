<template>
    <div >
        <input type="text" v-model.number="num" ><span>{{num}}</span>
        <test01 v-for="n in num" :key="n"></test01>
    </div>
</template>

<script>
    import test01 from './test01';
    export default {
        name: "123456",
        components: {
            test01
        },
        data () {
            return {
                num:0
            }
        }
    }
</script>

<style scoped>

</style>
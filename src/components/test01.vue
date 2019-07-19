<template>
    <div >
        <button @click="add">+</button>
        <span>{{count}}</span>
        <button @click="sub">-</button>
    </div>
</template>

<script>
    export default {
        name: "test01",
        data () {
            return {
                message: 0,
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
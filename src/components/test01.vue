<template>
    <div id="example-1">
        <button id="add" @click="add">+</button>
        <span>{{count}}</span>
        <button id="sub" @click="sub">-</button>
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
                count++;
            },
            sub: function () {
                count--;
            }
        }
    }

</script>

<style scoped>

</style>
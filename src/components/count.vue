<template>
    <div >
        <button @click="add">+</button>
        <span>{{this.$store.state.count}}</span>
        <button @click="sub">-</button>
    </div>
</template>

<script>
    export default {
        name: "test01",
        data () {
            return {

            }
        },
        methods: {
            add: function () {
                this.$store.commit('add')
            },
            sub: function () {
                this.$store.commit('sub')
            }
        },
        computed: {
            count () {
                return this.$store.state.count
            }
        }
    }

</script>

<style scoped>

</style>
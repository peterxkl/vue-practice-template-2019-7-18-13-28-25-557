<template>
    <div>
        <span>{{this.$store.state.count}}</span>
        <count v-for="n in 4"></count>
    </div>
</template>

<script>
    import count from './count';
    export default {
        name: "CounterSum",
        components: {
            count
        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
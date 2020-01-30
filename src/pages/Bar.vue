<template>
    <div id="bar">
        <Nav></Nav>
        <div id="body">
            <p>This is bar page. {{ count }}</p>
        </div>
    </div>
</template>


<style>
</style>


<script>
    import Nav from '../components/Nav.vue';
    export default {
        data: function() {
            return {
                count: this.$store.getters['bar/getCount'],
            }
        },
        beforeCreate: function () {
            this.$store.commit('bar/increment');
        },
        components: {
            Nav,
        },
    }
</script>
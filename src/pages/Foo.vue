<template>
    <div id="foo">
        <Nav></Nav>
        <div id="body">
            <p>This is foo page.</p>
        </div>
    </div>
</template>


<style>
</style>


<script>
    import Nav from '../components/Nav.vue';
    export default {
        components: {
            Nav,
        },
    }
</script>
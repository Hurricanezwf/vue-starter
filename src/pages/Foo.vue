<template>
    <div id="foo">
        <Nav></Nav>
        <div id="body">
            <p>This is foo page.</p>
            <textarea style="width: 50vw; height: 50vh;">{{ info }}</textarea>
        </div>
    </div>
</template>



<script>
    import Nav from '../components/Nav.vue';
    import axios from 'axios';
    export default {
        data: function() {
            return {
                info: '',
            }
        },
        components: {
            Nav,
        },
        mounted: function() {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:8010/',
            })
                .then(response => {
                    this.info = response.data
                })
                .catch(error => {
                    console.log(error)
                });
        },
    }
</script>
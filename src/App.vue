<template>
    <div id="app">

        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    const AppProps = Vue.extend({
        // props: {
        //     propMessage: String
        // }
    })
    @Component
    export default class App extends AppProps {
        // use prop values for initial data
        // helloMsg : string = 'Hello, ' + this.propMessage
    }
</script>

<style>
*{
    margin: 0px;
    padding: 0px
}

</style>
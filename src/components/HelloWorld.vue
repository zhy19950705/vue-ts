<template>
    <div>
        <input v-model="msg"/>
        <p>msg:
            {{ msg }}</p>
        <p>computed msg:
            {{ computedMsg }}</p>
        <Hello ref="helloComponent"/>
        <World/>
        <el-button type="primary" @click="greet">Greet</el-button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component,{mixins} from 'vue-class-component'
    import Hello from './Hello.vue'
    import World from './World'
    // import MyMixin from './mixin'
    // We declare the props separately to make props types inferable.
    const AppProps = Vue.extend({
        props: {
            propMessage: String
        }
    })
    @Component({
        components: {
            Hello,
            World
        }
    })
    export default class App extends AppProps {
        // inital data
        msg : number = 123
        // lifecycle hook
        mounted() {
            this.greet()
        }
        // computed
        get computedMsg() {
            return 'computed ' + this.msg
        }
        // method
        greet() {
            console.log('greeting: ' + this.msg)
            this
                .$refs
                .helloComponent
                .sayHello()
        }
        // dynamic component
        $refs !: {
            helloComponent: Hello
        }
    }
</script>
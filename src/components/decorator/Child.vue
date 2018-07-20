<template>
    <div>
        {{fullMessage}}
        {{propA}}
        {{propC}}
    </div>
</template>

<script lang="ts">
    import {Vue,Component, Prop} from 'vue-property-decorator'
    @Component
    export default class Child extends Vue {
        message : string = "hello";
        @Prop({type: String, default: 'Default Value'})msg! : string;
        @Prop(Number)propA!:number
        @Prop([String,Boolean])propC!:string|boolean
        get fullMessage() {
            return `${this.message},${this.msg}`;
        }
    }
</script>

<style scoped></style>
<template>
    <div>
        <input type="checkbox" :id="id" :checked=checked @change="changed"/>{{label}}
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Prop,Model} from 'vue-property-decorator'
    @Component
    export default class MyCheckBox extends Vue{
        @Prop() label!:string;
        @Prop() id!:string;

        // @Prop()
        // @Model('change') checked!:boolean
        @Model('change',{type:Boolean})checked!:boolean

        changed(ev:any){
            this.$emit('change',ev.target.checked)
        }
    }
</script>

<style scoped>

</style>
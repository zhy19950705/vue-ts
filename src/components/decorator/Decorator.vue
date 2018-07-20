<template>
    <div>
        <Child msg="what a good day" :propA="propA" propC="true" />
        <MyCheckBox :label="checkbox.label" :id="checkbox.id" v-model="checkbox.checked"/>
        {{JSON.stringify(checkbox)}}
        <WatchChild/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop,Provide} from 'vue-property-decorator'
    import Child from '@/components/decorator/Child.vue'
    import MyCheckBox from '@/components/decorator/CheckBox.vue'
    import WatchChild from '@/components/decorator/Watch.vue'
    @Component({
        components:{
            Child,
            MyCheckBox,
            WatchChild
        }
    })
    export default class Parent extends Vue{
        propA:number=33333
        checkbox={
            label:'Fancy checkbox',
            id:'checkbox-id',
            checked:true
        }

        /**@agument
         * 注入参数
         * */
        @Provide('users')
        users=[
            {
                name:'hh',
                id:0
            }
        ]
        @Provide()
        applyStatus:Array<any>=[
            {id:[0,3,17],title:'审批中',active:true},
            {id:[5,8,10],title:'代发货',active:false}
        ]
        config:object={}
        cursor:number=1
        applyList:Array<any>=[]
    }
</script>

<style scoped></style>
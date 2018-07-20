<template>
    <div>
        <el-button @click="clicked">click</el-button>{{sum.acum}}
       <el-row>
           {{child}}{{childCount}}
       </el-row>
        {{users}}
        {{applyStatus}}

    <div>
        <el-button @click="addToCount(1)">emit</el-button>{{count}}
        <el-button @click="resetCount">reset</el-button>
    </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Watch,Inject,Emit} from 'vue-property-decorator'
    @Component({})
    export default class WatchChild extends Vue{
        sum={
            acum:0
        }
        count:number=0
        child='watch string '
        childCount:number=0
        @Watch('sum',{deep:true})
        watchCount(newVal:object,oldVal:object){
            console.log(`newVal:${newVal},oldVal:${oldVal}`)
        }
        @Watch('child')
        onChildChanged(val:string,oldVal:string){
              this.childCount++
        }
        
        clicked(){
            this.sum.acum++;
            this.child=`changed`
        }

        @Inject('users') users:any
        @Inject() applyStatus!:Array<any>

        @Emit()
        addToCount(n:number){
            this.count+=n
        }

        @Emit('reset')
        resetCount(){
            this.count=0
        }

    }
</script> 

<style scoped>

</style>
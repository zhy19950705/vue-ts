<template>
    <div>
        <div class="search-bar">
            <el-row>
                <el-col :span="3">
                    <span class="svg-container">
                        <svg-icon icon-class="search"/>
                    </span>
                </el-col>
                <el-col :span="16">
                    <input type="text" class="search-input" />
                </el-col>
                <el-col :span="5">
                    <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="swiper-area">
            
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    // import Component from 'vue-class-component';
    import {Component, Prop} from 'vue-property-decorator'
    @Component({})
    export default class ShoppingMall extends Vue {
        bannerPicArray:Array<object>=[
           {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
           {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
           {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'}
        ]
    }
</script>

<style scoped>
    .search-bar {
        height: 2.2rem;
        /* background-color: #d8d6d7; */
        line-height: 2.2rem;
    }
    .search-bar {
        height: 2.2rem;
        /* background-color: #d704e1; */
        line-height: 2.2rem;
    }
    .svg-container {
        /* display: inline-block; */
        padding-top: 0.2rem;
        padding-left: 0.3rem;
        /* color: $dark_gray; */
    }
      .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      /* background-color: #e5017d; */
      color:#fff;
  }

</style>
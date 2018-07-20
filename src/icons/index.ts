import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

Vue.component('svg-icon', SvgIcon)

const requireAll = (requireContext:any)=>{
   requireContext.keys().map(requireContext)
}

declare var require:{
    [key:string]:any,
}
const req=require['context']('./svg', false, /\.svg$/)
const iconMap=requireAll(req)

// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./svg', false, /\.svg$/)
// /* eslint-disable */
// const iconMap = requireAll(req)

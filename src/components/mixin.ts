import {Vue,Component} from 'vue-property-decorator'

declare module 'vue/types/vue'{
    interface Vue {
        form:Object
        handleSubmit (name:any):Promise<any>
        handleReset(name:any):void
    }
}

@Component
export default class FormValidateMixin extends Vue{
    form:Object = {}
    handleSubmit (name:any) :Promise<any>{
        return new Promise((resolve,reject)=>{
            // _.get(this,`$refs.${name}`).validate(valid=>{
            //     if(valid){
            //         // this.$Message.success('提交成功')
            //         resolve()
            //     }else{
            //         // this.$Message.error('表单验证失败')
            //         reject()
            //     }
            // })
        });
    }
    handleReset (name:any):void{
       _.get(this,`$refs.${name}`).resetFields()
    }
}
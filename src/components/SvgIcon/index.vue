<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script lang="ts">
    import {Vue, Prop, Component} from 'vue-property-decorator'
    @Component
    export default class SvgIcon extends Vue {
        @Prop({type: String, required: true})iconClass !: string
        @Prop({type: String})className !: string
        get iconName() : string {return `#icon-${this.iconClass}`;}
        get svgClass() : string {
            if(this.className) {
                return `svg-icon ${this.className}`;
            } else {
                return 'svg-icon';
            }
        }
    }
</script>

<style scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>
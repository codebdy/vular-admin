<template>
    <v-container fluid
      :style="{ 
        width:'calc(100% - ' + ($vuetify.application.left + $vuetify.application.right) + 'px)' ,
        top:$vuetify.application.top + 'px',
        background: $store.state.vularApp.content.color,
        'box-shadow': isStick ? '2px 2px 5px rgba(0,0,0,0.1)' :'',
      }"
      v-scroll="onScroll"
      class="py-0 header-container"
    >
      <slot :heightPercent="heightPercent"></slot>
    </v-container>

</template>

<script>
    export default {
        name: 'vular-page-header',
        props: {},

        data() {
            return {
                topOffset: 0,
                smallLimit: 180,
                maxBaxeHeight: 200,
                minBaxeHeight: 140,
                isStick: false,
            }
        },

        computed: {
            baseHeight() {
                let height = this.maxBaxeHeight - this.topOffset / 1.5
                height = height < this.minBaxeHeight ? this.minBaxeHeight : height

                return height
            },

            //高度变化百分比0~100%
            heightPercent() {
                return (this.baseHeight - this.minBaxeHeight) / (this.maxBaxeHeight - this.minBaxeHeight)
            },

            breadCrumbsHeight() {
                return 50 + this.heightPercent * 40
            },
        },
        mounted() {},

        methods: {
            onScroll() {
                this.topOffset = parseInt(window.pageYOffset || document.documentElement.offsetTop || 0)
                if (this.breadCrumbsHeight < 0.5) {
                    this.isStick = true
                }
            }
        },
    }
</script>

<style scoped>
    .header-container {
        position: fixed;
        right: 0;
        z-index: 1;
    }
</style>
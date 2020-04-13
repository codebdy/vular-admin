<template>
  <v-container fluid>
    <h1><v-icon>mdi-compare</v-icon> 主题设置</h1>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.cardColor">
              <v-card-text>
                <v-row>
                  <v-col
                    cols="12"
                    md="2"
                    v-for="(theme, index) in themes"
                  >
                    <v-hover
                      v-slot:default="{ hover }"
                      open-delay="200"
                    >
                      <v-card flat 
                        :dark="theme.selected" 
                        :color="theme.selected? 'primary' :'#ecebf2' " 
                        :elevation="hover ? 16 : 2" 
                        @click="onThemeClick(theme)"
                      >
                        <v-img
                          :src="theme.src"
                        ></v-img>
                        <v-card-title class="title">{{theme.title}}</v-card-title>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
                <v-divider class="mt-6"></v-divider>
                <v-row class="pt-2 mt-4">
                  <v-col
                    cols="12"
                    md="4"
                    class="px-12"
                  >
                    <b>主题</b>
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      primary
                      label="Dark"
                    />
                    <v-text-field label="全局字体" 
                      v-model="$store.state.vularApp.fontFamily">
                    </v-text-field>
                    <b>Light主题配色</b>
                    <v-row>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.light.primary" 
                          label = "Primary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.light.secondary" 
                          label = "Secondary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.light.accent" 
                          label = "Accent"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.error" 
                        label = "Error"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.info" 
                        label = "Info"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.success" 
                        label = "Success"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.warning" 
                        label = "Warning"></VularColorInput>
                      </v-col>
                    </v-row>

                    <b>Dark主题配色</b>
                    <v-row>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.primary" 
                          label = "Primary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.secondary" 
                          label = "Secondary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.accent" 
                          label = "Accent"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.error" 
                          label = "Error"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.info" 
                          label = "Info"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.success" 
                          label = "Success"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.warning" 
                          label = "Warning"></VularColorInput>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <b>Logo内容</b>
                        <v-text-field label="图标" 
                          v-model="$store.state.vularApp.logo.src">
                        </v-text-field>
                        <v-text-field label="文字" 
                          v-model="$store.state.vularApp.logo.title">
                        </v-text-field>
                        <v-text-field label="Alt" 
                          v-model="$store.state.vularApp.logo.alt">
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    class="px-12"
                  >
                    <b>导航菜单</b>
                    <v-switch
                      v-model="$store.state.vularApp.drawer.dark"
                      primary
                      label="Dark"
                    />
                    <v-switch
                      v-model="$store.state.vularApp.drawer.light"
                      primary
                      label="Light"
                    />
                    <VularBackgrounInput v-model="$store.state.vularApp.drawer"></VularBackgrounInput>                    
                    <v-select
                      :items="drawers"
                      filled
                      label="类型"
                      v-model="$store.state.vularApp.drawer.type"
                    ></v-select>

                    <v-switch
                      v-model="$store.state.vularApp.drawer.clipped"
                      label="Clipped"
                      primary
                    />
                    <v-switch
                      v-model="$store.state.vularApp.drawer.floating"
                      label="浮动"
                      primary
                    />
                    <v-switch
                      v-model="$store.state.vularApp.drawer.mini"
                      label="迷你"
                      primary
                    />
                    <v-switch
                      v-model="$store.state.vularApp.drawer.expandOnHover"
                      label="悬停展开"
                      primary
                    />
                    <v-switch
                      v-model="$store.state.vularApp.drawer.showLogo"
                      label="显示LOGO"
                      primary
                    />
                    <span v-if="$store.state.vularApp.drawer.showLogo">导航Logo</span>
                    <v-switch
                      v-if="$store.state.vularApp.drawer.showLogo"
                      v-model="$store.state.vularApp.drawer.logo.dark"
                      primary
                      label="Dark"
                    />
                    <v-switch
                      v-if="$store.state.vularApp.drawer.showLogo"
                      v-model="$store.state.vularApp.drawer.logo.light"
                      primary
                      label="Light"
                    />
                    <VularBackgrounInput
                     v-if="$store.state.vularApp.drawer.showLogo"
                     v-model="$store.state.vularApp.drawer.logo"></VularBackgrounInput>                  
                    <v-switch
                      v-if="$store.state.vularApp.drawer.showLogo"
                      v-model="$store.state.vularApp.drawer.logo.flat"
                      primary
                      label="Flat"
                    />
                    <v-text-field label="样式" 
                      v-if="$store.state.vularApp.drawer.showLogo"
                      v-model="$store.state.vularApp.drawer.logo.style">
                    </v-text-field>
                   </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    class="px-12"
                  >
                    <b>工具栏</b>
                    <v-switch
                      v-model="$store.state.vularApp.appbar.showLogo"
                      primary
                      label="显示LOGO"
                    />
                    <v-switch
                      v-model="$store.state.vularApp.appbar.dark"
                      primary
                      label="Dark"
                    />
                    <v-switch
                      v-model="$store.state.vularApp.appbar.light"
                      primary
                      label="Light"
                    />
                    <v-switch
                      v-model="$store.state.vularApp.appbar.flat"
                      primary
                      label="Flat"
                    />
                    <VularBackgrounInput v-model="$store.state.vularApp.appbar"></VularBackgrounInput>
                    <v-text-field label="样式" 
                      v-model="$store.state.vularApp.appbar.style">
                    </v-text-field>
                    <b>页脚</b>
                    <v-switch
                      v-model="$store.state.vularApp.footer.inset"
                      label="Inset"
                      primary
                    />
                    <v-switch
                      v-model="$store.state.vularApp.footer.dark"
                      primary
                      label="Dark"
                    />
                    <v-switch
                      v-model="$store.state.vularApp.footer.light"
                      primary
                      label="Light"
                    />
                    <VularBackgrounInput v-model="$store.state.vularApp.footer"></VularBackgrounInput>

                    <b>内容区</b>
                    <VularBackgrounInput
                     v-model="$store.state.vularApp.content"></VularBackgrounInput>                  
                    <v-text-field label="字体" 
                      v-model="$store.state.vularApp.content.fontFamily">
                    </v-text-field>
                    <v-switch
                      v-model="$store.state.vularApp.content.flat"
                      primary
                      label="Flat"
                    />
                    <VularColorInput 
                      v-model="$store.state.vularApp.content.cardColor" 
                      label = "卡片颜色">
                    </VularColorInput>
                    

                  </v-col>
                </v-row>
              </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import VularBackgrounInput from "./VularBackgrounInput"
  import VularColorInput from "./VularColorInput"
  import demo1 from '../../../themes/demo1'
  import demo2 from '../../../themes/demo2'
  import demo3 from '../../../themes/demo3'
  import demo4 from '../../../themes/demo4'

  export default {
    name: 'theme-settings',
    components: {
      VularBackgrounInput,
      VularColorInput,
    },
    props: {
    },
    data () {
      return {
        drawers: [
          {
            'value':'default (no property)',
            'text':'Default (no property)'
          }, 
          {
            'value':'permanent',
            'text':'Permanent'
          }, 
          {
            'value':'temporary',
            'text':'Temporary'
          }, 
        ],
        themes:[
          {
            title:'Demo1',
            selected:true,
            src:"/images/demo1.jpg",
            theme:demo1,
          },
          {
            title:'经典深黑蓝',
            selected:false,
            src:"/images/demo2.jpg",
            theme:demo2,
          },
          {
            title:'简约待改',
            selected:false,
            src:"/images/demo3.jpg",
            theme:demo3,
          },
          {
            title:'简·黑·白',
            selected:false,
            src:"/images/demo4.jpg",
            theme:demo4,
          },
        ]
      }
    },

    methods: {
      onThemeClick(theme){
        for(var i = 0; i < this.themes.length; i++){
          let th = this.themes[i]
          if(th === theme){
            th.selected = true
            this.$store.commit('changeTheme', th.theme)
          }
          else{
            th.selected = false
          }
        }
      }
    },
  }
</script>

<style>
</style>
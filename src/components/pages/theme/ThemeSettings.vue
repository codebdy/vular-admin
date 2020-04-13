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
                    md="3"
                  >
                    <v-card>
                      <v-img
                        src="images/demo1.jpg"
                      ></v-img>
                      <v-card-title class="title">Demo1</v-card-title>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                  >
                    <v-card>
                      <v-img
                        src="images/demo1.jpg"
                      ></v-img>
                      <v-card-title class="title">Demo2</v-card-title>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                  >
                    <v-card>
                      <v-img
                        src="images/demo1.jpg"
                      ></v-img>
                      <v-card-title class="title">Demo3</v-card-title>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                  >
                    <v-card>
                      <v-img
                        src="images/demo1.jpg"
                      ></v-img>
                      <v-card-title class="title">Demo4</v-card-title>
                    </v-card>
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
      }
    },
    computed:{
    },


    methods: {
    },
  }
</script>

<style>
</style>
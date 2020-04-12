<template>
    <v-card :flat="inputValue.content.flat" :color="inputValue.content.cardColor">
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="3"
          >
            ddd
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            ddd
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            ddd
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            ddd
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="pt-2">
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
              v-model="inputValue.fontFamily">
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
                  v-model="inputValue.logo.src">
                </v-text-field>
                <v-text-field label="文字" 
                  v-model="inputValue.logo.title">
                </v-text-field>
                <v-text-field label="Alt" 
                  v-model="inputValue.logo.alt">
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
              v-model="inputValue.drawer.dark"
              primary
              label="Dark"
            />
            <v-switch
              v-model="inputValue.drawer.light"
              primary
              label="Light"
            />
            <VularBackgrounInput v-model="inputValue.drawer"></VularBackgrounInput>                    
            <v-select
              :items="inputValue.drawers"
              filled
              label="类型"
              v-model="inputValue.drawer.type"
            ></v-select>

            <v-switch
              v-model="inputValue.drawer.clipped"
              label="Clipped"
              primary
            />
            <v-switch
              v-model="inputValue.drawer.floating"
              label="浮动"
              primary
            />
            <v-switch
              v-model="inputValue.drawer.mini"
              label="迷你"
              primary
            />
            <v-switch
              v-model="inputValue.drawer.expandOnHover"
              label="悬停展开"
              primary
            />
            <v-switch
              v-model="inputValue.drawer.showLogo"
              label="显示LOGO"
              primary
            />
            <span v-if="inputValue.drawer.showLogo">导航Logo</span>
            <v-switch
              v-if="inputValue.drawer.showLogo"
              v-model="inputValue.drawer.logo.dark"
              primary
              label="Dark"
            />
            <v-switch
              v-if="inputValue.drawer.showLogo"
              v-model="inputValue.drawer.logo.light"
              primary
              label="Light"
            />
            <VularBackgrounInput
             v-if="inputValue.drawer.showLogo"
             v-model="inputValue.drawer.logo"></VularBackgrounInput>                  
            <v-switch
              v-if="inputValue.drawer.showLogo"
              v-model="inputValue.drawer.logo.flat"
              primary
              label="Flat"
            />
            <v-text-field label="样式" 
              v-if="inputValue.drawer.showLogo"
              v-model="inputValue.drawer.logo.style">
            </v-text-field>
           </v-col>
          <v-col
            cols="12"
            md="4"
            class="px-12"
          >
            <b>工具栏</b>
            <v-switch
              v-model="inputValue.appbar.showLogo"
              primary
              label="显示LOGO"
            />
            <v-switch
              v-model="inputValue.appbar.dark"
              primary
              label="Dark"
            />
            <v-switch
              v-model="inputValue.appbar.light"
              primary
              label="Light"
            />
            <v-switch
              v-model="inputValue.appbar.flat"
              primary
              label="Flat"
            />
            <VularBackgrounInput v-model="inputValue.appbar"></VularBackgrounInput>
            <v-text-field label="样式" 
              v-model="inputValue.appbar.style">
            </v-text-field>
            <b>页脚</b>
            <v-switch
              v-model="inputValue.footer.inset"
              label="Inset"
              primary
            />
            <v-switch
              v-model="inputValue.footer.dark"
              primary
              label="Dark"
            />
            <v-switch
              v-model="inputValue.footer.light"
              primary
              label="Light"
            />
            <VularBackgrounInput v-model="inputValue.footer"></VularBackgrounInput>

            <b>内容区</b>
            <VularBackgrounInput
             v-model="inputValue.content"></VularBackgrounInput>                  
            <v-text-field label="字体" 
              v-model="inputValue.content.fontFamily">
            </v-text-field>
            <v-switch
              v-model="inputValue.content.flat"
              primary
              label="Flat"
            />
            <VularColorInput 
              v-model="inputValue.content.cardColor" 
              label = "卡片颜色">
            </VularColorInput>
            

          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

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
      value:{default:()=>{return {}}},
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
      inputValue: {
        get:function() {
          return this.value;
        },
        set:function(val) {
          this.$emit('input', val);
        },
      },
    },


    methods: {
    },
  }
</script>

<style>
</style>
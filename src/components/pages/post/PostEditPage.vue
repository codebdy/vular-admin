<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <VularEditPageHeader :title="'文章编辑'" v-model="inputValue.header">
    </VularEditPageHeader>
      <div class="header-image-container"
        v-if="this.$store.state.vularApp.content.breadcurmbsImage"
        :style="{
          width : headerImageWidth,
          left : $vuetify.application.left + 'px',
          height : headerImageHeight,
          top : headerImageTop + 'px',
          opacity:inputValue.header.heightPercent,
        }" 
      >
        <div :style=" 'background-image:url(' + headerImageSrc + ');' " class="header-image"
        >
          <div class="header-image-mask">
          </div>
        </div>
      </div>
      <v-container fluid style="margin-top:120px;">
        <v-form>
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              <VularFormCard title="基本信息">
                <v-text-field
                  label="标题"
                  prepend-icon="mdi-format-title"
                ></v-text-field>
                <v-text-field
                  label="Slug"
                  prepend-icon="mdi-identifier"
                ></v-text-field>
                <v-row>
                  <v-col>
                    <v-select
                      :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                      label="作者"
                      prepend-icon="mdi-account-outline"
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date"
                          label="创作日期"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                     <v-text-field
                      label="来源"
                      prepend-icon="mdi-map-marker-multiple-outline"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="来源网址"
                      prepend-icon="mdi-link"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-textarea
                  name="input-7-1"
                  label="简介"
                  prepend-icon="mdi-card-text-outline"
                  value="轻轻的，我走了，正如我轻轻的来。"
                  hint="显示在列表页面的简要描述"
                ></v-textarea>
                <v-combobox
                  v-model="tags"
                  :items="['foo', 'bar', 'fizz', 'buzz']"
                  attach
                  chips
                  label="标签"
                  prepend-icon="mdi-tag-multiple-outline"
                  multiple
                  hint="可添加多个标签，回车分割"
                >
                  <template v-slot:selection="{ attrs, item, parent, selected }">
                    <v-chip
                      v-bind="attrs"
                      :input-value="selected"
                    >
                      <span class="pr-2">
                        {{ item }}
                      </span>
                      <v-icon
                        small
                        @click.stop="parent.selectItem(item)"
                      >mdi-close</v-icon>
                    </v-chip>
                  </template>                  

                </v-combobox>

              </VularFormCard>
              <VularFormCard title="SEO Meta">
                <div>
                  <div>预览</div>
                  <div style="color:blue;">https://vular.cn/one-good-framework</div>
                </div>
                <v-text-field
                  label="Title"
                ></v-text-field>
                <v-text-field
                  label="Keywords"
                ></v-text-field>
                <v-textarea
                  label="Description"
                ></v-textarea>
              </VularFormCard>
              <VularFormCard title="内容" pa="pa-0">
                <VularTinymce height="700px"></VularTinymce>
              </VularFormCard>
            </v-col>          
            <v-col
              cols="12"
              md="4"
            >
              <VularMediaSelectCard cols="3" v-model="inputValue.model.medias"></VularMediaSelectCard>
              <VularFormCard title="外观">
                <v-text-field
                  label="显示顺序"
                  prepend-icon="mdi-sort"
                ></v-text-field>
                <v-select
                  :items="['首页', '热门', '推荐', '置顶']"
                  label="附加属性"
                  prepend-icon="mdi-bookmark-plus-outline"
                  multiple
                  chips
                ></v-select>                
              </VularFormCard>
              <VularFormCard title="分类">
                <v-treeview
                  :items="treeItems"
                  selection-type="leaf"
                  selectable
                  return-object
                ></v-treeview>                
              </VularFormCard>
              <VularFormCard title="附加信息">
                <VularToManySelect prepend-icon="mdi-shopping-search"></VularToManySelect>
                <VularHasOneDialog title="SEO Meta" icon="mdi-trending-up"></VularHasOneDialog>
                <VularHasOneDialog title="OG Meta" icon="mdi-share-variant"></VularHasOneDialog>
              </VularFormCard>
            </v-col>          
          </v-row>
        </v-form>
      </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'post-edit-page',
    components: {
    },
    props: {
      value : { default: ()=>{
        return {
          header:{
            isStick: false,
            breadcrumbHeight: 90,
            listHeaderHeight: 0,
            heightPercent: 1,
          },
          model:{
            medias:[],
          },

        }}
      },
      headerImageField:{default:'medias'},
    },
    data () {
      return {
        date:new Date().toISOString().substr(0, 10),
        menu:false,//@@@以后要删除
        tags:['foo', 'bar', 'fizz', 'buzz'],
        treeItems: [
          {
            id: 1,
            name: '男装',
            children: [
              { id: 2, name: '绅士' },
              { id: 3, name: '休闲' },
            ],
          },
          {
            id: 4,
            name: '女鞋',
            children: [
              { id: 5, name: '辣妹' },
              { id: 6, name: '淑女' },
            ],
          },
          {
            id:7,
            name:"运动",
            children: [
              { id: 8, name: '滑板' },
              { id: 9, name: '拖鞋' },
            ],
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

      headerImageSrc(){
        let image = null
        if(this.headerImageField){
          let medias = this.inputValue.model[this.headerImageField]
          for(var i = 0; i < medias.length; i++){
            if(medias[i].type === 'image'){
              image = medias[i]
              break
            }
          }
        }

        return image ? image.src : '/images/login.jpg'
      },

      headerImageTop(){
        return this.$vuetify.application.top
      },

      headerImageWidth(){
        return "calc(100% - " + (this.$vuetify.application.left + this.$vuetify.application.right - 100) + "px )"
      },

      headerImageHeight(){
        return (this.inputValue.header.heightPercent*150 + 100) + 'px'
      },
    },

    methods: {
    },
  }
</script>

<style>
  .header-image-container{
    position: fixed; 
    top:0; 
    left:0; 
    width: calc(100% + 60px); 
    overflow: hidden;
    margin-left:-30px; 
    margin-top: -30px;
  }
  .header-image{
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
    position:absolute;
    width: 100%;
    height: 500px; 
    background-repeat: no-repeat; 
    background-size: cover ;
  }
  .header-image-mask{
    width: 120%;
    height: 100%; 
    opacity: 0.5; 
    background-image: linear-gradient(257deg,#7f7679,#79abb5 71%,#b9b1aa);
  }
</style>
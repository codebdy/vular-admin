<template>
  <VularEditPage v-model="page" title="文章编辑">
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <VularFormCard title="基本信息">
          <v-text-field
            label="标题"
            prepend-icon="mdi-format-title"
            v-model="page.model.title"
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
        <VularFormCard title="搜索引擎优化">
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
        <VularMediaSelectCard cols="3" v-model="page.model.medias"></VularMediaSelectCard>
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
          <VularHasOneDialog title="搜索引擎优化" icon="mdi-trending-up"></VularHasOneDialog>
          <VularHasOneDialog title="社交分享优化" icon="mdi-share-variant"></VularHasOneDialog>
        </VularFormCard>
      </v-col>          
    </v-row>
    
  </VularEditPage>
</template>

<script>
  export default {
    name: 'post-edit-page',
    components: {
    },
    props: {
    },
    data () {
      return {
        page: {
          header:{
            isStick: false,
            breadcrumbHeight: 90,
            listHeaderHeight: 0,
            heightPercent: 1,
          },
          model:{
            medias:[],
            title:"我是一阵风",
          },
          breadcrumbs:[
            {
              title : "文章列表",
              pageId:'test',
            }
          ],
        },
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
    },

    methods: {
    },
  }
</script>

<style>
</style>
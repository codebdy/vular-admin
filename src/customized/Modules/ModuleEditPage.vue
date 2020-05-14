<template>
    <VularBottomActionEditPage title="编辑模块">
      <VularFormCard title="基础信息">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              name="name"
              label="名称"
              outlined
              dense
              value="文章管理"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              name="name"
              label="ID标识"
              outlined
              value="1"
              disabled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </VularFormCard>
      <VularFormCard title="页面">
        <v-data-table
          hide-default-footer
          disable-sort
          :headers = "headers"
          :items="desserts"
        >
          <template v-slot:item.icon="{ item }">
            <v-icon v-text="item.icon"></v-icon>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon small>
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon small @click="dialog=true">
              <v-icon small>mdi-pencil-ruler</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-trash-can-outline</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            icon
            color="primary">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </VularFormCard>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card tile>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>文章列表页设计</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">{{$t('base.save')}}</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <ListDesign></ListDesign>
        </v-card>
      </v-dialog>      
    </VularBottomActionEditPage>
</template>

<script>
  import ListDesign from './ListDesign'
  export default {
    name: "module-edit-page",
    components: {
      ListDesign
    },
    props: {
    },

    data: () => ({
      dialog:false,
      headers: [
        {
          text:'ID',
          value:'id',
          sortable: false,
          width:'100px',
        },
        {
          text: '标题',
          value: 'title',
        },
        {
          text: '图标',
          value: 'icon',
        },
        {
          text: '模板',
          value: 'template',
        },
        {
          value: 'actions',
          width:'150px',
        },
      ],
      desserts: [
        {
          id:"12",
          title: '文章列表',
          icon:'mdi-view-list',
          template:'vular-list-page',
        },
        {
          id:"23",
          title: '文章编辑',
          icon:'mdi-image',
          template:'vular-edit-page',
        },
      ],
    }),

    methods: {
    }
  }
</script>

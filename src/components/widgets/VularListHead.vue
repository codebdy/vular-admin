<template>
  <div class="d-flex flex-row align-center flex-1">
    <v-checkbox
      v-model="selectAll"
      label="全选"
      class ="mt-5"
      :indeterminate = "true"
    ></v-checkbox>
    <v-spacer></v-spacer>
    <div 
      :style="{width: searchboxWidth + 'px'}"
      class="list-search-box"
    >
      <v-text-field
        hide-details
        prepend-inner-icon="mdi-magnify"
        style="padding-top:0px;"
        class="mt-n1"
        @focus="searchBoxFocused = true"
        @blur = "searchBoxFocused = false"
      ></v-text-field>
    </div>
    <div v-if="!collopsed">
      分类:
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="rgba(0,0,0, 0.3)"
            class="ml-2 mr-10"
            outlined
            rounded
            :small="isStick"
            v-on="on"
          >
            全部
            <v-icon right dark>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link color="primary" v-model="test">
            <v-list-item-content>
              <v-list-item-title>全部</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>鞋子大马猴</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>靴子</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>裤子</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      过滤器:
      <v-menu offset-y :close-on-content-click="false" :nudge-width="150">
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            class="ml-2 select-button"
            outlined
            rounded
            :small="isStick"
            v-on="on"
          >
            已完成
            <v-icon right dark>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
      <v-card :color="$store.state.vularApp.content.color">
        <v-divider></v-divider>

      <v-list class="pt-0 vular-filter-list" :color="$store.state.vularApp.content.card.color">
          <v-subheader 
            :style="{background: $store.state.vularApp.content.color}">过滤器1</v-subheader>
          <v-radio-group class="px-3">
            <v-radio
              v-for="n in 3"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
          <v-subheader>过滤器2</v-subheader>
          <v-list-item link color="primary" v-model="test">
            <v-list-item-content>
              <v-list-item-title>全部</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-subheader>过滤器3</v-subheader>
          <v-list-item link color="primary" v-model="test">
            <v-list-item-content>
              <v-list-item-title>全部</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-subheader>过滤器3</v-subheader>
          <v-list-item link color="primary" v-model="test">
            <v-list-item-content>
              <v-list-item-title>全部</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-subheader>过滤器3</v-subheader>
          <v-list-item link color="primary" v-model="test">
            <v-list-item-content>
              <v-list-item-title>全部</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-subheader>过滤器4</v-subheader>
          <v-list-item link color="primary" v-model="test">
            <v-list-item-content>
              <v-list-item-title>全部</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>鞋子大马猴</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>靴子</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>裤子</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text>取消</v-btn>
          <v-btn text>清空</v-btn>
          <v-btn color="primary" text>确定</v-btn>
        </v-card-actions>
      </v-card>
      </v-menu>
    </div>
    <v-btn class="ml-2" icon  elevation="0" color="grey"
      v-if="collopsed"
    >
      <v-icon :small="isStick" class="top-small-button">mdi-filter-menu-outline</v-icon>
    </v-btn>
  </div>

</template>

<script>
  export default {
    name: 'vular-list-head',
    props: {
      schema: {default : ()=>{return {}}},
      isStick: {default : false}
    },

    data () {
      return {
        selectAll: false,
        searchBoxFocused: false,
        test:true,
      }
    },

    computed:{
      collopsed(){
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      },

      searchboxWidth(){
        let width = 120
        if(this.searchBoxFocused){
          width = this.$vuetify.breakpoint.xs ? 150 : 200
        }
        return width
      }
    },

    methods: {
    },
  }
</script>

<style>
  .select-button{
    max-width: 200px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .list-search-box{
    margin-right: 50px; transition:all 0.3s;
  }

  .vular-filter-list{
    max-height: 500px;
    overflow-y: auto;
  }
</style>
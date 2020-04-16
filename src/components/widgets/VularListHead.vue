<template>
  <div class="d-flex flex-row align-center flex-1">
    <v-checkbox
      :label="selectedCounts > 0 ? '已选中' + selectedCounts + '条' : '全选'"
      class ="mt-5"
      v-model = "selectedSome"
      :indeterminate = "selectedCounts > 0 && selectedCounts != inputValue.length"
      @change = "onSelectedChange"
    ></v-checkbox>
    <v-spacer></v-spacer>
    <template v-if="!selectedSome">
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
        <template 
          v-for="(filter, index) in obviousFilters"
        >
          {{filter.label}}
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                :color="filter.model === filter.blankValue ? '' : 'primary'"
                class="ml-2 mr-3 filter-button"
                outlined
                rounded
                :small="isStick"
                v-on="on"
              >
                {{filter.blankValue === filter.model ? filter.blankLabel : filter.rules[filter.model]}}
                <v-icon right dark>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link color="primary" 
                v-model="filter.blankValue === filter.model"
                @click = "onFilter(filter, filter.blankValue)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{filter.blankLabel}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link color="primary"
                v-for="(label, value) in filter.rules"
                :key = 'value'
                v-model="value === filter.model"
                @click = "onFilter(filter, value)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{label}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </div>
      <v-menu offset-y 
        :close-on-content-click="false" 
        :nudge-width="150"
        v-model="isPopedFilters"
        >
        <template v-slot:activator="{ on }">
          <v-btn icon fab 
            v-on="on"
            :color="popFilersSelected ? 'primary' : ''"
            :small="!isStick"
            :x-small="isStick"
          >
            <v-icon class="top-small-button">mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-card :color="$store.state.vularApp.content.color">
          <v-list class="pt-0 vular-filter-list" :color="$store.state.vularApp.content.card.color">
            <template 
              v-for = "(filter, index) in obviousFilters"
              v-if = "collopsed"
            >
              <v-subheader 
                :style="{background: $store.state.vularApp.content.color}">
              {{filter.label}}
              </v-subheader>
              <v-radio-group class="px-3" v-model="filter.model">
                <v-radio
                  :label="filter.blankLabel"
                  :value="filter.blankValue"
                ></v-radio>
                <v-radio
                  v-for="(label, value) in filter.rules"
                  :key="value"
                  :label="label"
                  :value="value"
                ></v-radio>
              </v-radio-group>
            </template>
            <template v-for="(filter, index) in popFilters">
              <v-subheader 
                :style="{background: $store.state.vularApp.content.color}">
              {{filter.label}}
              </v-subheader>
              <v-radio-group class="px-3" v-model="filter.model">
                <v-radio
                  :label="filter.blankLabel"
                  :value="filter.blankValue"
                ></v-radio>
                <v-radio
                  v-for="(label, value) in filter.rules"
                  :key="value"
                  :label="label"
                  :value="value"
                ></v-radio>
              </v-radio-group>
            </template>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="isPopedFilters = false">关闭</v-btn>
            <v-btn color="primary" text @click="onClear">清空</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </template>
    <template v-else>
      <v-btn text rounded color="primary" class="mx-3"
        v-for="(action, index) in schema.batchActions"
        v-if="action.shortcut && !collopsed"
        :key = "action.action"
        :small="isStick"
        >
        {{action.label}}
        <v-icon right dark v-text="action.icon"></v-icon>
      </v-btn>
      <v-btn fab elevation="0" class="mx-3"
        v-if="schema.canBatchDelete"
        :color="$store.state.vularApp.content.card.color"
        :small="!isStick"
        :x-small="isStick"
      >
         <v-icon color="primary" class="top-small-button">mdi-delete-sweep-outline</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn fab elevation="0" :color="$store.state.vularApp.content.card.color"
            :small="!isStick"
            :x-small="isStick"
            v-on="on"
         >
            <v-icon color="primary" class="top-small-button">mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-list :color="$store.state.vularApp.content.card.color" class="px-2">
          <v-list-item link
            v-for="(action, index) in schema.batchActions"
            v-if="!action.shortcut || collopsed"
            :key = "action.action"
          >
            <v-list-item-icon>
              <v-icon color="primary" v-text="action.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{action.label}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </div>

</template>

<script>
  export default {
    name: 'vular-list-head',
    props: {
      schema: {default : ()=>{return {}}},
      isStick: {default : false},
      value: {default: ()=>{return []}},
    },

    data () {
      return {
        searchBoxFocused: false,
        obviousFilters: this.schema.obviousFilters,
        popFilters: this.schema.popFilters,
        isPopedFilters : false,
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
      selectedSome: {
        get:function() {
          return this.selectedCounts != 0;
        },
        set:function() {
        },
      },

      collopsed(){
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      },


      searchboxWidth(){
        let width = 120
        if(this.searchBoxFocused){
          width = this.$vuetify.breakpoint.xs ? 150 : 200
        }
        return width
      },

      selectedCounts(){
        let counts = 0
        this.inputValue.forEach(row=>{
          if(row.selected){
            counts ++
          }
        })

        return counts
      },

      popFilersSelected(){
        if(this.collopsed){
          for(var i = 0; i < this.schema.obviousFilters.length; i++){
            let filter = this.schema.obviousFilters[i]
            if(filter.blankValue != filter.model){
              return true
            }
          }
        }
        for(var i = 0; i < this.schema.popFilters.length; i++){
          let filter = this.schema.popFilters[i]
          if(filter.blankValue != filter.model){
            return true
          }
        }
        return false
      }
    },

    methods: {
      onFilter(filter, model){
        filter.model = model
      },

      onClear(){
        this.isPopedFilters = false
        if(this.collopsed){
          for(var i = 0; i < this.schema.obviousFilters.length; i++){
            let filter = this.schema.obviousFilters[i]
            filter.model = filter.blankValue
          }
        }
        for(var i = 0; i < this.schema.popFilters.length; i++){
          let filter = this.schema.popFilters[i]
          filter.model = filter.blankValue
        }
      },

      onSelectedChange(value){
        this.$emit('selectAll', value)
      }
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
    max-height: 400px;
    overflow-y: auto;
  }

  .filter-button{
    opacity: 0.6;
  }
</style>
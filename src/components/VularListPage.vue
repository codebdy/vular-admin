<template>
  <div style="padding-top: 218px;">
    <VularPageHeader>
      <template v-slot="{heightPercent}">
        <VularPageHeaderTitle :heightPercent="heightPercent">
          <h1 class="page-title">
            <v-icon color="primary">{{titleIcon}}</v-icon>
            {{title}}
          </h1>
          <v-divider class="mx-4" inset vertical></v-divider>
          <div>
            <span>{{$t('list.list-counts').replace('{0}', model.rows.length)}}</span>
          </div>
          <v-spacer></v-spacer>
          <v-btn rounded color="primary" dark v-if="addNewAction" :small="heightPercent < 0.5" @click="onAddNew">
            <v-icon left>mdi-plus</v-icon> {{$t('list.add-new')}}
          </v-btn>
        </VularPageHeaderTitle>
        <VularListHead :batchActions="batchActions" :filters="filters" :columns="columns" :canSelect="canSelect"
          :heightPercent="heightPercent" :transshape="transshape" :queryAction="queryAction" v-model="model"
          @selectAll="onSelectAll">

        </VularListHead>
      </template>
    </VularPageHeader>

    <v-container fluid align="center" justify="center" class="pt-0 mt-0">
      <v-card flat style="padding-top:10px;" :color="$store.state.vularApp.content.card.color"
        :style="$store.state.vularApp.content.card.style">
        <v-skeleton-loader type="table-tbody" v-if="loading" key="loading">
        </v-skeleton-loader>
        <VularListBody v-else key="list-body" :columns="columns" :rowActions="rowActions" :canSelect="canSelect"
          :transshape="transshape" :actionsColumn="actionsColumn" v-model="model.rows"></VularListBody>
        <v-card-actions justify="start">
          <v-pagination :length="15" :total-visible="7" circle color="primary" :page="model.formModel.page"
            v-model="model.formModel.page"></v-pagination>
        </v-card-actions>
      </v-card>
    </v-container>

  </div>
</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'vular-list-page',
    components: {},
    props: {
      vularId: {
        default: ''
      },
      defaultModel: {
        default: () => {
          return {}
        }
      },
      queryAction: {
        default: null
      },
      batchActions: {
        default: () => {
          return []
        }
      },
      filters: {
        default: () => {
          return []
        }
      },
      columns: {
        default: () => {
          return []
        }
      },
      rowActions: {
        defalut: () => {
          return []
        }
      },
      canSelect: {
        default: true
      },
      actionsColumn: {
        default: () => {
          return {
            width: '150px',
          }
        }
      },
      value: {
        default: () => {
          return []
        }
      },
      titleIcon: {
        default: ''
      },
      title: {
        default: ''
      },
      editPath: {
        default: ''
      },
      transshapeBreakPoint: {
        defalut: 'sm'
      },
      addNewAction: {
        default: null
      },
      //reload: false,
    },
    data() {
      return {
        selectedRows: [],
        transshape: false,
        model: {
          formModel: {
            page: 1,
          },
          rows: [],
        },
        loading: false,
      }
    },
    computed: {
      inputValue: {
        get: function () {
          return this.value;
        },
        set: function (val) {
          this.$emit('input', val);
        },
      },
    },
    created() {
      window.$bus.$on('dispatchModel', this.onDispatchModel)
      window.$bus.$on('ActionError', this.onActionError)
      //window.$bus.$on('reload', this.onReload)
    },
    mounted() {
      this.model.formModel = Object.assign({}, this.defaultModel)
      this.checkTransshape()
    },
    destroyed() {
      window.$bus.$off('dispatchModel', this.onDispatchModel)
      window.$bus.$off('ActionError', this.onActionError)
      //window.$bus.$on('reload', this.onReload)
    },

    methods: {
      onAddNew() {
        window.$bus.$emit('VularAction', this.addNewAction)
      },

      onDispatchModel(vularId, model) {
        if (vularId == this.vularId) {
          this.model.rows = model
          this.loading = false
        }
      },

      onActionError(vularId) {
        if (vularId == this.vularId) {
          this.loading = false
        }
      },

      //onReload(vularId){
      //  if(vularId == this.vularId){
      //    this.query()
      //  }
      //},

      query() {
        if (this.queryAction) {
          this.loading = true
          window.$bus.$emit('VularAction', this.queryAction, this.vularId, this.model.formModel)
        }
      },

      onSelectAll(selected) {
        this.model.rows.forEach(row => {
          this.$set(row, 'selected', selected)
        })
      },

      checkXs() {
        if (this.$vuetify.breakpoint.xs) {
          if (this.transshapeBreakPoint === 'xs') {
            this.transshape = true
          } else {
            this.transshape = false
          }
        }
      },

      checkTransshape() {
        if (this.transshapeBreakPoint == 'xs') {
          this.checkXs()
        }
        if (this.transshapeBreakPoint == 'sm') {
          this.checkSm()
        }
        if (this.transshapeBreakPoint == 'md') {
          this.checkMd()
        }
        if (this.transshapeBreakPoint == 'lg') {
          this.checkLg()
        }
      },

      checkSm() {
        if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
          this.transshape = true
        } else {
          this.transshape = false
        }
      },

      checkMd() {
        if (this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
          this.transshape = true
        } else {
          this.transshape = false
        }
      },

      checkLg() {
        if (this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
          this.transshape = true
        } else {
          this.transshape = false
        }
      },
    },

    watch: {
      "model.formModel": {
        handler() {
          this.query()
        },
        deep: true,
      },

      "$vuetify.breakpoint.xs": function () {
        this.checkTransshape()
      },
      "$vuetify.breakpoint.sm": function () {
        this.checkTransshape()
      },
      "$vuetify.breakpoint.md": function () {
        this.checkTransshape()
      },
      "$vuetify.breakpoint.lg": function () {
        this.checkTransshape()
      },

      "$vuetify.breakpoint.xl": function (val) {
        if (val) {
          this.transshape = false
        }
      }
    },

  }
</script>

<style>
  .top-small-button {
    opacity: 0.7;
  }

  .theme--light.v-pagination .v-pagination__item,
  .theme--light.v-pagination .v-pagination__navigation {
    background: transparent;
  }
</style>
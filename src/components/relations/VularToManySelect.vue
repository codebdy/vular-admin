<template>
    <v-combobox
      v-model="model"
      :filter="filter"
      :items="items"
      :search-input.sync="search"
      :prepend-icon = "prependIcon"
      label="相关产品"
      multiple
      chips
      clearable
      item-text="name"
    >
      <template v-slot:no-data>
        <v-list-item>
          <span class="subheading">Create</span>
          <v-chip
            label
            small
          >
            {{ search }}
          </v-chip>
        </v-list-item>
      </template>
      <template v-slot:selection="{ attrs, item, parent, selected }">
        <v-chip
          v-if="item === Object(item)"
          v-bind="attrs"
          :input-value="selected"
        >
          <span class="pr-2">
            {{ item.name }}
          </span>
          <v-icon
            small
            @click="parent.selectItem(item)"
          >mdi-close</v-icon>
        </v-chip>
      </template>
      <template v-slot:item="{ index, item }">
         {{ item.name }}
      </template>
    </v-combobox>
</template>

<script>
  export default {
    name: "vular-to-many-select",
    components: {
    },
    props: {
      prependIcon : {default:''},
    },

    data: () => ({
      activator: null,
      attach: null,
      index: -1,
      items: [
        { header: '做成动态加载' },
        {
          id:'1',
          name: '手机123',
        },
        {
          id:'2',
          name: '插座121',
        },
      ],
      nonce: 1,
      menu: false,
      model: [
        {
          id:'x',
          name: 'Foo',
        },
      ],
      x: 0,
      search: null,
      y: 0,
    }),

    watch: {
      model (val, prev) {
        if (val.length === prev.length) return

        this.model = val.map(v => {
          if (typeof v === 'string') {
            return null
          }

          return v
        })
      },
    },

    methods: {
      filter (item, queryText, itemText) {
        if (item.header) return false

        const hasValue = val => val != null ? val : ''

        const text = hasValue(itemText)
        const query = hasValue(queryText)

        return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      },
    },
  }
</script>

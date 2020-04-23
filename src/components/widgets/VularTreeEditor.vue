<template>
  <div>
    <v-treeview
      rounded
      hoverable
      :items="items"
    >
      <template v-slot:label="{ item, active }">
        <v-hover v-slot:default = "{hover}">
          <div 
            class="tree-item"
            draggable='true'
          >
            {{item.name}}
            <div v-if="hover" class="ml-3">
              <v-btn x-small icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn x-small icon>
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn x-small icon>
                <v-icon small>mdi-trash-can-outline</v-icon>
              </v-btn>
            </div>
          </div>
        </v-hover>
      </template>
    </v-treeview>
    <div>
      <v-btn icon class="ml-1">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
    }),
  }
</script>

<style>
  .tree-item{
    display: flex; 
    flex-flow: row;
    -moz-user-select:none; 
    -webkit-user-select:none; 
    -ms-user-select:none; 
    user-select:none;
  }
</style>
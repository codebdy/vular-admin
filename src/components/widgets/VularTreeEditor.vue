<template>
    <v-layout
      row
    >
      <v-flex
        xs12
        md6>
        <v-toolbar dense card color="transparent">
          <v-icon>view_list</v-icon>
          <v-toolbar-title>{{label}}{{$t('tree.list')}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip top>
            <v-btn 
              fab
              bottom
              right
              absolute
              small
              slot="activator"  color="info" icon @click="add">
              <v-icon small>add</v-icon>
            </v-btn>
            <span>{{$t('tree.add-on-root')}}</span>
          </v-tooltip>

        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text
          class="pa-3 pl-4"
            @dragover="allowDropRoot($event)"
            @drop="dropRoot($event)"
        >
          <div 
            @dragover="doNothing"
            @drop.stop="doNothing">
            <v-treeview
              v-model="selected"
              :items="items"
              :activatable = 'true'
              :active.sync = 'active'
              :activeClass="activeClass"
              :dark = "dark"
              :expandIcon = 'expandIcon'
              :hoverable = 'true'
              :itemChildren="itemChildren"
              :itemKey = 'itemKey'
              :itemText = 'itemText'
              :labelColor = 'nodeLabelColor'
              :light = 'light'
              :multipleActive = 'false'
              :open.sync = "open"
              :openAll = "openAll"
              :openOnClick ="false"
              :selectable = 'selectable'
              :selectedColor = 'selectedColor'
              :transition = 'transition'
            >

              <template slot="prepend" slot-scope="{ item, open, leaf }" >
                <div
                  draggable='true'
                  @dragover.stop="allowDrop($event, item)"
                  @dragleave.stop="dragLeave($event)"
                  @drop.stop="drop($event, item)"
                  @dragstart.stop="drag($event, item)"
                  @dragend.stop="dragend($event)"
                  style="height: 38px;line-height: 40px;"
                >
                  <vular-node  v-if="item[itemChildren] && item[itemChildren].length >0" :schema="open ? openIcon : closeIcon"  style="cursor: pointer;" >
                  </vular-node>
                  <vular-node  v-else :schema="leafIcon"  style="cursor: pointer;" >
                  </vular-node>
                </div>
              </template>
              <template slot="label" slot-scope="{ item, open, leaf }" >
                <div style="cursor: pointer;height: 38px;line-height: 38px;"
                  draggable='true'
                  @dragover.stop="allowDropLabel($event, item)"
                  @dragleave.stop="dragLeave($event)"
                  @drop.stop="dropLabel($event, item)"
                  @dragstart.stop="drag($event, item)"
                  @dragend.stop="dragend($event)"

                >{{item[itemText]}}</div>
               
              </template>
              <template slot="append" slot-scope="{ item, open, leaf }">
                <v-tooltip top>
                  <v-btn  slot="activator" small icon  class="ma-0" @click.stop="add(item)">
                    <v-icon small color="light-blue">add</v-icon>
                  </v-btn>
                  <span>{{$t('tree.add-sub-node')}}</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-btn  slot="activator" small icon class="ma-0" @click.stop="remove(item[itemKey])">
                    <v-icon small color="grey">delete</v-icon>
                  </v-btn>
                  <span>{{$t('tree.delete')}}</span>
                </v-tooltip>
                
              </template>
            </v-treeview>
          </div>
          <div class="pa-2 pt-3" style="color:#757575">{{$t('tree.tips')}}</div>
        </v-card-text>
      </v-flex>
      <v-divider vertical></v-divider>

      <v-flex
        xs12
        md6>
        <v-toolbar dense card color="transparent">
          <v-icon>description</v-icon>
          <v-toolbar-title>{{label}}{{$t('tree.edit')}}</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-form v-if="editedItem" ref="form">
            <v-layout row wrap>
              <v-flex v-for="(flex,i) in flexs" :class="flex.class" :key="i">
                <component v-bind:is="flex.field.name" v-bind="flex.field.props" :rules="transRules(flex.field.rules)" v-model="editedItem[flex.field.field]">
                </component>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'vular-tree-editor',
  props: {
    flexs:Array,
    activatable:{
      type:Boolean,
      default:false
    },
    activeClass: {
      type:String,
      default:'v-treeview-node--active'
    },

    dark: {
      type: Boolean,
      default: null
    },

    expandIcon: {
      type:String,
      default:'$vuetify.icons.subgroup'
    },

    itemChildren:{
      type:String,
      default:'children'
    },

    itemKey:{
      type:String,
      default:'id'
    },

    itemText:{
      type:String,
      default:'name'
    },

    //parentKey:{
    //  type:String,
    //  default:'parent_id'
    //},

    value: {
      type: Array,
      default: () => ([])
    },

    label:String,

    light: {
      type: Boolean,
      default: null
    },
    //open: {
    //  type: Array,
    //  default: () => ([])
    //},
    openAll: Boolean,
    //openOnClick: Boolean,
    selectable: {
      type:Boolean,
      default:false
    },
    selectedColor: {
      type : String,
      default:'indigo'
    },
    transition: Boolean,

    flat:Boolean,
    tile:{
      type:Boolean,
      default:true
    },
    //title:String,
    nodeLabelColor:{
      type:String,
      default:'grey lighten-3'
    },
    leafIcon:Object,
    openIcon:Object,
    closeIcon:Object,
    //value: {
    //  type: Array,
    //  default: () => ([])
    //},
  },
  data: function () {
    return {
      active:[],
      open:[3],
      editedItem:{},
      selected:[],
      idCusor:1,
      dragedItem:null,
      overItem:null,
      items:this.value,
    }
  },

  /*computed:{
    inputValue: {
        get:function() {
            return this.value;
        },
        set:function(val) {
          console.log(val)
          this.$emit('input', val);
        },
    },
  },*/

  created () {
    //console.log(this.value)
  },

  methods: {
    allowDropRoot:function(event){
      if(this.dragedItem){
        event.preventDefault()
      }
    },

    dropRoot:function(event){
      if(this.dragedItem){
        this.doRemove(this.dragedItem[this.itemKey])
        this.items.push(this.dragedItem)
      }
    },

    drag:function(event,item){
      //console.log('ddd')
      //event.dataTransfer.setData('media', media)
      this.dragedItem = item
    },
    drop:function(event, item){
      //console.log('listDrop', event)
      this.overItem = null; 
      event.preventDefault();
      //this.active = []

      if(this.dragedItem){
        this.doRemove(this.dragedItem[this.itemKey])
        if(!item.children){
          this.$set(item,'children', [])
        }
        item.children.push(this.dragedItem)
      }

    },
    dropLabel:function(event, item){
      this.overItem = null; 
      event.preventDefault();
      var souceId = this.dragedItem[this.itemKey]
      var sourcParent = this.getParentById(souceId)
      var sourceParentChildren = this.items
      if(sourcParent){
        sourceParentChildren = sourcParent.children;
      }
      var sourceIndex = this.getIndex(sourceParentChildren, souceId)

      var targetId = item[this.itemKey]
      var targetParent = this.getParentById(targetId)
      var targetParentChildren = this.items
      if(targetParent){
        targetParentChildren = targetParent.children;
      }
      var targetIndex = this.getIndex(sourceParentChildren, targetId)
      if(sourcParent){
        this.$set(sourcParent.children, targetIndex, this.dragedItem);
      }
      else{
        this.$set(this.items, targetIndex, this.dragedItem);
      }
      if(targetParent){
        this.$set(targetParent.children, sourceIndex, item);
      }
      else{
        this.$set(this.items, sourceIndex , item);
      }


    },
    dragend:function(){
      this.dragedItem = null
      this.overItem = null; 
    },

    dragLeave:function(){
      this.overItem = null; 
    },

    allowDrop:function(event, item){
      //console.log(event)
      if(this.dragedItem[this.itemKey] == item[this.itemKey]){
        return;
      }
      this.overItem = item 
      event.preventDefault()
    },

    allowDropLabel:function(event, item){
      //console.log(event)
      if(this.dragedItem[this.itemKey] == item[this.itemKey]){
        return
      }
      var souceId = this.dragedItem[this.itemKey]
      var sourcParent = this.getParentById(souceId)
      var targetId = item[this.itemKey]
      var targetParent = this.getParentById(targetId)
      if((!sourcParent && targetParent)||(sourcParent && !targetParent)){
        return
      }
      if((sourcParent && targetParent)&&(sourcParent[this.itemKey] != targetParent[this.itemKey])){
        return
      }

      this.overItem = item 
      event.preventDefault()
    },

    add(parent=null){
      parent = this.getItemById(parent[this.itemKey])
      //console.log(parent)
      if(parent){
        if(!parent.children){
          this.$set(parent,'children', [])
        }
        //parent.children = parent.children?parent.children:[]
        parent.children.push(this.newNode())
        this.open.push(parent[this.itemKey])
      }
      else{
        this.items.push(this.newNode())
      }

    },

    newNode(){
      var node = {}
      node[this.itemKey] = 'temp-' + this.idCusor
      node[this.itemText] = 'new node' + this.idCusor
      this.$set(this.active, 0, node[this.itemKey])
      this.idCusor ++
      return node
    },

    remove(itemKey){
      if(confirm(this.$t('tree.confirm-delete'))){
        this.doRemove(itemKey)
      }
    },

    doRemove(id, parent = null){
      var nodes = this.items;
      if(parent){
        nodes = parent.children?parent.children:[]
      }

      for(var i = 0; i< nodes.length; i++){
        if(nodes[i][this.itemKey] == id){
          nodes.splice(i,1)
          return true
        }
        if(this.doRemove(id, nodes[i])){
          return true
        }
      }
    },

    getItemById(id, node = null){
      var items = this.items
      const itemKey = this.itemKey
      if(node){
        items = node.children
      }

      if(!items){
        return;
      }
      
      for(var i = 0; i < items.length; i++){
        if(items[i][itemKey] == id){
          return items[i];
        }
        var foundChild = this.getItemById(id, items[i]);
        if(foundChild){
          return foundChild;
        }
      }
      
    },

    getParentById(id, parent = null){
      var items = this.items
      if(parent){
        items = []
        if(parent.children){
          items = parent.children
        }
      }
      for(var i = 0; i < items.length; i++){
        if(items[i][this.itemKey] == id){
          return parent;
        }
        var foundParent = this.getParentById(id, items[i])
        if(foundParent){
          return foundParent;
        }
      }
      return null
    },

    getIndex(list, id){
      for(var i = 0; i < list.length; i++){
        if(list[i][this.itemKey] == id){
          return i;
        }
      }

      return -1;
    },

    doNothing(){

    }
  },

  watch: {
    active: {
      handler (newItem, oldItem) {
        //console.log(newItem)
        //console.log(newItem)
        var item = newItem[0]
        this.editedItem = this.getItemById(newItem[0])
      },
      deep: true
    },

    items: {
      handler (newItems, oldItems) {
        this.$emit('input',newItems)
        //console.log(newItem)
        //console.log(newItem)
        //var item = newItem[0]
        //this.editedItem = this.getItemById(newItem[0])
      },
      deep: true
    },
  },

}
</script>
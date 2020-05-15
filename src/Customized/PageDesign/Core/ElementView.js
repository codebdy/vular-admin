import '../stylus/element.styl'

import ElementLabel from './ElementLabel'
import ElementToolbar from './ElementToolbar'

export default {
  name: 'element-view',
  components: {
    ElementLabel,
    ElementToolbar,
  },

  props:['value'],
  data: function () {
    return {
      children:this.value.children,
      classes:{},
      styles:{},
      nodProps:{},
      labelClass:{},
      isShowLabel:false,
      hasToolbar:false,
    }
  },

  computed: {
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
    dragend(event){
      this.inputValue.dragend(event)
    },

    dragstart(event){
      this.inputValue.dragstart(event)
      event.stopPropagation()
    },

    getOn(){
      const self = this;
      var on = {}

      on.mousemove = function(event){
        self.inputValue.mouseover(event)
        event.stopPropagation()
      },

      on.mouseout = function(event){
        self.inputValue.mouseout(event)
      },

      on.dragover =  function (event) {
        self.inputValue.dragover(event)
        event.stopPropagation()
      }

      on.dragleave = function(event){
        self.inputValue.dragleave(event)
      }
      on.drop = function(event){
        self.inputValue.drop(event)
        event.stopPropagation()
      }
      on.dragstart = self.dragstart
      on.dragend = self.dragend

      on.click = function(event){
        self.inputValue.click(event)
        event.stopPropagation()
     }

     return on;
    },

    focused(element){
      this.inputValue.state.focusedElement(element)
    },

    dragovered(element){
      if(element._vid !== this.inputValue._vid){
        if(!(this.status == "insert-before" || this.status == "insert-after")){
          this.inputValue.setStatus('normal')
        }
      }
    },

    /*removeChild(data){
      console.log('removeChild', data)
      if(data.parent._vid === this.inputValue._vid){
        for(var i = 0; i < this.inputValue.children.length; i++){
          if(this.inputValue.children[i]._vid === data.child._vid){
            this.inputValue.children.splice(i, 1)
          }
        }
      }
    },

    addChild(data){
      console.log('addChild', data)
      if(data.parent._vid === this.inputValue._vid){
        data.child.parent = this.inputValue
        this.inputValue.children.splice(data.index?data.index:0, 0, data.child)
      }      
    },*/

    dragged(element){
      this.inputValue.setDraggedElement(element)
    },

    unfocusAll(){
      this.inputValue.state.unfocus()
    },

    setEditPadding(padding){
      this.inputValue.setEditPadding(padding)
    },

    editorStateChange(state){
      this.inputValue.setEditorState(state)
      this.stateChange(this.inputValue)
    },

    preview($isPreview){
      this.inputValue.preview($isPreview)
    },

    stateChange(node){
      if(node._vid === this.inputValue._vid){
        this.classes = node.getClass()
        this.styles = node.getStyle()
        this.nodProps = node.getProps()
        this.labelClass = node.getLabelClass()
        this.isShowLabel = node.isShowLabel()
        this.hasToolbar = node.hasToolbar()
        this.$set(this.inputValue, 'children', node.children)
        //this.$forceUpdate()
      }
    },
  },


  created () {
    $editorBus.$on('focused', this.focused)
    //$editorBus.$on('dragovered', this.dragovered)
    //$editorBus.$on('dragged', this.dragged)
    //$editorBus.$on('removeChild', this.removeChild)
    //$editorBus.$on('addChild', this.addChild)
    $editorBus.$on('unfocusAll', this.unfocusAll)
    //$editorBus.$on('setEditPadding', this.setEditPadding)
    $editorBus.$on('editorStateChange', this.editorStateChange)
    //$editorBus.$on('preview', this.preview)
    $editorBus.$on('stateChange', this.stateChange)
  },

  mounted(){
    this.stateChange(this.inputValue)
  },

  destoryed () {
    $editorBus.$off('focused', this.focused)
    //$editorBus.$off('dragovered', this.dragovered)
    //$editorBus.$off('dragged', this.dragged)
    //$editorBus.$off('removeChild', this.removeChild)
    //$editorBus.$off('addChild', this.addChild)
    $editorBus.$off('unfocusAll', this.unfocusAll)
    $editorBus.$off('editorStateChange', this.editorStateChange)
    //$editorBus.$off('preview', this.preview)
    $editorBus.$off('stateChange', this.stateChange)
  },

  render: function (createElement) {
    const self = this
    const children = [];
    if(self.isShowLabel){
      children.push(createElement('element-label',{props:{label:self.inputValue.name},'class':self.labelClass}))
    }


    
      self.inputValue.children.forEach(function (com) {
        if(com){
          if(com.text){
            children.push(com.text)
          }
          else{
            children.push(createElement(
                'element-view', 
                {
                  props:{ 'value':com },
                  on: {
                  },
                  scopedSlots:com.scopedSlots,
                  slot:com.slot,
                }
              )
            )
          }
        }
      })
   

    if(self.hasToolbar){
      children.push(createElement('element-toolbar',{nativeOn:{'dragend':self.dragend, dragstart:self.dragstart}}))
    }

    var vNode = createElement(
      self.inputValue.name, 
      {
        'class': self.classes,
        style:self.styles,
        props:self.nodProps,
        attrs:self.inputValue.attrs,
        domProps:self.inputValue.domProps,
        on: self.getOn(),
        nativeOn: self.getOn(),
        //directives:self.inputValue.directives,
        scopedSlots:self.inputValue.scopedSlots,
        slot:self.inputValue.slot,
        key:self.inputValue.key,
        ref:self.inputValue.ref,
        refInFor:true,
      }, 
      children
    )

    return vNode;
  },

}


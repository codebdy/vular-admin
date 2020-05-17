import '../stylus/element.styl'
import Canvas from "./Canvas"

export default {
  name: 'element-view',
  components: {
    Canvas,
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
    getOn(){
      var on = {}

      /*on.mousemove = event=>{
        this.inputValue.mouseover(event)
        event.stopPropagation()
      },

      on.mouseout = event=>{
        this.inputValue.mouseout(event)
      },

      on.dragover =  event => {
        this.inputValue.dragover(event)
        event.stopPropagation()
      }

      on.dragleave = event =>{
        this.inputValue.dragleave(event)
      }
      on.drop = event =>{
        this.inputValue.drop(event)
        event.stopPropagation()
      }
      on.dragstart = this.dragstart
      on.dragend = this.dragend

      on.click = event =>{
        this.inputValue.click(event)
        event.stopPropagation()
     }*/

     return on;
    },

  },


  created () {
    //$editorBus.$on('focused', this.focused)
    //$editorBus.$on('dragovered', this.dragovered)
    //$editorBus.$on('dragged', this.dragged)
    //$editorBus.$on('removeChild', this.removeChild)
    //$editorBus.$on('addChild', this.addChild)
    //$editorBus.$on('unfocusAll', this.unfocusAll)
    //$editorBus.$on('setEditPadding', this.setEditPadding)
    //$editorBus.$on('editorStateChange', this.editorStateChange)
    //$editorBus.$on('preview', this.preview)
    //$editorBus.$on('stateChange', this.stateChange)
  },

  mounted(){
    //this.stateChange(this.inputValue)
  },

  destoryed () {
    //$editorBus.$off('focused', this.focused)
    //$editorBus.$off('dragovered', this.dragovered)
    //$editorBus.$off('dragged', this.dragged)
    //$editorBus.$off('removeChild', this.removeChild)
    //$editorBus.$off('addChild', this.addChild)
    //$editorBus.$off('unfocusAll', this.unfocusAll)
   // $editorBus.$off('editorStateChange', this.editorStateChange)
    //$editorBus.$off('preview', this.preview)
    //$editorBus.$off('stateChange', this.stateChange)
  },

  render: function (createElement) {
    const children = []
    const self = this
    self.inputValue.children.forEach(com => {
      if (com) {
        if (com.text) {
          children.push(com.text)
        } else {
          children.push(createElement(
            'element-view', {
              props: {
                'value': com
              },
              on: {},
              scopedSlots: com.scopedSlots,
              slot: com.slot,
            }
          ))
        }
      }
    })

    var vNode = createElement(
      self.inputValue.name, {
        'class': self.classes,
        style: self.styles,
        props: self.nodProps,
        attrs: self.inputValue.attrs,
        domProps: self.inputValue.domProps,
        on: self.getOn(),
        nativeOn: self.getOn(),
        //directives:this.inputValue.directives,
        scopedSlots: self.inputValue.scopedSlots,
        slot: self.inputValue.slot,
        key: self.inputValue.key,
        ref: self.inputValue.ref,
        refInFor: true,
      },
      children
    )

    return vNode;
  },
}


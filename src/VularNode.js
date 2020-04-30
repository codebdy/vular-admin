export default {
  name: 'vular-node',
  props:['schema', 'value'],
  data: function () {
    return {
      //vularValue : this.schema.defaultValue,
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
  },

  render: function (createElement) {
    const self = this
    const children = [];
    if(self.schema.text){
      children.push(self.schema.text)
    }
    if(self.schema.children){
      self.schema.children.forEach(function (com) {
        if(com){
            //console.log(com.model)
            children.push(createElement(
                'vular-node', 
                {
                  props:{ schema:com, value: self.inputValue },
                  on: {
                    //input: function (event) {
                    //  self.$emit('input', event.target.value)
                    //}
                  },
                  //'class': com['class'],
                  //style:com.style,
                  //attrs:com.attrs,
                  //domProps:com.domProps,
                  //on: self.getOn(),
                  //directives:self.schema.directives,
                  scopedSlots:com.scopedSlots,
                  slot:com.slot,
                  //key:com.key,
                  //ref:com.ref,
                  //refInFor:true,
                }
              )
            )
        }
      })
    }

    if(self.schema){
      //console.log(self.schema.ref)
      //此处vularViewModel初始化，防止created不被调用，没有传入值
      //self.vularViewModel = this.schema.viewModel ? this.schema.viewModel : this.viewModel
      self.schema.props = self.schema.props ? self.schema.props : {}

      //if(self.schema.props && self.schema.props['rules']){
      //  self.schema.props.rules = eval(self.schema.props.rules)
      //

      //if(self.schema.field){
        //let val = self.schema.defaultValue
        self.schema.props['value'] = this.inputValue //如果未定义，就赋空字符串，防止校验抛异常
        self.schema.props['inputValue'] = this.inputValue //如果未定义，就赋空字符串，防止校验抛异常
        //console.log(self.schema.field)
        //console.log(self.schema.props['value'])
      //}
      //else{
      //  self.schema.props['viewModel'] = self.vularViewModel
      //}
      //self.schema.props['schema'] = self.schema
      //console.log(self.schema.ref)
    }
    
    var vNode = createElement(
      self.schema.name, 
      {
        'class': self.schema['class'],
        style:self.schema.style,
        attrs:self.schema.attrs,
        props:self.schema.props,
        domProps:self.schema.domProps,
        on: {
          input: function (event) {
            self.$emit('input', event.target.value)
          }
        },
        //on: self.getOn(),
        //directives:self.schema.directives,
        scopedSlots:self.schema.scopedSlots,
        slot:self.schema.slot,
        key:self.schema.key,
        ref:self.schema.ref,
        refInFor:true,
      }, 
      children
    )

    return vNode;
  },

}

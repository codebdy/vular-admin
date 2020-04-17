export default {
  name: 'vular-node',
  props:['schema'],
  data: function () {
    return {
      //vularValue : this.schema.defaultValue,
    }
  },

  methods: {
    commitEvent (event) {
      if(event){
        if(event.isEvent){
          //$bus.$emit(event.action, event.params);
        }
        else{
          //$bus.$emit('vularAction', event);
        }
      }
    },

    saveValue(value){
      if(this.schema.field){
        //console.log(value)
        this.vularValue = value 
        //$bus.$emit('input', {value:value, owner:this.schema.props.owner, field:this.schema.field})
      //  this.vularViewModel[this.schema.field] = value;
      }
    },

    validate(){
      const self = this;
      //console.log(self.schema)
      if(self.schema.rules){
        var rules = self.schema.rules;
        var val =  self.vularValue
        var errors = []
        rules.filter(function (rule) {
          rule = eval(rule)
          if(rule(val) !== true){
            errors.push(rule(val));
          }
        })
        self.$set(self.schema.props, 'errorMessages', errors);
        self.schema.props.error = errors.length > 0? true: false

        return !self.schema.props.error;
      }

      return true;
    },

    getOn(){
      const self = this;
      var on = {}

      on.input =  function (value) {
        self.saveValue(value)
        if(self.schema.props.error){
          self.validate();
        }
      }

      on.blur = function(event){
          self.validate();
      }

      on.change =  function (value) {
        self.saveValue(value)
      }

      on.keyup = function (event) {
        if (event.target !== event.currentTarget) return
        if(!event) return
        if(!self.schema.on || !self.schema.on.keyup) return
        if (event.keyCode != self.schema.on.keyup.keyCode) return
        self.commitEvent(self.schema.on.keyup)
      }

      if(self.schema && self.schema.on && self.schema.on.click){
        on.click =  function(){
          self.commitEvent(self.schema.on.click)
        }
      }

      if(self.schema && self.schema.on && self.schema.on.pagination){
        on.pagination =  function(event){
          var action = self.schema.on.pagination;
          action.params.pagination = event;
          self.commitEvent(action)
        }
      }

      return on;
    },

    clearInput(owner){
      const self = this;
      if(owner === self.schema.props.owner){
        self.vularValue = self.schema.defaultValue
      }

    },
    inputError(owner, error){
      const self = this;
      if(owner === self.schema.props.owner){
        if(error.field === self.schema.field){
          self.schema.props.errorMessages = [error.message]
          self.schema.props.error = true
        }
      }
    },
    valueChange(owner, data){
      const self = this;
      if(owner === self.schema.props.owner){
        if(data.field === self.schema.field){
          //console.log(data.field,self.schema.field)
          //console.log(data.value)
          //self.schema.defaultValue = data.value
          self.vularValue = data.value
        }
      }
    },
    defaultValueChange(owner, data){
      const self = this;
      if(owner === self.schema.props.owner){
        if(data.field === self.schema.field){
          self.schema.defaultValue = data.value
          self.vularValue = data.value
        }
      }

    },
  },

  created () {
    //console.log(this.schema, this)
    //if(this.schema.props && this.schema.props.owner){
      //$bus.$emit('registerInput', {input: this, owner: this.schema.props.owner})
    //}

    //$bus.$on('clearInput', this.clearInput)
    //$bus.$on('inputError', this.inputError)
    //$bus.$on('valueChange', this.valueChange)
    //$bus.$on('defaultValueChange', this.defaultValueChange)
  },

  destroyed() {
    //$bus.$off('clearInput', this.clearInput)
    //$bus.$off('inputError', this.inputError)
    //$bus.$off('valueChange', this.valueChange)
    //$bus.$off('defaultValueChange', this.defaultValueChange)
  },

  render: function (createElement) {
    const self = this
    const children = [];
    if(self.schema.children){
      self.schema.children.forEach(function (com) {
        if(com){
          if(com.text){
            children.push(com.text)
          }
          else{
            //console.log(com.model)
            children.push(createElement(
                'vular-node', 
                {
                  props:{ schema:com },
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
        }
      })
    }

    if(self.schema){
      //console.log(self.schema.ref)
      //此处vularViewModel初始化，防止created不被调用，没有传入值
      //self.vularViewModel = this.schema.viewModel ? this.schema.viewModel : this.viewModel
      self.schema.props = self.schema.props ? self.schema.props : {}

      if(self.schema.props && self.schema.props['rules']){
        self.schema.props.rules = eval(self.schema.props.rules)
      }

      //if(self.schema.field){
        //let val = self.schema.defaultValue
        self.schema.props['value'] = this.vularValue //如果未定义，就赋空字符串，防止校验抛异常
        self.schema.props['inputValue'] = this.vularValue //如果未定义，就赋空字符串，防止校验抛异常
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
        on: self.getOn(),
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

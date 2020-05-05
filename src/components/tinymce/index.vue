<template>
  <div>
    <textarea :id="tinymceId" class="tinymce-textarea" />
    <MediaSelectDialog @selectMedias = "onSelectMedias" v-model="mediaSelectDialog"></MediaSelectDialog>
  </div>
</template>

<script>
/**
 * docs: 本代码修改自vue-element-admin
 */
import plugins from './plugins'
import toolbar from './toolbar'
import load from './dynamicLoadScript'
import MediaSelectDialog from "../media/MediaSelectDialog"

const tinymceCDN = '/vendor/tinymce/js/tinymce/tinymce.min.js'

export default {
  name: 'VularTinymce',
  components: { MediaSelectDialog },
  props: {
    id: {
      type: String,
      default: function() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    //menubar: {
    //  type: String,
    //  default: 'file edit insert view format table'
    //},
    height: {
      type: [Number, String],
      required: false,
      default: 560
    },
    width: {
      type: [Number, String],
      required: false,
      default: 'auto'
    }
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        'en': 'en',
        'zh': 'zh_CN',
        'es': 'es_MX',
        'ja': 'ja'
      },

      mediaSelectDialog: false,
    }
  },
  computed: {
  },
  mounted() {
    $bus.$on('selectImage', this.onSelectImage)
    this.init()
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce()
    }
  },
  deactivated() {
    this.destroyTinymce()
    $bus.$off('selectImage', this.onSelectImage)
  },
  destroyed() {
    this.destroyTinymce()
    $bus.$off('selectImage', this.onSelectImage)
  },
  methods: {
    init() {
      // dynamic load tinymce from cdn
      load(tinymceCDN, (err) => {
        if (err) {
          this.$message.error(err.message)
          return
        }
        this.initTinymce()
      })
    },
    initTinymce() {
      const _this = this
      let lang = navigator.language || navigator.userLanguage
      lang = lang.substr(0, 2)

      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        //skin: 'oxide-dark',
        language: this.languageTypeList[lang],
        height: this.height,
        object_resizing: true,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: false,
        plugins: plugins,
        external_plugins: {
          'vimages': '/tinymce/plugins/vimages/plugin.min.js',
        },        
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: editor => {
          if (_this.value) {
            editor.setContent(_this.value)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent())
          })

          editor.getBody().style.backgroundColor = this.$store.state.vularApp.content.card.color

          editor.vularId = this.id
        },
        setup(editor) {
          editor.on('FullscreenStateChanged', (e) => {
            _this.fullscreen = e.state
          })
        },
      })
    },
    destroyTinymce() {
      if(window.tinymce){
        const tinymce = window.tinymce.get(this.tinymceId)
        if (this.fullscreen) {
          tinymce.execCommand('mceFullScreen')
        }

        if (tinymce) {
          tinymce.destroy()
        }
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value)
    },
    getContent() {
      window.tinymce.get(this.tinymceId).getContent()
    },

    onSelectImage(id){
      if(id == this.id){
        this.mediaSelectDialog = true
      }
    },

    onSelectMedias(medias){
      $bus.$emit('selectedImages', medias, this.id)
    },
  }
}
</script>

<style>
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}

.tox .tox-toolbar-overlord{
  background: transparent !important;
}

.tox .tox-toolbar{
  background-color: transparent !important;
}

.tox .tox-statusbar{
  background-color: transparent !important;
}

.tox-editor-header{
  z-index: 0 !important;
}
</style>

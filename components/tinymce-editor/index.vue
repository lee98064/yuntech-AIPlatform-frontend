<template>
  <client-only>
    <editor
      id="tinymce"
      v-model="myValue"
      :init="init"
      :disabled="disabled"
    ></editor>
  </client-only>
</template>

<script>
import editor from '@tinymce/tinymce-vue'

// 引入tinymce，并在客户端初始化
let tinymce
if (process.client) {
  tinymce = require('tinymce/tinymce')

  // 样式图标
  require('tinymce/icons/default/icons')

  // 主题样式
  require('tinymce/themes/silver/theme')

  //  插入表格插件
  require('tinymce/plugins/table')

  //  列表插件
  require('tinymce/plugins/lists')

  //  字数统计插件
  require('tinymce/plugins/wordcount')

  // 自动链接插件
  require('tinymce/plugins/autolink')

  // 水平分割线
  require('tinymce/plugins/hr')

  // 预览
  require('tinymce/plugins/preview')
}

export default {
  components: { editor },

  props: {
    //传入一个value，使组件支持v-model绑定
    value: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    plugins: {
      type: [String, Array],
      default: 'lists  table  wordcount  link  hr  autolink  preview',
    },

    toolbar: {
      type: [String, Array],
      default: [
        'undo redo | styleselect | bold italic | alignleft aligncenter alignright | link image table',
        'cut copy paste| forecolor backcolor | charmap emoticons',
      ],
      // default:
      //   'undo  redo  |  formatselect  |  bold  italic  hr  |  alignleft  aligncenter  alignright  alignjustify  |  bullist  numlist  outdent  indent  table  |  removeformat  preview',
    },
  },

  data() {
    return {
      //初始化配置
      init: {
        // 控件语言
        // language_url: '/tinymce/langs/zh_CN.js',
        // language: 'zh_CN',
        // 富文本样式
        skin_url: '/tinymce/skins/ui/oxide',
        content_css: '/tinymce/skins/content/default/content.css',
        // 高度
        height: 300,
        plugins: this.plugins,
        // 工具栏，如果是false表示隐藏
        toolbar: this.toolbar,
        // 隐藏最上方menu菜单
        menubar: false,
        // 拼写检查
        browser_spellcheck: true,
        // 去水印
        branding: false,
        statusbar: false, // 隐藏编辑器底部的状态栏
        elementpath: false, // 禁用下角的当前标签路径
        paste_data_images: false, //  允许粘贴图像
        //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        },
      },
      myValue: this.value,
    }
  },

  created() {},

  methods: {
    //添加相关的事件，可用的事件参照文档=>  https://github.com/tinymce/tinymce-vue  =>  All  available  events
    //需要什么事件可以自己增加
    onClick(e) {
      this.$emit('onClick', e, tinymce)
    },

    //可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = ''
    },
  },

  mounted() {
    // 用process.client判断一下环境再执行

    this.$nextTick(() => {
      if (process.client) {
        window.tinymce.init({})
      }
    })
  },

  watch: {
    value(newValue) {
      this.myValue = newValue
    },
    myValue(newValue) {
      this.$emit('input', newValue)
    },
  },
}
</script>

<style scoped></style>

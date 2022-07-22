<!--
 * @Description: SQL编辑器
 * @Author: yuyi
 * @Date: 2022-07-22 23:38:51
 * @LastEditors: yuyi
 * @LastEditTime: 2022-07-23 01:20:13
-->
<template>
  <div id="app">
    <div ref="editor" />
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
  name: 'SQLEditor',
  components: {
  },
  data() {
    return {
      monacoEditor: null,
      value: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.monacoEditor = monaco.editor.create(this.$refs.editor, {
        value: this.value,
        automaticLayout: true,
        language: 'sql',
        theme: "vs-dark", // 主题
        lineNumbers: 'on',
        editorOptions: {
          fontSize: 14
        }
      })

      this.monacoEditor.layout({ width: 800, height: 600 })
    }
  }
}
</script>

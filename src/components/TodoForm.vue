<template lang="pug">
  header
    input(v-model="msg" type="text")
    button(@click="addTodo" :disabled="disabled") 登録
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      msg: '',
      disabled: false,
    }
  },
  watch: {
    msg(m) {
      this.disabled = !m.length ? true : false
    }
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.msg)
      this.msg = ''
    }
  }
}
</script>

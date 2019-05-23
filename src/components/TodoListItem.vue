<template lang="pug">
  li
    input(v-model="todoItem.complete" type="checkbox")
    span :{{ todoItem.message }}
    button(@click="removeTodoItem(itemIndex)") 削除
</template>

<script>
export default {
  props: {
    todoItem: {
      type: Object,
      required: true
    },
    itemIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeTodoItem(index) {
      this.$emit('removeTodoItem', index)
    }
  }
}
</script>

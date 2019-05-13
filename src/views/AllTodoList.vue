<template lang="pug">
  .wrapper
    h1 todo list
    todo-form(@addTodo="addTodo")

    ul
      todo-list-item(v-for="(item, index) in items" :key="item.id" :todoItem="item" :itemIndex="index" @removeTodoItem="removeTodo")
</template>

<script>
import todoListItem from '@/components/TodoListItem.vue'
import todoForm from '@/components/TodoForm.vue'
import { mapState } from 'vuex'
import * as types from '@/mutation-types'

export default {
  name: 'allTodoList',
  components: {
    todoForm,
    todoListItem
  },
  computed: {
    ...mapState({
      items: state => state.items
    })
  },
  methods: {
    addTodo(message) {
      this.$store.commit(types.ADD_TODO, message)
    },
    removeTodo(index) {
      this.$store.commit(types.REMOEVE_TODO, index)
    }
  }
}
</script>

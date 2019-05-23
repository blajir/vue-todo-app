<template lang="pug">
  .wrapper
    h1
      |complete

    ul
      todo-list-item(
        v-for="(item, index) in completeTodoItems"
        :key="item.id"
        :todoItem="item"
        :itemIndex="index"
        @removeTodoItem="removeTodo"
      )

</template>

<script>
import { mapState, mapGetters } from 'vuex'
import * as types from '@/mutation-types'

import TodoListItem from '@/components/TodoListItem'

const components = {
  TodoListItem
}

export default {
  components,
  computed: {
    ...mapGetters([
      'completeTodoItems'
    ])
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

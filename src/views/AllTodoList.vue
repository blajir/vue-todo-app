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

export default {
  name: 'allTodoList',
  components: {
    todoForm,
    todoListItem
  },
  data() {
    return {
      items: [
        {
          id: 1,
          message: '牛乳を買う',
          complete: true
        },
        {
          id: 2,
          message: '飛行機予約',
          complete: false
        }
      ]
    }
  },
  methods: {
    addTodo(message) {
      const nextId = this.items.length ? this.items.slice(-1)[0].id + 1 : 1
      const todo = {
        id: nextId,
        message,
        complete: false
      }

      this.items.push(todo);
    },
    removeTodo(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

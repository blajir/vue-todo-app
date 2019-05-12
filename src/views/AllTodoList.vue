<template lang="pug">
  .wrapper
    h1 todo list
    header
      input(v-model="msg" type="text")
      button(@click="addTodo" :disabled="disabled") 登録

    ul
      todo-list-item(v-for="(item, index) in items" :key="item.id" :todoItem="item" :itemIndex="index" @removeTodoItem="removeTodo")
</template>

<script>
import todoListItem from '@/components/TodoListItem.vue'

export default {
  name: 'allTodoList',
  components: {
    todoListItem
  },
  data() {
    return {
      msg: '',
      disabled: false,
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
  watch: {
    msg(m) {
      this.disabled = !m.length ? true : false
    }
  },
  methods: {
    addTodo() {
      const nextId = this.items.length ? this.items.slice(-1)[0].id + 1 : 1
      const todo = {
        id: nextId,
        message: this.msg,
        complete: false
      }

      this.items.push(todo);
      this.msg = ''
    },
    removeTodo(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

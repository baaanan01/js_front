<template>
  <div class="hello">
    <!-- <h1 class = "hh">New task</h1> -->
    <section class="create-todo">
      <CreateTodo @todo-created="onTodoCreated"/>
    </section>

    <section class="todo-list">
      <h1 class="todoo">To do</h1>
      <ul>
      <ToDo v-for="todoItem in todoList"
          :key="todoItem.id"
          :title="todoItem.title"
          :id="todoItem.id"
          :isDone="todoItem.isDone"
          class="todo-item"
          :class="{ done: todoItem.isDone }"
          @todo-deleted="onTodoDeleted"
          @todo-checkbox="onTodoCheckbox"/>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchTodoList, patchTodo, deleteTodo } from "@/netClient/todoService";
import CreateTodo from "@/components/CreateTodo";
import ToDo from "@/components/ToDo.vue";

export default {
  name: "Hello",
  components: { CreateTodo, ToDo },
  data: () => ({
    todoList: [],
    todoName: '',
  }),
  async created() {
    this.fetchTodoList();
  },
  methods: {
    onTodoCreated(createdTodo) {
      console.warn({createdTodo});
      this.fetchTodoList(createdTodo);
    },
    onTodoDeleted(createdTodo) {
      this.fetchTodoList(createdTodo);
    },
      onTodoCheckbox(createdTodo) {
      this.fetchTodoList(createdTodo);
    },
    async RemoveTodo(id) {
      try {
          await deleteTodo(id);
          this.fetchTodoList()
     }  catch (error) {
          console.error({ error });
     }
    },

    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
    async onCheckBoxInput(id, isDone) {
     try {
          await patchTodo({ id, isDone: !isDone });
          this.fetchTodoList()
     }  catch (error) {
          console.error({ error });
     }
    },
  },
};
</script>
<style>
</style>
<template>
  <div class="hello">
    <!-- <h1 class = "hh">New task</h1> -->
    <section class="create-todo">
      <CreateTodo @todo-created="onTodoCreated" />
    </section>

    <section class="todo-list">
      <h1 class="todoo">To do</h1>
      <ul>
        <li
          v-for="todoItem in todoList"
          :key="todoItem.id"
          class="todo-item"
          :class="{ done: todoItem.isDone }"
        >
          <div class="task">
            <div class="title">
              {{ todoItem.title }}
            </div>
            <div>
              <input
                type="checkbox"
                class="checkbox"
                :checked="todoItem.isDone"
                @input="onCheckBoxInput(todoItem.id, todoItem.isDone)"
              />
            </div>
            <button class="delete">x</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchTodoList, patchTodo } from "@/netClient/todoService";
import CreateTodo from "@/components/CreateTodo";

export default {
  name: "Hello",
  components: { CreateTodo },
  data: () => ({
    todoList: [],
    todoName: '',
  }),
  async created() {
    this.fetchTodoList();
  },
  methods: {
    onTodoCreated(createdTodo) {
      this.todoList.unshift(createdTodo);
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
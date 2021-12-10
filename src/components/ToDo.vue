<template>
  <div>
    <li>
      <div class="task">
        <div class="title">
          {{ title }}
        </div>
        <div>
          <input
            type="checkbox"
            class="checkbox"
            :checked="isDone"
            @input="onCheckBoxInput"
          />
        </div>
        <button @click="RemoveTodo" class="delete">x</button>
      </div>
    </li>
  </div>
</template>

<script>
import { patchTodo, deleteTodo } from "@/netClient/todoService";
export default {
  props: ["id","title", "isDone"],
  name: "ToDo",
  data: () => ({
    todoList: [],
    todoName: "",
  }),

  methods: {
    async RemoveTodo() {
      try {
        await deleteTodo(this.id);
        this.$emit('todo-deleted');
      } catch (error) {
        console.error({ error });
      }
    },

    async onCheckBoxInput() {
      try {
        await patchTodo({ id: this.id, isDone: !this.isDone });
        this.$emit('todo-checkbox');
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
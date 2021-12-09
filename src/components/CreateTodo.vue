<template>
    <div class="create_todo">
             <div class = "forms">
                <input v-model="todoName" type="text" class="input_" placeholder="Add new task" required>
              </div>
                <div  class = "submit">
                    <button @click="onCreateTodoClicked" class = "submit-bttn" type="submit">Add new task</button>
                </div>
    </div>

</template>
<script>
import { createTodo } from "@/netClient/todoService";
export default {
    name: "create_todo",
     data: () => ({
    todoList: [],
    todoName: '',
  }),
  methods:{
    async onCreateTodoClicked(){
        try {
            const newTodo = await createTodo({ title: this.todoName});
            if(newTodo){
              this.todoName = '';
            }
            this.$emit('todo-created', newTodo);
        } catch (error) {
          console.error({error});
        }
    }
  }
  
}
</script>
<style>
form {
	display: flex;
	flex-direction: column;
	width: 100%;
	}

ul {
  list-style-type: none;
}
</style>
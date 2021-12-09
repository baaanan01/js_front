<template>
    <div class="create_todo">
             <div class = "forms">
                <input v-model="title" type="text" class="input_" placeholder="Add new task" required>
              </div>
                <div  class = "submit">
                    <button class = "submit-bttn" type="submit">Add new task</button>
                </div>
    </div>

</template>
<script>
// import { createTodo } from "@/netClient/todoService";
export default {
    name: "create_todo",
     data: () => ({
    title: "",
  }),
  
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
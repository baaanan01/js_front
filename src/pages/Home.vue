<template>
  <div class="hello">
    <!-- <h1 class = "hh">New task</h1> -->
    <section class = "create-todo">
      <CreateTodo/>
    </section>
 
    <section class='todo-list'>
     <h1 class = "todoo">To do</h1>
     <ul>
        <li 
        v-for="todoItem in todoList" 
        :key="todoItem.id" 
        class="todo-item"
        :class="{ 'done' : todoItem.isDone }"
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
              @input="onCheckBoxInput(todoItem.id)"
              />
              </div>
              <button class = "delete">x</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {fetchTodoList} from '@/netClient/todoService';
import CreateTodo from '@/components/CreateTodo';

export default {
  name: "Hello",
  components:{CreateTodo},
  data:() => ({
    todoList:[],
    
  }),
  async created(){
    this.fetchTodoList()
  },
  methods: {
    async fetchTodoList(){
      try{
        this.todoList = await fetchTodoList();
     } catch (error){
       console.error({error})
     }
      },
      onCheckBoxInput(id){
        const todo = this.todoList.find((item) => item.id === id)
        todo.isDone = !todo.isDone;
      },
    },
    
};
</script>
<style>

</style>
<template>
  <main>
    <div class="container">
      <h1>欢迎使用 Leon 待办事项！</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo"></todo-add>
      <todo-filter :selected="filter" @change-filter="filter = $event"></todo-filter>
      <todo-list :todos="filteredTodos"></todo-list>
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import useTodos from "./composables/useTodo.js"
import useFilteredTodos from "./composables/useFilteredTodos.js"


export default {
  name: "App",
  components: { TodoAdd, TodoList, TodoFilter },
  
  setup() {

    const {todos, addTodo}  = useTodos();
    const { filter, filteredTodos} = useFilteredTodos(todos);


  
    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microdoft Yahei", sans-serif;
}

main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}

.container {
  width: 70%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

h1 {
  margin: 24px;
  font-size: 24px;
  color: #414873;
}
</style>

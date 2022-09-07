//跟todo相关的
import { ref } from "vue"


export default function useTodos(){
    const todos = ref([]);

    // 定义一个添加todo的函数
    const addTodo = (todo) => todos.value.push(todo);


    // const fetchTodos = async () => {
    //     const response = await fetch(
    //         "https://jsonplaceholder.typicode.com/todo?_limit=5"
    //     );
    //     const rawTodos = await response.json();
    //     todos.value = rawTodos.map((todo) => ({
    //         id: todo.id,
    //         content: todo.title,
    //         completed: todo.completed,
    //     }));
    // };

    // onMounted(() => {
    //     fetchTodos();
    // });

    return {
        todos,
        addTodo,
      };
}
<template>
  <main>
    <div class="container">
      <h1>欢迎使用 Leon 待办事项！</h1>
      <div class="input-add">
        <input type="text" name="todo" />
        <button>
          <i class="plus"></i>
        </button>
      </div>
      <div class="filters">
        <div class="filyer active">全部</div>
        <div class="filyer">已完成</div>
        <div class="filyer">未完成</div>
      </div>
      <div class="todo-list"></div>
      <div class="todo-item">
        <label>
          <input type="checkbox" />
          Todo 1
        </label>
      </div>
      <div class="todo-item">
        <label>
          <input type="checkbox" />
          Todo 2
        </label>
      </div>
      <div class="todo-item">
        <label>
          <input type="checkbox" />
          Todo 3
        </label>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "App",
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
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

h1 {
  margin: 24px;
  font-size: 28px;
  color: #414873;
}




</style>

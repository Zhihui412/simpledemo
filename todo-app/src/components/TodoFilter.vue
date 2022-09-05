<template>
  <div class="filters">
    <div class="filter active">全部</div>
    <div class="filter">已完成</div>
    <div class="filter">未完成</div>
  </div>
</template>

<script>
export default {
    name:"TodoFilter"
};
</script>

<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
  cursor: pointer;
}
.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}
.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>
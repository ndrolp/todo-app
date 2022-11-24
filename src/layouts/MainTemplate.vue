<template>
  <div class="todoapp main">
    <h1>todos</h1>
    <div class="main">
      <NewTodo></NewTodo>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import NewTodo from "@/components/NewTodo.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { NewTodo },
})
export default class MainTemplate extends Vue {}
</script>

<style>
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>

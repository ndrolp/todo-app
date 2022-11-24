<template>
  <div class="newTodo">
    <input type="checkbox" name="" id="" class="toggle-all" />
    <label for=""></label>
    <CustomInput placeholder="New To-Do" className="new-todo"></CustomInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomInput from "@/components/CustomInput.vue";

@Component({
  components: { CustomInput },
})
export default class NewTodo extends Vue {}
</script>

<style scoped>
.newTodo {
  position: relative;
}
.toggle-all {
  text-align: center;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
  height: 34px;
  width: 40px;
  cursor: pointer;
}

.toggle-all + label {
  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  top: 3px;
  left: -15px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  pointer-events: none;
}

.toggle-all + label:before {
  content: "❯";
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}

.toggle-all:checked + label:before {
  color: #737373;
}
</style>

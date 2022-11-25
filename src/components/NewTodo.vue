<template>
  <div class="new-todo-toggle">
    <input
      type="checkbox"
      name=""
      id=""
      class="toggle-all"
      v-model="toggleAll"
      @change="onToggle"
    />
    <label for=""></label>
    <CustomInput
      @return="onEnter"
      placeholder="New To-Do"
      className="new-todo"
    ></CustomInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomInput from "@/components/CustomInput.vue";

@Component({
  components: { CustomInput },
})
export default class NewTodo extends Vue {
  onEnter(value: string) {
    console.log(value);
    if (value !== "") {
      this.$store.commit("insertTodo", { completed: false, text: value });
    }
  }

  toggleAll = false;
  mounted() {
    this.toggleAll =
      this.$store.state.todos.length ===
      this.$store.getters.completedTodos.length;
  }

  onToggle() {
    this.$store.commit("toggleAll", this.toggleAll);
  }
}
</script>

<style scoped>
.new-todo-toggle {
  position: relative;
  z-index: 200;
}
.toggle-all {
  text-align: center;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
  height: 34px;
  width: 40px;
  cursor: pointer;
  z-index: 4;
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
  /* pointer-events: none; */
}

label {
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

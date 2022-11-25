<template>
  <li :class="editClass">
    <div class="view">
      <input
        @change="toggle"
        class="toggle"
        v-model="element.completed"
        type="checkbox"
      />
      <label for=""></label>
      <label @dblclick="toggleClass" for="">{{ element.text }}</label>
      <span @click="destroy" class="destroy"></span>
    </div>
    <div class="edit">
      <CustomInput
        :key="inputreload"
        @escape="toggleClass"
        @return="changeText"
        :value="text"
        className="edit"
      ></CustomInput>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CustomInput from "./CustomInput.vue";
import ToDo from "../interfaces/Todo";

@Component({
  components: { CustomInput },
})
export default class ListItem extends Vue {
  @Prop({ required: true })
  element!: ToDo;
  @Prop({ required: true })
  index!: number;

  destroy() {
    this.$store.commit("deleteTodo", this.index);
  }

  inputreload = 0;

  changeText(value: string) {
    this.toggleClass();
    if (value === "") {
      this.destroy();
      return;
    }
    this.$store.commit("changeText", { index: this.index, text: value });
  }

  editing = false;
  text = "";

  mounted() {
    this.text = this.element.text;
  }

  toggleClass() {
    this.inputreload += 1;
    this.text = this.element.text;
    this.editing = !this.editing;
  }

  get editClass(): string {
    return this.editing ? "editing" : "";
  }

  toggle() {
    this.$store.commit("toggleTodo", {
      index: this.index,
      completed: this.element.completed,
    });
  }
}
</script>

<style scoped>
.todo-list li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list li.editing {
  border-bottom: none;
  padding: 0;
}

.todo-list li.editing .edit {
  display: block;
  width: 506px;
  padding: 12px 16px;
  /* margin: 0 0 0 43px; */
}

.todo-list li.editing .view {
  display: none;
}

.todo-list li .toggle {
  text-align: center;
  width: 40px;
  /* auto, since non-WebKit browsers doesn't support input styling */
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none; /* Mobile Safari */
  -webkit-appearance: none;
  appearance: none;
}

.todo-list li .toggle {
  opacity: 0;
}

.todo-list li .toggle + label {
  /*
		Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
	*/
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center left;
  position: absolute;
  top: 12px;
  pointer-events: none;
}

.todo-list li .toggle:checked + label {
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
}

.todo-list li label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

.todo-list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}

.todo-list li .destroy {
  display: none;
  position: absolute;
  top: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  cursor: pointer;
}

.todo-list li .destroy:hover {
  color: #af5b5e;
}

.todo-list li .destroy:after {
  content: "×";
}

.todo-list li:hover .destroy {
  display: block;
}

.todo-list li .edit {
  display: none;
}

.todo-list li.editing:last-child {
  margin-bottom: -1px;
}
</style>

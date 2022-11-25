<template>
  <input
    :class="className"
    type="text"
    v-model="currentValue"
    data-test="inputfield"
    @keyup.enter="onReturn"
    @keydown.esc="onEscape"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CustomInput extends Vue {
  @Prop({ default: "", type: String })
  value!: string;
  @Prop({ default: "", type: String })
  placeholder!: string;
  @Prop({ default: "", type: String })
  className!: string;

  currentValue: null | string = null;

  mounted() {
    this.currentValue = this.value;
  }

  onReturn() {
    this.$emit("return", this.currentValue);
    this.currentValue = "";
  }

  onEscape(e: any) {
    e.preventDefault();
    this.$emit("escape");
    this.currentValue = this.value;
  }
}
</script>

<style scoped>
.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.newTodo {
  position: relative;
}

.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  width: 100%;
}
</style>

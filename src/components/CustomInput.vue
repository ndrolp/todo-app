<template>
  <input
    :class="className"
    type="text"
    :value="value"
    data-test="inputfield"
    @keyup.enter="onReturn()"
    @keyup.escape="onEscape()"
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

  currentValue!: string;
  mounted() {
    this.currentValue = this.value;
    // console.log({ VALUE: this.currentValue, PROP: this.value });
  }

  onReturn() {
    this.$emit("return", this.currentValue);
  }

  onEscape() {
    this.$emit("escape");
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

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  width: 100%;
}
</style>

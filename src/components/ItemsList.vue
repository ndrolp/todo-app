<template>
  <ul class="todo-list">
    <ListItem
      v-for="(item, index) in todos"
      :key="`todo ${index}`"
      :element="item"
      :index="index"
    />
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ListItem from "@/components/ListItem.vue";
import Todo from "@/interfaces/Todo";

@Component({
  components: { ListItem },
})
export default class ItemsList extends Vue {
  @Prop()
  page!: string;

  get todos(): [Todo] {
    switch (this.$route.path) {
      case "/":
        return this.$store.state.todos;
      case "/active":
        return this.$store.getters.unCompletedTodos;
      case "/completed":
        return this.$store.getters.completedTodos;
      default:
        return this.$store.state.todos;
    }
  }
}
</script>

<style scoped>
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

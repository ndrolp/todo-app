import Todo from "@/interfaces/Todo";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        text: "Test #1",
        completed: true,
      },
    ],
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    },
    unCompletedTodos(state) {
      return state.todos.filter((todo) => !todo.completed);
    },
  },
  mutations: {
    insertTodo(state, payload: Todo) {
      state.todos.push({
        text: payload.text,
        completed: payload.completed,
      });
    },
    deleteTodo(state, payload: number) {
      state.todos.splice(payload, 1);
    },
    toggleTodo(state, payload) {
      state.todos[payload.index].completed = payload.completed;
    },
    changeText(state, payload) {
      state.todos[payload.index].text = payload.text;
    },
    toggleAll(state, payload) {
      state.todos = state.todos.map((value) => {
        value.completed = payload;
        return value;
      });
    },
    deleteCompleted(state) {
      state.todos = state.todos.filter((value) => !value.completed);
    },
  },
  actions: {},
  modules: {},
});

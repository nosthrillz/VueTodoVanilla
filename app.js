Vue.createApp({
  data() {
    return {
      statuses: ["Not started", "In progress", "Complete"],
      todos: [
        {
          text: "Learn the basics of Vue",
          status: "Complete",
          inEdit: false,
        },
      ],
      currentText: "",
      newText: "",
      currentStatus: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.currentText) return;
      this.todos.push({
        text:
          this.currentText.slice(0, 1).toUpperCase() +
          this.currentText.slice(1),
        status: this.statuses[0],
      });
      this.currentText = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    launchEdit(index) {
      if (this.todos.filter((todo, idx) => index !== idx).length > 0) {
        todos.forEach((todoItem, index) => {
          if (idx !== index) todoItem.inEdit = false;
        });
      }
      this.newText = this.todos[index].text;
      this.todos[index].inEdit = !this.todos[index].inEdit;
    },
    saveEdit(index) {
      this.todos[index].text = this.newText;
      this.todos[index].inEdit = false;
      this.newText = "";
    },
    updateStatus(event, index) {
      this.todos[index].status = event.target.value;
    },
    todoItemClass(status) {
      return {
        animateIn: true,
        todo: status === this.statuses[0],
        started: status === this.statuses[1],
        complete: status === this.statuses[2],
      };
    },
    selectClass(status) {
      return {
        todo: status === this.statuses[0],
        started: status === this.statuses[1],
        complete: status === this.statuses[2],
      };
    },
  },
}).mount("#app");

function closeAllEdits(todos, exceptId) {
  todos.forEach((todo, idx) => {
    if (exceptId !== idx) todo.inEdit = false;
  });
}

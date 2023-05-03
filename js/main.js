const { createApp } = Vue

createApp({
  data() {
    return {
      todos: [],

      newTodo: "",
    }
  },

  methods: {
    getTodo() {
      axios.get('./server.php').then(res => {
        this.todos = res.data;
         console.log(this.todos);
      });
    },

    addNewTodo() {
      this.todos.push(this.newTodo);
    },
      
  },

  mounted() {
    this.getTodo();
  },
}).mount('#app')
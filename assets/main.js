var app = new Vue(
  {
  el:'#root',
  data: {
    input: "",
    todos:[
      {
        title: 'Fare esercizi di boolean',
        status: 'checked',
      },
      {
        title: 'Chiedere aiuto ai tutor',
        status: 'todo',
      },
      {
        title: 'Allenarsi',
        status: 'todo',
      },
      {
        title: 'Cenare',
        status: 'todo',
      },
    ],
  },
    computed:{
      todo_ordinato: function (){
        let todo_checked = this.todos.filter((todo) => todo.status == 'checked');
        let todo_todo = this.todos.filter((todo) => todo.status == 'todo');

        return [...todo_todo, ...todo_checked];

      }
    },

  methods:{
    add: function () {
      if (this.input != " ") {
        let aggiunta = {
          title: this.input,
        }
        this.todos.push(aggiunta);
        this.input = " ";
      }
    },
    check: function (todo){

      let i = this.todos.indexOf(todo);
      this.todos[i].status = 'checked';
    },

  }

});

import { makeAutoObservable } from "mobx";

class Todos {
  todos = [
    { id: 1, title: 'Gos to Mall', completed: false },
    { id: 2, title: 'Watch TV', completed: false },
    { id: 3, title: 'Learn Programming', completed: false }
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: {id: number, title: string, completed: boolean}) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(elem => elem.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  }
}

export default new Todos();
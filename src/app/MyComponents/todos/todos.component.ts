import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];
  localItem: string | null;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(!this.localItem) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void { 
  }

  deleteTodo(todo: Todo) {
    console.log("My ", todo);
    // Delete todo from array
    const indx = this.todos.indexOf(todo);
    this.todos.splice(indx, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    todo.sno = this.todos.length+1;
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const indx = this.todos.indexOf(todo);
    this.todos[indx].active = !this.todos[indx].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}

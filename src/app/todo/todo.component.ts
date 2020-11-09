import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: "eat dinner",
      completed: false,
    },
    {
      task: "workout",
      completed: false,
    },
    {
      task: "wake up",
      completed: true,
    },
  ];
  formSearchTerm: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  addTask = (form: NgForm): void => {
    let newTodo: Todo ={
      task: form.value.newTask,
      completed: form.value.completed === "true" ? true : false,
    };
    form.value.type === "todo" ? this.todos.push(newTodo):
    form.reset();
  };

  removeTask = (index: number): void => {
    this.todos.splice(index, 1);
  };

  filterTodos = (): Todo[] => {
    if (!this.formSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todos) => {
        let currentTodo = todos.task.toLowerCase().trim();
        return currentTodo.includes(this.formSearchTerm.toLowerCase().trim());
      });
    }
  };

  setSearchTerm = (form: NgForm): void => {
    this.formSearchTerm = form.value.searchTerm;
  };

}

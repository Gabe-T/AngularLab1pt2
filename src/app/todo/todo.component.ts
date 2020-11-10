import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';
// import { runInThisContext } from 'vm';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'eat dinner',
      completed: false,
    },
    {
      task: 'worked out',
      completed: false,
    },
    {
      task: 'wake up',
      completed: true,
    },
  ];
  listSearchTerm: string = '';
  constructor() {}
  ngOnInit(): void {}
  addTask = (form: NgForm): void => {
    let newToDo: Todo = {
      task: form.value.todo,
      completed: form.value.completed === 'completed' ? true : false,
    };
    this.todos.push(newToDo);
    form.reset();
  };
  removeTask = (type: string, index: number): void => {
    if (type === 'todo') {
      this.todos.splice(index, 1);
    }
  };

  filterList = (): Todo[] => {
    if (!this.listSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentSearch = todo.task.toLowerCase().trim();
        return currentSearch.includes(this.listSearchTerm.toLowerCase().trim());
      });
    }
  };
  setSearchTerm = (form: NgForm): void => {
    this.listSearchTerm = form.value.searchList;
  };


  completeTask = (todo: Todo): void => {
    todo.completed = true;
  };

}
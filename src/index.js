import './styles.css';

import{ToDo, ToDoList}from'./classes'
import { crearToDoHtml } from './js/componentes';



export const toDoList = new ToDoList();

toDoList.toDos.forEach(crearToDoHtml);

// const newTodo = new ToDo('Aprender JavaScript');
// toDoList.nuevoToDo(newTodo);
  
toDoList.toDos[0].imprimirClase();

console.log('toDos', toDoList.toDos);

import {ToDo } from './ToDo.class';
export class ToDoList{

    constructor() {
    
        this.cargarLocalStorage();

    };

    nuevoToDo(toDo) {
        this.toDos.push(toDo);
        this.guardarLocalStorage();
    };

    eliminarToDo(id) {

        this.toDos = this.toDos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
        
    };
    
    marcarCompletado(id) {
        
        for (const todo of this.toDos) {

            
            if (todo.id == id) {
               
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

           }

        }
    };

    eliminarCompletados() {
        
        this.toDos = this.toDos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    };

    guardarLocalStorage() {
        localStorage.setItem('toDo', JSON.stringify(this.toDos));
    }

    cargarLocalStorage() {
        
        this.toDos = (localStorage.getItem('toDo')) ? JSON.parse(localStorage.getItem('toDo')) : [];
        
        this.toDos = this.toDos.map(obj => ToDo.fromJson(obj));
        // if (localStorage.getItem('toDo')) {
          
        //     this.toDos = JSON.parse( localStorage.getItem('toDo'));
           
        //     console.log('cargarLocal:', this.toDos);

        // } else { 
        //     this.toDos = [];
        // }
    
    }

}


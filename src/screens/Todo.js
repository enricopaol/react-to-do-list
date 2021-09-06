import { Component } from 'react';
import './Todo.css';

import InputBox from '../components/ui/input_box/InputBox.js';
import Button from '../components/ui/button/Button.js';
import Select from '../components/ui/select/Select.js';

import List from '../components/list/List';

class Todo extends Component {

  constructor(props) {
    super(props)

    let storageTodos = JSON.parse(localStorage.getItem('todos'));

    this.statuses = [
      'In programma',
      'In corso',
      'Eseguito'
    ];

    this.selectedStatus = 'In programma';

    this.state = {
      current_todo: '',
      todos: storageTodos
    }

  }

  handleInputCallback = (e) => {
    this.setState({
      current_todo: e
    })
  }

  handleSelectCallback = (e) => {
    this.selectedStatus = e;
  }

  handleButtonCallback = () => {

    if (this.state.current_todo) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            text: this.state.current_todo,
            status: this.selectedStatus
          }
        ],
        current_todo: ''
      })
    }

  }

  handleElimination = (index, items) => {

    let todosIndex = this.state.todos.indexOf(items[index]);

    let newArr = this.state.todos;
    newArr.splice(todosIndex, 1);

    this.setState({
      todos: newArr
    });

  }

  filterTodos = (todos, statusString) => {
    return todos.filter((el) => {
      return el.status == statusString;
    })
  }

  handleMovingTodo = (index, items) => {

    let todosIndex = this.state.todos.indexOf(items[index]);

    let newTodos = [
      ...this.state.todos
    ];

    if (newTodos[todosIndex].status == 'In programma') {
      newTodos[todosIndex].status = 'In corso';
    } else if (newTodos[todosIndex].status == 'In corso') {
      newTodos[todosIndex].status = 'Eseguito'
    }

    this.setState({
      todos: newTodos
    });
  }

  componentDidMount() {
    // console.log('mount')
  }

  componentDidUpdate() {

    // Refresh localStorage
    let todos = JSON.stringify(this.state.todos)
    localStorage.setItem('todos', todos);
  }


  render() {

    let programTodos = this.filterTodos(this.state.todos, this.statuses[0]);
    let currentTodos = this.filterTodos(this.state.todos, this.statuses[1]);
    let finishTodos = this.filterTodos(this.state.todos, this.statuses[2]);

    return (
      <div className="todo">

        <div className="todo-container">

          <div className="title-container">
            <h1>To-do list</h1>
            <p>Inserisci un nuovo task:</p>
          </div>

          <div className="input-container">
            <InputBox
              type='text'
              callback={this.handleInputCallback}
              value={this.state.current_todo}
              placeholder="Il tuo task"
            />

            <Select
              options={this.statuses}
              callback={this.handleSelectCallback}
            />

            <Button
              label="aggiungi"
              callback={this.handleButtonCallback}
            />

          </div>

        </div>

        {
          this.state.todos.length > 0 ?
          <div className="todo-items-lists">


            <List
              items={programTodos}
              title={this.statuses[0]}
              callbacks={[this.handleElimination, this.handleMovingTodo]}
            />

            <List
              items={currentTodos}
              title={this.statuses[1]}
              callbacks={[this.handleElimination, this.handleMovingTodo]}
            />

            <List
              items={finishTodos}
              title={'Eseguiti'}
              callbacks={[this.handleElimination]}
            />


          </div>

          : <div className='todo-items-lists'>Non sono ancora presenti task.</div>          
        }

      </div>
    );
  }
}

export default Todo;

import React from 'react'
import { ITodo } from '../interfaces' //испортируем интерфейс для todo

type TodoListProps = {
  todos: ITodo[] //создаем массив типа IToDo для хранения данных в списке дел
  onToggle(id: number): void
  onRemove(id: number): void
}

//обьявление todolist тип данных котрого todolistprops
export const TodoList: React.FC<TodoListProps> = ({
  todos, 
  onRemove,  // 2 функции, которые обьявлены в ToDospage.tsx и тут вызваны
  onToggle
}) => {
  if (todos.length === 0) {
    return <p className="center">Jeszcze nie ma zadań!</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => { //map это типа foreach в typescript, итерируется пао кажому элекменту массива
        const classes = ['todo']
        if (todo.completed) { //если элекменты проъодят проверку после итерации, 
          classes.push('completed')
        }
 
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                //класс для значка мусорки
                className="material-icons red-text"
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

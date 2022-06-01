import React, { useState, useEffect } from 'react' //позволяет создать локальный state
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean //переменная для подтверждения удаления

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]) // используем интерфейс ITODO присваиваем массиву тип интерфейса, чтобы не было типа never

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('todos') || '[]' ) as ITodo[] //то что в скобках имеет итп данных string поэтому мы парсим в ITODO       
  //[] нужно если массив пустой
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  //функция, которая принимате в себя значение из title
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(), //создает уникальный айди
      completed: false //чтобы по дэфолту не стояла галочка
    }
    setTodos(prev => [newTodo, ...prev]) //вызываем массив основывыаясь на предыдущем состоянии
  }

  //метод для галочки
  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  
  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Jesteś pewny, że chcesz to usunąć?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />  {/*экспортируем функции в другие файлы*/}
     
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  )
}

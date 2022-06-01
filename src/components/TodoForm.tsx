import React, { useRef } from 'react'
//вот эту хуйню можно в принципе вписать в <> эти скобочки, но так удобнее
interface TodoFormProps {
  onAdd(title: string): void //функция возращающая значение void
}
//вьебенивает сюда интерфейс
export const TodoForm: React.FC<TodoFormProps> = props => {
  //Создает ссылку для инпута
  //HTMLInputElement указывает generic тип для useref
  const ref = useRef<HTMLInputElement>(null)

  
  //Функция для добавления данных в массив todolist
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value) //вписывает текущение значение ref в props, !. знак, чтобы ошибку если значение будет null, ! для того, чтобы функция выполнилавсь игнорируя ошибки
      ref.current!.value = '' //очищает поле после написания
    }
  } 

  return (
    //для html
    <div className="input-field mt2">
      <input
        ref={ref} //привязывает ссылку к инпуту
        type="text"
        id="title"
        placeholder="Proszę wpisać nazwę zadania"
        onKeyPress={keyPressHandler} //вызывает метод нажатия кнопки
      />
      <label htmlFor="title" className="active">
        Proszę wpisać nazwę zadania
      </label>
    </div>
  )
}

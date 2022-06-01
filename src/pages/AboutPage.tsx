import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory() //сохраняет данные из списка дел при переходе на главную страницу
  return (
    <>
      <h1>Strona Info</h1>
      <p>
        Aplikacja dla zapisywania listy zadań z wykorzystaniem biblioteki React.
 <p>Funkcjonalność programu: </p>
 <p> 1. Dodawanie nowych elementów </p>
  <p>2. Status wypełnienia (zakończony lub nie) </p>
 <p> 3. Możliwość usunięcia wpisu </p>
  <p>4. Sprawdzenie przy usunięciu </p>
  <p>5. Buforowanie elementów (po przeładowaniu strony rekordy nie znikają) </p>
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Do listy Zadań
      </button>
    </>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

//funkcja musi zwracać jsx
//Функция не принимает значений, функция ничего не возвращает(как void)
export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-4 px1">
      <a href="/" className="brand-logo">
        AMgram
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">List Zadań</NavLink>
        </li>
        <li>
          <NavLink to="/about">Info</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

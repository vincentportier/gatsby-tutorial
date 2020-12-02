import React from "react"
import { Link } from "gatsby"

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import Link from 'next/link'

export default function Layout ({ children }) {

  return (

    <div className="layout">
      <header>
        <Link draggable="false" href="/">
            <h1>
              <span style={{fontWeight: "bolder", fontSize: "50px"}}>Ponle</span>
              <span style={{color: "green"}}>Verde</span>
            </h1>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <Link target='blank' style={{textDecoration: "none", color: '#F4E640'}} href="https://www.jjrh92.dev">2024 - Julio Reyes</Link>
      </footer>
    </div>

  )
}
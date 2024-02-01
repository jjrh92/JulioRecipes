import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
            <h1>
              <span>Julio</span>
              <span>Recetas</span>
            </h1>
            <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>2024 - Julio Reyes</p>
      </footer>
    </div>
  )
}
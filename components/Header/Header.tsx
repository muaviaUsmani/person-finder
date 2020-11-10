import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={`container-fluid border-bottom py-3 ${styles.header}`}>
      <nav className="row">
        <a href="/" className="ml-5">
          <img src="/logo.png" width="75" />
        </a>
      </nav>
    </header>
  )
}
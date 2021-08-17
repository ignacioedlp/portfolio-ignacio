import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Ignacio C.T</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link">Github</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

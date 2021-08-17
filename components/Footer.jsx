import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container p-4 text-centers">
      <div className="row">
        <div className="col-md-8">
          <h4>&copy; Ignacio Cafiero Torrubia</h4>
          <p>2019 - {new Date().getFullYear()}</p>
          <p>All rights reserved.</p>
        </div>
        <div className="col-md-4 text-rights">
          <div className="row">
            <div className="col-md-2">
              <Link href="https://www.instagram.com/tofiedlp1">
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-md-2">
              <Link href="https://www.linkedin.com/in/ignacio-cafiero-torrubia-743487216/">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
            <div className="col-md-2">
              <Link href="mailto:ignaciocafiero12@gmail.com">
                <i className="bi bi-google" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

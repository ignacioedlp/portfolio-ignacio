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
          <div>
            <Link href="https://www.instagram.com">
              <i class="bi bi-instagram" aria-hidden="true"></i>
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com">
              <i class="bi bi-linkedin"></i>
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com">
              <i class="bi bi-whatsapp" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

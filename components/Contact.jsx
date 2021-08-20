import Link from "next/link";

export default function Contact() {
  return (
    <div className="modal-body p-0">
      <div className="row">
        <div className="col-md-2">
          <Link href="https://www.instagram.com/tofiedlp1">
            <h3 className="bi bi-instagram text-black" aria-hidden="true"></h3>
          </Link>
        </div>
        <div className="col-md-2">
          <Link href="https://www.linkedin.com/in/ignacio-cafiero-torrubia-743487216/">
            <h3 className="bi bi-linkedin text-black"></h3>
          </Link>
        </div>
        <div className="col-md-2">
          <Link href="mailto:ignaciocafiero12@gmail.com">
            <h3 className="bi bi-google text-black" aria-hidden="true"></h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

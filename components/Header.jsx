export default function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary">
            <div className="row">
              <div className="col-md-4">
                <img src="mia.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1 className="mt-3 text-black">Ignacio Cafiero Torrubia</h1>
                <h2 className="text-black">Web developer Frontend & Backend</h2>
                <p className="text-black">
                  <a
                    className="btn btn-primary"
                    href="https://instagram.com/tofiedlp1"
                    target="_blank"
                  >
                    Contratame
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

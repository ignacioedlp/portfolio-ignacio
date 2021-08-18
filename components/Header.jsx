import { useState } from "react";
import Contact from "./Contact";
export default function Header() {
  const [contactme, setContactme] = useState(false);

  const handleClick = (e) => {
    setContactme(!contactme);
    console.log(contactme);
  };

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
                <p>
                  <div className="row">
                    <div className="col p-2">
                      <a onClick={handleClick} className="btn btn-primary">
                        Contratame
                      </a>
                    </div>
                    <div className="col p-2">
                      <div>{contactme && <Contact />}</div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

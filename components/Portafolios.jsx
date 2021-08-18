import Link from "next/link";
import Proyect from "./Proyect";

export default function Portafolios({ portfolios }) {
  return (
    <div className="row py-2">
      <div className="col-md-12">
        <div className="card card-body ">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {portfolios.map((portfolio, index) => (
              <Proyect data={portfolio} key={index} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/">
              <a className="nav-link">Ver más Portafolio</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

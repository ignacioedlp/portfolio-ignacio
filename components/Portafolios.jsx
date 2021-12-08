import Link from "next/link";
import Proyect from "./Proyect";

export default function Portafolios({ portafolio }) {
  return (
    <div className="row py-2">
      <div className="col-md-12">
        <div className="card card-body ">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Proyectos</h1>
            </div>

            {portafolio.map((portafolio, index) => (
              <Proyect data={portafolio} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

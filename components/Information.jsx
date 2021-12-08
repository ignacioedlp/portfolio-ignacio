export default function Information({ Skills, information, hobbies }) {
  return (
    <div className="row mt-1 py-2 d-flex flex-wrap align-content-stretch justify-content-around">
      <div className="col-sm-5 col-md-6 mb-1">
        <div className="card bg-light">
          <div className="card-body">
            <h4 className="card-title">Sobre mi</h4>
            <div className="d-flex flex-wrap align-content-stretch justify-content-around">
              <p>
                Full stack developer jr. con capacidad de pensar nuevas ideas e
                implementar mejoras. Soy detallista y ordenado con los proyectos
                que me propongo
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-light mt-1">
          <div className="card-body">
            <h4 className="card-title">Trayectoria academica</h4>
            <div className="d-flex flex">
              <ul>
                <li className="list-group-item p-1 text-black m-1 ">
                  <h6 className="">Bachillerato</h6>
                  <p>
                    Colegio San Jose de La Plata
                    <br />
                    2005-2019
                  </p>
                </li>
                <li className="list-group-item p-1 text-black m-1 ">
                  <h6 className="">Carrera de Analista programador</h6>
                  <p>
                    Facultad de Informatica UNLP
                    <br />
                    2020 - Fecha actual
                    <br />
                    11 Materias aprobadas, con un promedio de 7.36
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5  col-md-5">
        <div className="container p-0">
          <div className="card bg-light">
            <div className="card-body">
              <h4 className="card-title">Informacion</h4>
              <ul className="list-group ">
                {information.map((info, index) => (
                  <li className="list-group-item p-1 text-black" key={index}>
                    {info.Title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card bg-light mt-1">
          <div className="card-body">
            <h4 className="card-title">Aptitudes</h4>
            <div className="d-flex flex-wrap align-content-stretch justify-content-around">
              {Skills.map((skill, index) => (
                <img
                  className="m-1"
                  src={skill.urlImage}
                  alt="skill"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Information({ Skills, information, hobbies }) {
  return (
    <div className="row mt-1 py-2 ">
      <div className="col-md-5 mb-2">
        <div className="card bg-light">
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
      <div className="col-md-7 mt-0 px-1 ">
        <div className="container p-0">
          <div className="card bg-light">
            <div className="card-body">
              <h4 className="card-title">Informacion</h4>
              <ul className="list-group ">
                {information.map((info, index) => (
                  <li className="list-group-item p-1" key={index}>
                    {info.Title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

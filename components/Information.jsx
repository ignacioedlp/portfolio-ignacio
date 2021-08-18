export default function Information({ Skills, information, hobbies }) {
  return (
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h4 className="card-title">Skills</h4>
            {Skills.map((skill, index) => (
              <div className="py-3" key={index}>
                <h5>{skill.name}</h5>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: skill.percents }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8 mt-1">
        <div className="container">
          <div className="card bg-light">
            <div className="card-body">
              <h4 className="card-title">Information</h4>
              <ul className="list-group m-1">
                <div>
                  <li className="list-group-item">
                    <h5>Location : {information.Location}</h5>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h5>Age : {information.Age}</h5>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h5>Education : {information.Education}</h5>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h5>Phone : {information.Phone}</h5>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h5>Carrer : {information.Carrer}</h5>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h5>Email : {information.Email}</h5>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="card bg-light mt-1">
            <div className="card-body">
              <h4 className="card-title">Hobbies</h4>
              <ul className="list-group m-1">
                {hobbies.map((hob, index) => (
                  <div key={index}>
                    <li className="list-group-item">
                      <h5>{hob}</h5>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

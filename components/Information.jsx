export default function Information({ Skills, information, hobbies }) {
  return (
    <div className="row py-2 ">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h4 className="card-title">Skills</h4>
            {Skills.map((skill, index) => (
              <div className="py-3" key={index}>
                <h5>{skill.name}</h5>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    role="progressbar"
                    style={{ width: skill.percents }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8 mt-1 p-0">
        <div className="container p-1">
          <div className="card bg-light">
            <div className="card-body">
              <h4 className="card-title">Information</h4>
              <ul className="list-group mt-1">
                <div>
                  <li className="list-group-item">
                    <h6>Location : {information.Location}</h6>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h6>Age : {information.Age}</h6>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h6>Education : {information.Education}</h6>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h6>Phone : {information.Phone}</h6>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h6>Carrer : {information.Carrer}</h6>
                  </li>
                </div>
                <div>
                  <li className="list-group-item">
                    <h6>Email : {information.Email}</h6>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="card bg-light mt-2">
            <div className="card-body">
              <h4 className="card-title">Hobbies</h4>
              <ul className="list-group">
                {hobbies.map((hob, index) => (
                  <div key={index}>
                    <li className="list-group-item pb-0">
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

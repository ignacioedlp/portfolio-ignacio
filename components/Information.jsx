export default function Information({ Skills, Experiences }) {
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
        <div className="card bg-light">
          <div className="card-body">
            <h4 className="card-title">Experiences</h4>
            <ul className="list-group">
              {Experiences.map((exp, index) => (
                <div className="py-3" key={index}>
                  <li className="list-group-item">
                    <h3>{exp.title}</h3>
                    <p>
                      {exp.description}
                      <br />
                    </p>
                    <span>{exp.company}</span>
                    <br />
                    <span className="time">{exp.startDate}</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

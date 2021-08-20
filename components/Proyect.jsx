export default function Proyect({ data }) {
  return (
    <div className="col-md-4 p-2">
      <div className="card h-100">
        <div className="overflow">
          <img src={data.urlImage} alt={data.title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{data.title}</h4>
          <p>{data.description}</p>
          <a href={data.urlPage}>Know more</a>
          <div className="mt-1">
            {data.techs.map((tech, index) => (
              <span key={index} className="badge rounded-pill bg-danger me-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

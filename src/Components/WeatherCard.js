function WeatherCard(props) {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="card" style={{ width: "40rem" }}>
        <div className="card-body">
          <h5 className="card-title">Current Weather</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            City : {props.data.city}
          </h6>
          <div className="row">
            <div className="card-text col-6" style={{ fontSize: "80px" }}>
              <p>{props.temperature}&deg;C</p>
            </div>
            <div className=" col-6 ">
              <ul
                className=" list-group float-left "
                style={{ fontSize: "15px" }}
              >
                <li className="list-group-item borderless">
                  Wind Speed: {props.data.windSpeed} Km/h
                </li>
                <li className="list-group-item">
                  Minimum Temperature: {props.data.minTemp}&deg;C
                </li>
                <li className="list-group-item">
                  Time Zone: {props.data.timeZone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

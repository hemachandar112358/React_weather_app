import React, { Component } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      resCode: "",
      error: "",
      userInput: "",
      temperature: "",
      show: false,
      loading: "",
      data: {
        windSpeed: "",
        minTemp: "",
        city: "",
        timeZone: "",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  componentDidMount() {}

  handleClickReset = () => {
    this.setState((state) => ({
      show: false,
      userInput: "",
      loading: "",
    }));
  };

  handleClick = (e) => {
    e.preventDefault();
    const API_KEY = "1f24d6a9c4434428cb081d6709a43e2a";
    const URI =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.userInput +
      "&units=metric&appid=" +
      API_KEY;

    axios
      .get(URI)
      .then(
        this.setState({
          loading: "Loading...",
        })
      )
      .then((response) => {
        this.setState({
          resCode: 200,
          temperature: response.data.main.temp,
          show: true,
          loading: "",
          data: {
            windSpeed: response.data.wind.speed,
            minTemp: response.data.main.temp_min,
            city: response.data.name,
            timeZone: response.data.timezone,
          },
        });
      })
      .catch((error) => {
        this.setState({
          resCode: 404,
          error: "Please enter a proper city name or code",
          loading: "",
        });
      });
  };

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-md">
        <form style={{ marginTop: "10%" }}>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              placeholder="Enter City Name or Pin Code"
              className="form-control"

              // className="col-12 col-md-12 col-lg-12 "
            />
          </div>
          <div class="form-row">
            <div class="col">
              <button
                type="button"
                className="btn btn-light mr-5 btn-block"
                onClick={this.handleClick}
              >
                Submit
              </button>
              {/* <button
                type="button"
                className="btn btn-light mr-5 btn-block"
                onClick={this.handleClick}
              >
                Reset
              </button> */}
            </div>
          </div>
        </form>

        <React.Fragment>{this.state.loading}</React.Fragment>
        {this.state.resCode === 200 ? (
          <WeatherCard
            data={this.state.data}
            temperature={this.state.temperature}
          />
        ) : (
          <div style={{ marginTop: "50px" }}>{this.state.error}</div>
        )}
      </div>
    );
  }
}

export default WeatherApp;

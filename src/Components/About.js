function About() {
  return (
    <div class="card w-50" style={{ marginTop: "12.5%", marginLeft: "12.5%" }}>
      <h5 class="card-header">About Page</h5>
      <div class="card-body">
        <p class="card-text">
          This Application was built using Open Weather API.
          <p>
            Refer{" "}
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              className="stretched-link"
            >
              here
            </a>{" "}
            for their api details
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;

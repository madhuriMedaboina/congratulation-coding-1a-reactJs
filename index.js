const element = (
  <div className="bg-container">
    <div>
      <h1 className="heading">Congratulations</h1>
    </div>

    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img"
      />
      <h1 class="name">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of computer Education and technology Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

import "../styles/main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="ellipse24">
        <img src="/Ellipse 24.svg" alt="Ellipse 24" />
      </div>
      <div className="ellipse21">
        <img src="/Ellipse 21.svg" alt="Ellipse 21" />
      </div>
      <div className="ellipse22">
        <img src="/Ellipse 22.svg" alt="Ellipse 22" />
      </div>

      <div className="main_content">
        <div className="main_left_content">
          <h1 className="main_let_text">Virtual Reality Business Solutions</h1>
          <p className="main_para">
            We have over 15 year exprience in business consultting arena. We
            have over 15 year exprience in business consultting arena and
            artficial intelligence.
          </p>
          <div className="main_btn_group">
            <button className="main_btn">Join Us</button>
            <div className="main_btn_play">
              <img src="/Play.svg" alt="Play" />
              <span>Watch Video</span>
            </div>
          </div>
        </div>
        <div className="main_right_image">
          <img src="/Saly-19.svg" alt="Saly" />
        </div>
      </div>
    </div>
  );
};

export default Main;

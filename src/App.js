import Main from "./components/main";
import Navbar from "./components/navbar";
import Section1 from "./components/section-1";
import Section2 from "./components/section-2";
import Section3 from "./components/section-3";
import Service from "./components/service";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Service />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default App;

import "./App.css";
import NavBar from "./LayoutUI/NavBar";
import Headline from "./PageUI/Headline";
import CTA from "./PageUI/CTA";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Headline />
      <CTA />
    </div>
  );
}

export default App;

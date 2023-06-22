import "./App.css";
import Navigabar from "./components/Navigabar";
import Home  from "./components/Home";
import Tentang from "./components/Tentang";
import Program from "./components/Program";
import Programygbenar from "./components/Programygbenar";
import Programh1 from "./components/Programh1";
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Navigabar />
            <Home />
            <Tentang />
            <Programh1 />
            <Programygbenar />
            <Program />
            <Footer />
        </div>
    );
}

export default App;

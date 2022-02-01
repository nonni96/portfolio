import { useState } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import icelandPhoto from "./assets/img/iceland.png";
import ukPhoto from "./assets/img/united-kingdom.png";

function App() {
    const [icelandic, setIcelandic] = useState(false);

    return (
    <div className="App">
        <button className='w-10' onClick={() => setIcelandic(!icelandic)}>
                {icelandic ? 
                <img src={icelandPhoto} alt=''/>
                :
                <img src={ukPhoto} alt=''/>
                }
        </button>
        <Header icelandic={icelandic} />
        <Jobs icelandic={icelandic} />
        <Projects icelandic={icelandic} />
        <a href="https://www.flaticon.com/free-icons/country" title="country icons">Country icons created by Freepik - Flaticon</a>
    </div>
    );
}

export default App;
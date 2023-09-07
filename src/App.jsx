import React from "react";
import AllRouting from "./components/AllRouting";
import Navbar from "./components/Navbar/Navbar";



const App = () => {
    return (
        <div className='app'>
            <Navbar />

            <main className='app_main'>
               <AllRouting />
            </main>
        </div>
    );
};

export default App;

// import logo from './logo.svg';
import './App.css';
// import Footer from './Footer';
import React, {useState, useEffect} from 'react';
// import { list } from 'postcss';
import Penguin from './Penguin';

function App() {

  const [seconds, setSeconds] = useState(0);
  // const [isActive, setIsActive] = useState(true);

  const desc_list = ["Human", "Cs Student", "Tech Entusiast"]

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 2000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
    <div>

      <div className="App" class="grid grid-cols-6 content-center">
        {/* create a nice presentation site */}
        <div class="col-span-6 py-4 sm:min-h-[15vh] row-start-1" />
        <div class="bg-[#CC6B49] col-start-2 col-span-4 row-span-4 row-start-2 rounded-t-3xl">
          <div class="flex items-center flex-col">
            <h1 class="flex-auto py-8 md:text-8xl md:text-center text-center text-4xl text-white">
              Sebastián Espejo
            </h1>
            <h2 class="flex-auto py-2 md:text-6xl md:text-center text-center text-2xl text-white">
              { desc_list[seconds % 3] }
            </h2>
          </div>
        </div>
        <div class="flex col-start-2 row-start-6 col-span-4 justify-center bg-[#CC6B49] rounded-b-3xl">
          <Penguin />
        </div>
      </div>

    </div>

    </>


  );



}

export default App;

// import logo from './logo.svg';
import './App.css';
// import Footer from './Footer';
import React, {useState, useEffect} from 'react';
// import { list } from 'postcss';
import Penguin from './Penguin';

function App() {

  const [seconds, setSeconds] = useState(0);

  const desc_list = ["Human 🌎", "Cs Student 🤓", "Tech Entusiast 👨‍💻"]

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div class="flex !items-center justify-center  min-h-[100vh] ">

      <div className="App" class="flex flex-col w-auto my-4">
        {/* create a nice presentation site */}

        <div class="bg-[#CC6B49] rounded-t-3xl">
          <div class="flex items-center flex-col">
            <h1 class="flex-auto md:text-8xl md:text-center mt-4 text-center text-4xl text-white">
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

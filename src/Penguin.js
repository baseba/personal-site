import penguin_1 from './penguins/1.PNG';
import penguin_2 from './penguins/2.PNG';
import penguin_3 from './penguins/3.png';
import penguin_4 from './penguins/4.png';
import React, { useState, useEffect } from 'react';

function Penguin () {

    const [penguin, setPenguin] = useState(0);
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const penguins = [penguin_1, penguin_2, penguin_3, penguin_4];
    const min = 0;
    const max = penguins.length;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    function getPenguin() {
        setPenguin(getRandomInt(min, max));
        fetch("https://randomuser.me/api/")
        .then(response => {
            if (response.ok) {
                return response.json();
            }throw response;
        }).then(data => {setData(data)})
        .catch(error => {
            console.log(error);
        })
    }


    useEffect(() => {
        setPenguin(getRandomInt(min, max));
        fetch("https://randomuser.me/api/")
        .then(response => {
            if (response.ok) {
                return response.json();
            }throw response;
        }).then(data => {setData(data)})
        .catch(error => {
            console.log(error);
        }).finally(() => { setLoading(false)});
    }, []);

    if (loading) return "loading...";

    return (
        <>
        {/* {console.log(data["results"][0]["name"]["first"])} */}
        <div class="flex flex-col items-center">
            <h2 class ="text-center text-xl text-white py-4">Congratulations! your companion 🐧 is ...</h2>
            <img src={penguins[penguin]} alt="pinguino" class=" w-32 h-48 object-fill border-4 border-amber-800 rounded-sm"/>
            <h1 class="text-center text-xl py-8 text-white">{data["results"][0]["name"]["title"]}. {data["results"][0]["name"]["first"]} {data["results"][0]["name"]["last"] } the penguin</h1>
            <button onClick={() => {getPenguin()}} class="bg-yellow-200 text-gray-800 rounded-md p-2 border-4 border-amber-800 text-lg"> get a new penguin </button>
            <div class="h-16"></div>
        </div>

        </>
    );
}

export default Penguin;
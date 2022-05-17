import React, {useState, useEffect} from 'react';
// import Penguin from '../Penguin';
import Footer from '../Footer';

function LeagueTracker() {

    const [summoners, setSummoners] = useState(['']);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // fetch summoners
        fetch('https://league-acc-tracker.herokuapp.com/summoners')
        .then(response => {
            if (response.ok) {
                return response.json();
            }throw response;
        })
        .then(res => {setSummoners(res)})
        .catch(error => {
            console.log(error);
        }).finally(() => {setLoading(false)});
    }, [loading]);

    if (loading) return "Loading...";
    console.log(summoners);



  return (
    <>
    <div class="flex !items-center justify-center  min-h-[100vh] text-slate-900">

        {/* map sumonres names */}
        {summoners.map(summoner => {
            return (
                <div class="flex flex-col items-center">
                    <h2 class ="text-center text-xl text-black sd:py-4 py-2">Welcome to League Acc Tracker!</h2>
                    <h1 class="text-center py-2 text-xl text-black">{summoner.Name}</h1>
                </div>
            )
        })}
        {"hello world"}
    </div>
    <Footer />

    </>


  );



}

export default LeagueTracker;
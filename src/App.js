import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Instructions from "./components/Instructions";

function App() {
    // State
    const [grid, setGrid] = useState([]);
    const [strikes, setStrikes] = useState(0);
    const [records, setRecords] = useState([]);
    const [time, setTime] = useState(0);
    const [isFirst, setFirst] = useState(true);
    const [isDone, setDone] = useState(false);
    const [isNew, setNew] = useState(true);
    //

    // Functions
    const createGrid = (size = 5) => {
        let grid_size = parseInt(size);
        let square_list = Array(grid_size * grid_size);
        const airplane_location = Math.floor(Math.random() * (grid_size * grid_size));
        square_list.fill("na");
        square_list[airplane_location] = "a";
        setGrid(square_list);
    };

    const getRecords = () => {
        let old_records = JSON.parse(localStorage.getItem("records")) === null ? [] : JSON.parse(localStorage.getItem("records"));
        let list_records = Object.keys(old_records).map((key) => {
            return old_records[key];
        });
        list_records.sort((a, b) => (a.strikes > b.strikes ? 1 : -1));
        list_records.sort((a, b) => (a.strikes === b.strikes ? (a.time > b.time ? 1 : -1) : -1));
        setRecords(list_records);
        console.log(old_records);
        console.log("hey");
    };

    const saveMatch = () => {
        let current = new Date();
        let record = {
            date: current.toLocaleString(),
            strikes,
            time,
        };
        console.log(records);
        console.log("hey2");
        let old_records = { ...records };
        old_records = { ...old_records, record };
        console.log(old_records);
        let list_records = Object.keys(old_records).map((key) => {
            return old_records[key];
        });
        list_records.sort((a, b) => (a.strikes > b.strikes ? 1 : -1));
        setRecords(list_records);
        localStorage.setItem("records", JSON.stringify(old_records));
    };
    //

    //Effects
    useEffect(() => {
        if (isDone) {
          saveMatch();
        }
    }, [isDone]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getRecords();
        createGrid();
        setNew(false);
        setDone(false);
        setStrikes(0);
        setTime(0);
    }, [isNew]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1);
        }, 100);
        if (isDone === true) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    });
    //

    return (
        <>
            <Header />
            {isFirst && <Instructions />}
            <div className="App">
                {!isFirst && <Grid grid={grid} isDone={isDone} setDone={setDone} isFirst={isFirst} isNew={isNew} strikes={strikes} setStrikes={setStrikes} />}
                {!isDone && !isFirst && <div>{time / 10} seconds.</div>}
                {isFirst && (
                    <button
                        onClick={() => {
                            setFirst(false);
                            setTime(0);
                        }}
                        className="first-game"
                    >
                        Start game
                    </button>
                )}
                {isDone && (
                    <button className="new-game" onClick={() => setNew(true)}>
                        New game
                    </button>
                )}
                {isDone && (
                    <>
                        <div className="info">
                            You win ! Only {strikes} {strikes > 1 ? "strikes" : "strike"}. Time elapsed: {time / 10} {time > 1 ? "seconds" : "second"}.
                        </div>
                    </>
                )}

                <div className="records">
                    <h2 className="records-title">Best Scores</h2>
                    {records &&
                        records.map(({ time, strikes, date }, index) => (
                            <div class="stats" key={index}>
                                <div class="stat count">{index + 1}.</div>
                                <div class="stat">Strikes: {strikes}</div>
                                <div class="stat">Time: {time / 10}</div>
                                <div class="stat">{date}</div>
                            </div>
                        ))}
                    <button
                        class="clear-button"
                        onClick={() => {
                            localStorage.clear();
                            setRecords([]);
                        }}
                    >
                        Clear statistics
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;

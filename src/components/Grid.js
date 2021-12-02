import React from "react";
import Square from "./Square";
import "./Grid.css";
import Airplane from "./Airplane";
const Grid = ({ grid, setDone, isDone, setShow, show, isNew, strikes, setStrikes, isFirst }) => {
    return (
        <div className="grid">
            {grid.map((item) => {
                return item === "a" ? 
                <Airplane isNew={isNew} isDone={isDone} isFirst={isFirst} strikes={strikes} 
                setStrikes={setStrikes} setDone={setDone} show={show} setShow={setShow} /> 
                : <Square isFirst={isFirst} strikes={strikes} setStrikes={setStrikes} isDone={isDone} 
                setDone={setDone} show={show} setShow={setShow} isNew={isNew} />;
            })}
        </div>
    );
};

export default Grid;

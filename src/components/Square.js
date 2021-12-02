import React, { useEffect, useState } from "react";
import "./Square.css";
const Square = ({ setDone, isDone, isNew, strikes, setStrikes, isFirst }) => {
    const [isDisabled, setDisabled] = useState(false);
    const [show, setShow] = useState("");

    const showSquare = () => {
        if (!isDisabled && !isDone) {
            setShow("square-show");
            setDisabled(true);
            setStrikes(strikes + 1);
        }
    };

    useEffect(() => {
        setShow("");
        setDisabled(false);
    }, [isNew]);

    return (
        <button onClick={showSquare} disabled={isDisabled || isDone || isFirst} class="square">
            <span class={"square-text " + show}>🚩</span>
        </button>
    );
};

export default Square;

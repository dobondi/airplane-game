import React, { useEffect, useState } from "react";
import "./Airplane.css";
const Airplane = ({ setDone, isDone, isNew, strikes, setStrikes, isFirst }) => {
    const [isDisabled, setDisabled] = useState(false);
    const [show, setShow] = useState("");

    const showAirplane = () => {
        setShow("airplane-show");
        setDisabled(true);
        setDone(true);
        setStrikes(strikes + 1);
    };
    
    useEffect(() => {
        setShow("");
        setDisabled(false);
    }, [isNew]);
    return (
        <button onClick={showAirplane} disabled={isDisabled || isDone || isFirst} class="airplane">
            <span class={"airplane-text " + show}>🔥</span>
        </button>
    );
};

export default Airplane;

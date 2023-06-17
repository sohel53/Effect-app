import React, {useState, useEffect} from "react";

//useEffect are used to render the particlar obbject only one time we have to pass the object name in [array] to render it.

const Effect1 = () => {
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);


    useEffect(() => {
        document.title = `Gold: ${gold} | Silver: ${silver} | Bronze: ${bronze}`;
        console.log("Effect running");
    }, [gold, silver])
   

    return (
        <div>
            <h1>Gold: {gold} | Silver: {silver} | Bronze: {bronze}</h1>
            <button onClick={() => setGold(gold + 1)}>Gold</button>&nbsp;&nbsp;
            <button onClick={() => setSilver(silver + 1)}>Silver</button>&nbsp;&nbsp;
            <button onClick={() => setBronze(bronze + 1)}>Bronze</button>
        </div>
    )
}

export default Effect1;
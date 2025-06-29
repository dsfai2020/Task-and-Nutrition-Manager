import {useState, setState, useEffect} from 'react';



export function ExpComponent(){

    const [exp, setExp] = useState(45);

    const [level, setLevel] = useState(1);

    const handleExp = (e) => {
        setExp(e.target.value)
        if (exp>=100) {
            setExp(0)
            setLevel(level + 1)
        }
    };

    return(
        <div class='Exp'>
            <div>
                <h3>Level: {level}</h3>
            </div>

            <div class='Exp-Bar-Container'>
                <h1 class='Exp-Fill' style={{width: `${exp}%`, backgroundColor: 'blue'}}></h1>
                <h1 style={{zIndex: '99', height: '1vh', fontSize: '15px', alignSelf: 'center'}}>{exp} EXP</h1>
            </div>

            <div>
                <input class='exp-text-area' placeholder='coming soon' onChange={handleExp} value={exp}></input>
            </div>

        </div>
    )
};
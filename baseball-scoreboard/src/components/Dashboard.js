import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {
    const [strikeCount, setStrikeCount] = useState(0);
    const [ballCount, setBallCount] = useState(0);

    const handleStrike = () => {
        let newCount = strikeCount;
        if (strikeCount < 3) {
            setStrikeCount(newCount+=1)
         } else {
            setStrikeCount(0);
         };
    }

    const handleBall = () => {
        let newCount = ballCount;
        if (ballCount < 4) {
            setBallCount(newCount+=1);
        } else {
            setBallCount(0);
        }
    }

    const handleFoul = () => {
        let newCount = strikeCount;
        if (strikeCount < 2) {
            setStrikeCount(newCount+=1);
        } else {
            setStrikeCount(newCount);
        }
    }

    const handleHit = () => {
        setStrikeCount(0);
        setBallCount(0);
    }

    return (
        <div>
            <Display strikeCount={strikeCount} ballCount={ballCount}/>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    )
}

export default Dashboard;
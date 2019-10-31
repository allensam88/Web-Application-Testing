import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {
    const [strikeCount, setStrikeCount] = useState(0);
    const [ballCount, setBallCount] = useState(0);

    const handleStrike = () => {
        let newCount = strikeCount;
        setStrikeCount(newCount+=1);
    }

    const handleBall = () => {
        let newCount = ballCount;
        setBallCount(newCount+=1);
    }

    return (
        <div>
            <Display strikeCount={strikeCount} ballCount={ballCount}/>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBall}>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
}

export default Dashboard;
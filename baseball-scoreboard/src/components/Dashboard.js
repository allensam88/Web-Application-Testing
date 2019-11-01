import React, { useState } from 'react';
// import { useStrikeCount } from '../hooks/useStrikeCount';
import Display from './Display';

const Dashboard = () => {
    const [strikeCount, setStrikeCount] = useState(0);
    const [ballCount, setBallCount] = useState(0);

    const handleStrike = () => {
        if (strikeCount < 3) {
            setStrikeCount(strikeCount + 1)
         } else {
            setStrikeCount(0);
         };
    }

    const handleBall = () => {
        if (ballCount < 4) {
            setBallCount(ballCount + 1);
        } else {
            setBallCount(0);
        }
    }

    const handleFoul = () => {
        if (strikeCount < 2) {
            setStrikeCount(strikeCount + 1);
        }
    }

    const handleHit = () => {
        setStrikeCount(0);
        setBallCount(0);
    }

    return (
        <div>
            <Display strikeCount={strikeCount} ballCount={ballCount}/>
            <button onClick={handleStrike} data-testid='strike_btn'>Strike</button>
            <button onClick={handleBall} data-testid='ball_btn'>Ball</button>
            <button onClick={handleFoul} data-testid='foul_btn'>Foul</button>
            <button onClick={handleHit} data-testid='hit_btn'>Hit</button>
        </div>
    )
}

export default Dashboard;
import { useState, useEffect } from 'react';
// import { useLocalStorage } from './useLocalStorage';

export const useStrikeCount = () => {
    const [strikeCount, setStrikeCount] = useState(0);
    
    useEffect(() => {
      const setValue = () => {
        if (strikeCount < 3) {
            setStrikeCount(strikeCount + 1)
        } else {
            setStrikeCount(0);
        };
      }
    }, [strikeCount]);


    
    return [strikeCount, setValue]
}
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useStrikeCount = () => {
    const [strikeCount, setStrikeCount] = useLocalStorage('strikeCount', 0);
    
    useEffect(() => {
        
      }, [strikeCount]);
    
    return [strikeCount, setStrikeCount]
}
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useBallCount = () => {
    const [ballCount, setBallCount] = useLocalStorage('ballCount', '0');
    
    useEffect(() => {
        
    }, [ballCount]);
    
    return [ballCount, setBallCount]
}
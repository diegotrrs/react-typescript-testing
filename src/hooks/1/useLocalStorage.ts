
import { useState, useEffect } from 'react';


export const useLocalStorage = (eventHandler: (event: StorageEvent) => void): boolean => {
    const [isChangeDetected, setIsChangeDetected] = useState<boolean>(false);
    
    useEffect(()=>{
        window.addEventListener('storage', eventHandler);
        return () => {
            window.removeEventListener('storage', eventHandler);
        };
    }, []);

    return isChangeDetected;
    
}


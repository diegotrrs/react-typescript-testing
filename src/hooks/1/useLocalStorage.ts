
import { useState, useEffect } from 'react';


export const useLocalStorage = (eventHandler: (event: StorageEvent) => void): boolean => {
    const [isChangeDetected, setIsChangeDetected] = useState<boolean>(false);

    const handleLocalStorageChange = (event: StorageEvent) => {
        console.log('handleLocalStorageChange::new value ' + event.newValue);
        setIsChangeDetected(true);
    }

    
    useEffect(()=>{
        console.log(`Setting listener`);
        window.addEventListener('storage', eventHandler);
        return () => {
            console.log('Removing listener');
            window.removeEventListener('storage', eventHandler);
        };
    }, []);

    return isChangeDetected;
    
}


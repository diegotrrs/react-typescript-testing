
import { useEffect } from 'react';

export const useLocalStorage = (key: string, onChange: (value: string) => void) =>
    useEffect(()=>{
        const handleStorageChangeEvent = (event: StorageEvent) => {
            console.log(`> handleStorageChange:newValue ${event.newValue}`);
            if(event.key === key){
                onChange(event.newValue || "");    
            }
        }

        window.addEventListener('storage', handleStorageChangeEvent);
        return () => {
            window.removeEventListener('storage', handleStorageChangeEvent);
        };
    }, [key, onChange]);
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage"

const Component = () => {

    const [luckyNumber, setLuckyNumber] = useState<number>(0);
    
    const handleStorageChangeEvent = (event: StorageEvent) => {
        console.log(`> handleStorageChange:newValue ${event.newValue}`);
        setLuckyNumber(Number.parseInt(`${event.newValue}`));
    }

    useLocalStorage(handleStorageChangeEvent);

    const getLuckyNumber = async () => {
        const newValue = `${Math.floor((Math.random() * 9)+1)}`;
        window.localStorage.setItem('luckyNumber', newValue);
        const fakeStorageEventInit: StorageEventInit = {
            key: "luckyNumber",
            newValue,
        }
        console.log('[local-storage.saveToLocalStorage] About to dispatch fake storage event');
        window.dispatchEvent(new StorageEvent('storage', fakeStorageEventInit));
    }

    return (
        <div>
            <br/>
            <div>Your lucky number is <span data-testid="luckyNumberSpan">{luckyNumber}</span></div>
            <br/>
            <button data-testid="getLuckyNumberBtn" onClick={getLuckyNumber}>Get Lucky number</button>
            <br/>
        </div>        
    );
}

export default Component;
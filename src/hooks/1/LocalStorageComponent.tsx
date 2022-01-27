import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage"

const LocalStorageComponent = () => {
    const [luckyNumber, setLuckyNumber] = useState<number>(0);
    
    const onChange = (value:  string) => {
        console.log(`> onChange:newValue ${value}`);
        setLuckyNumber(Number.parseInt(`${value}`));
    }

    useLocalStorage('luckyNumber', onChange);

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

    const getRandomAge = () => {
        const newValue = `${Math.floor((Math.random() * 9)+20)}`;
        window.localStorage.setItem('age', newValue);
        const fakeStorageEventInit: StorageEventInit = {
            key: "age",
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
            <button data-testid="getRandomAgeBtn" onClick={getRandomAge}>Get Random Age</button>
            <br/>
        </div>        
    );
}

export default LocalStorageComponent;
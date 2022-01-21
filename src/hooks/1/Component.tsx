import { useLocalStorage } from "./useLocalStorage"

const Component = () => {
    const handleStorageChangeEvent = (event: StorageEvent) => {
        console.log(`> handleStorageChange:newValue ${event.newValue}`);
    }
    
    const isReceived = useLocalStorage(handleStorageChangeEvent);

    const changeLocalStorage = async () => {
        const newValue = `${Math.floor(Math.random() * 100)}`;
        window.localStorage.setItem('name', newValue);
        const fakeStorageEventInit: StorageEventInit = {
            key: "name",
            newValue,
        }
        console.log('[local-storage.saveToLocalStorage] About to dispatch fake storage event');
        window.dispatchEvent(new StorageEvent('storage', fakeStorageEventInit));
    }

    

    return (
        <div>
            <p>Has message been received? {isReceived ? "true" : "false"}</p>
            <button onClick={changeLocalStorage}>Store new value local storage</button>
            <br/>
{/*             <button onClick={sendTestMessage}>Send test message</button>
 */}        </div>        
    )
}

export default Component;

import { useEffect } from 'react'

import { createManagedState} from './ManagingProviders'

export const {useCountry} = (() => {
    const [useManagedState] = createManagedState();
    
    const useCountry = () => {
       const [state, setState] = useManagedState('IK');         // it might be here

        // Initialise if necessary
        useEffect(() => {
            console.log('countries-provider.useCountry.useEffect state.', { state });
        });

        const returns = {
            countryState: state,
            changeCountry: state === undefined
            ? () => { console.warn(`[countries-provider.useCountry] Cannot change country as state has not yet been initialised.`); }
            : (newCountryCode: string) => setState((newCountryCode)),
        }
        console.log(`[countries-provider.useCountry] Returning: `, returns);
        return returns;
    }
    return {
        useCountry,
    };
}
)();
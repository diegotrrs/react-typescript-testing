
import { useEffect } from 'react'

import { createManagedState} from './ManagingProvidersO'

export const {useCountry} = (() => {
    const [useManagedState] = createManagedState();
    
    const useCountry = () => {
       const [state, setState] = useManagedState({data: 'UK'});         // it might be here

        // Initialise if necessary
        useEffect(() => {
            console.log('countries-provider.useCountry.useEffect state.', { state });
        });

        const returns = {
            countryState: state,
            changeCountry: state === undefined
            ? () => { console.warn(`[countries-provider.useCountry] Cannot change country as state has not yet been initialised.`); }
            : (newCountryCode: string) => setState({data: newCountryCode}),
        }
        console.log(`[countries-provider.useCountry] Returning: `, returns);
        return returns;
    }
    return {
        useCountry,
    };
}
)();
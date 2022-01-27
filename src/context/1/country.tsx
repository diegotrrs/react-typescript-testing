import React from 'react'


export const CountryContext = React.createContext(null)

export const CountryProvider =  ({children}: any) => {

    const [country, setCountry] = React.useState('GB')
    const [name, setName] = React.useState('Cameron')


    const store = {
        countryStore: [country, setCountry],
        nameStore: [name, setName],
    } as any;

    return <CountryContext.Provider value={store}>{children}</CountryContext.Provider>
}
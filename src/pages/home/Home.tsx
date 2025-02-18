import '../../styles/home/home.css'
import { useState } from 'react'

import { TurnRegister } from '../../components/home/TurnRegister'
import { TableResult } from '../../components/table/TableResult'

export const Home = () => {
    


    const [results, setResults] = useState<string[]>([])
    const numberResults = results.map(value => parseInt(value))
    
    return (
        <div className='main_container'>
            <TurnRegister results={numberResults} setResults={setResults} />
            <TableResult results={results} />
        </div>
    )
}

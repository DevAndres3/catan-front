import { useState } from "react"
import { TurnRegister } from "../../../components/home/TurnRegister"
import { TableResult } from "../../../components/table/TableResult"

export const CatanPage = () => {
    const [results, setResults] = useState<string[]>([])
    const numberResults = results.map((value) => parseInt(value))
    return (
    <div className="container-catan">
         <TurnRegister results={numberResults} setResults={setResults} />
         <TableResult results={results} />
    </div>

    )
}

import '../../styles/home/tableResult.css'
export interface TableResultProps {
    results: string[]
}
export const TableResult = ({ results }: TableResultProps) => {
    return (
        <section className="results">
            <h1 className="title_result">Tabla de resultados por turnos</h1>

            <table>
                <thead>
                    <tr>
                        <th>Turno</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, i) => (
                        <tr key={i} className="item_table">
                            <th>{i + 1}</th>
                            <th>
                                <strong key={i}> {result} </strong>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

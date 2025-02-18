import '../../styles/home/turnRegister.css'
import { Dispatch, FormEvent, SetStateAction } from 'react'
import { useForm } from '../../hooks/useForm'
import { calculationProbability } from '../../helper/helpers'

export interface TurnRegisterProps {
    setResults: Dispatch<SetStateAction<string[]>>,
    results: number[]
}

const initialState = { turn: '' }
export const TurnRegister = ({ setResults, results }: TurnRegisterProps) => {
    const { form, handleInputChange, reset } = useForm(initialState)
    const { turn } = form
    const onSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResults(prev => [...prev, turn])
        reset()
    }
    return (
        <section className='register_turn'  >

            <form className='form_register' onSubmit={onSave}>
                <input name='turn' value={turn} className='turn' type='number' onChange={handleInputChange} />
                <button type='submit'>
                    Guardar
                </button>
            </form>

            <div className="statistics">
                <div className="content_values">
                    <strong>
                        Probabilidad de cada número
                    </strong>
                    <table>
                        <thead>
                            <tr>

                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {calculationProbability(2, results)}
                                </td>
                                <td>
                                    {calculationProbability(3, results)}
                                </td>
                                <td>
                                    {calculationProbability(4, results)}
                                </td>
                                <td>
                                    {calculationProbability(5, results)}
                                </td>
                                <td>
                                    {calculationProbability(6, results)}
                                </td>
                                <td>
                                    {calculationProbability(7, results)}
                                </td>
                                <td>
                                    {calculationProbability(8, results)}
                                </td>
                                <td>
                                    {calculationProbability(9, results)}
                                </td>
                                <td>
                                    {calculationProbability(10, results)}
                                </td>
                                <td>
                                    {calculationProbability(11, results)}
                                </td>
                                <td>
                                    {calculationProbability(12, results)}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    )
}

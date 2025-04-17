export const calculationProbability = (
    number: number,
    pool: number[]
): string => {
    const totalTurns = pool.length
    const result = pool.filter((value) => value === number)
    const probability = (result.length / totalTurns) * 100

    return `${probability.toPrecision(2)}%`
}

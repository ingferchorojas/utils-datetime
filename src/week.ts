const currentWeekNumber = (date: Date | string): number => {
    // Convierte el parámetro a un objeto Date si es un string
    const currentDate = typeof date === 'string' ? new Date(date) : date

    // Verifica que la fecha sea válida
    if (isNaN(currentDate.getTime())) {
        throw new Error('Fecha inválida')
    }

    // Calcula el número de semana utilizando el estándar ISO
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1)
    const daysSinceStart = Math.floor((currentDate.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000))
    const weekNumber = Math.ceil((daysSinceStart + startOfYear.getDay() + 1) / 7)

    return weekNumber
}

export {
    currentWeekNumber
}

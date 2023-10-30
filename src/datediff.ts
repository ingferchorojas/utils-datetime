interface DateInterface {
    start: Date | string
    end: Date | string
}

type TimePeriod = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'

const parseDate = (date: Date | string): Date => {
    if (date instanceof Date) {
        return date
    } else {
        const parsedDate = new Date(date)
        if (isNaN(parsedDate.getTime())) {
            throw new Error(`Invalid date format: ${date}`)
        }
        return parsedDate
    }
}

const dateDiff = (dates: DateInterface, timePeriod: TimePeriod): number => {
    const startDate = parseDate(dates.start)
    const endDate = parseDate(dates.end)

    const startMs = startDate.getTime()
    const endMs = endDate.getTime()
    const differenceMs = endMs - startMs > 0 ? endMs - startMs : startMs - endMs

    switch (timePeriod) {
        case 'milliseconds':
            return differenceMs
        case 'seconds':
            return differenceMs / 1000
        case 'minutes':
            return differenceMs / (1000 * 60)
        case 'hours':
            return differenceMs / (1000 * 60 * 60)
        case 'days':
            return differenceMs / (1000 * 60 * 60 * 24)
        case 'weeks':
            const weeks = differenceMs / (1000 * 60 * 60 * 24 * 7)
            return Number((weeks).toFixed(2))
        case 'months':
            // Ajuste: Usar 30.44 días para tener en cuenta variaciones en longitudes de mes.
            const months = differenceMs / (1000 * 60 * 60 * 24 * 30.44)
            return Number((months).toFixed(2))
        case 'years':
            const years = differenceMs / (1000 * 60 * 60 * 24 * 365.25)
            return Number((years).toFixed(2))
        default:
            throw new Error('Invalid time period')
    }
}

export { dateDiff }

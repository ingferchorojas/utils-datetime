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
            return differenceMs / (1000 * 60 * 60 * 24 * 7)
        case 'months':
            return differenceMs / (1000 * 60 * 60 * 24 * 30.436875)
        case 'years':
            return differenceMs / (1000 * 60 * 60 * 24 * 365.2425)
        default:
            throw new Error('Invalid time period')
    }
}

export { dateDiff }

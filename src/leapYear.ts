type YearInterface = number | string

const isLeapYear = (yearInterface: YearInterface): boolean => {
    const year: number = typeof yearInterface === 'string' ? parseInt(yearInterface) : yearInterface

    if (isNaN(year)) {
        throw new Error("Invalid year format. Please provide a valid number or string representation of a year.")
    }

    if (year < 1582) {
        throw new Error("The calculation of leap years is applicable for years greater than or equal to 1582 (introduction of the Gregorian calendar).")
    }

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export { isLeapYear }

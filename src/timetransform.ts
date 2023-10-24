interface ITimeDelta {
    year?: number, 
    month?: number, 
    day?: number, 
    hour?: number, 
    minute?: number, 
    second?: number 
}
const timetransform = (date: Date, timeDelta: ITimeDelta): Date => {
    const { year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0 } = timeDelta

    const newDate = new Date(date)

    newDate.setFullYear(newDate.getFullYear() + year)
    newDate.setMonth(newDate.getMonth() + month)
    newDate.setDate(newDate.getDate() + day)
    newDate.setHours(newDate.getHours() + hour)
    newDate.setMinutes(newDate.getMinutes() + minute)
    newDate.setSeconds(newDate.getSeconds() + second)

    return newDate
}

export {
    timetransform
}

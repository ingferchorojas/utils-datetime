const getCurrentDate = (timezone: string = 'UTC'): Date => {
  const now = new Date()

  const options: Intl.DateTimeFormatOptions = {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23'
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', options).formatToParts()
  const { year, month, day, hour, minute, second } = Object.fromEntries(formattedDate.map(part => [part.type, part.value]))

  const milliseconds = now.getMilliseconds()
  const millisecondsString = milliseconds.toString().padStart(3, '0') // Asegura que siempre tenga tres dígitos

  const dateString = `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecondsString}Z`

  return new Date(dateString)
}

export {
    getCurrentDate
}

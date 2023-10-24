const dateTimeformat = (date: Date, template: string, language: string = 'en-EN'): string => {
  const formattedDate: Record<string, string | number> = {}

  const fullYear = date.getUTCFullYear()

  // Generar el objeto con las partes de la fecha
  formattedDate.year = fullYear
  formattedDate.month = date.getUTCMonth() + 1
  formattedDate.day = date.getUTCDate()
  formattedDate.hour = date.getUTCHours()
  formattedDate.minute = date.getUTCMinutes()
  formattedDate.second = date.getUTCSeconds()
  formattedDate.milliseconds = date.toISOString().split('.')[1].slice(0, -1)

  // Determinar si es AM o PM
  const isPM = formattedDate.hour >= 12
  const amPm = isPM ? 'PM' : 'AM'
  const hour12 = formattedDate.hour % 12 || 12 // Convertir 0 a 12 para las 12 AM

  // Obtener el nombre del día y del mes según el idioma
  const day = date.toLocaleDateString(language, { weekday: 'long' })
  const month = date.toLocaleDateString(language, { month: 'long' })

  // Capitalizar la primera letra del día y del mes
  const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1)
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)

  // Template personalizado para el formato deseado
  const formattedString = template
      .replace(/%YYYY%/g, formattedDate.year.toString())
      .replace(/%YY%/g, (formattedDate.year % 100).toString().padStart(2, '0'))
      .replace(/%MM%/g, String(formattedDate.month).padStart(2, '0'))
      .replace(/%DD%/g, String(formattedDate.day).padStart(2, '0'))
      .replace(/%HH%/g, String(formattedDate.hour).padStart(2, '0'))
      .replace(/%H%/g, hour12.toString()) // 12 horas sin ceros iniciales
      .replace(/%MI%/g, String(formattedDate.minute).padStart(2, '0'))
      .replace(/%SS%/g, String(formattedDate.second).padStart(2, '0'))
      .replace(/%MS%/g, String(formattedDate.milliseconds).padStart(3, '0'))
      .replace(/%A%/g, amPm) // Reemplazar 'A' con AM/PM
      .replace(/%DAY%/g, capitalizedDay)
      .replace(/%MONTH%/g, capitalizedMonth)

  return formattedString
}

export {
  dateTimeformat
}

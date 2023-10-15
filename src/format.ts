const shortFormat = (date: Date, template: string): string => {
    const formattedDate: Record<string, string | number> = {}
  
    const fullYear = date.getUTCFullYear()
  
    // Generar el objeto con las partes de la fecha
    formattedDate.year = fullYear;
    formattedDate.month = date.getUTCMonth() + 1
    formattedDate.day = date.getUTCDate()
    formattedDate.hour = date.getUTCHours()
    formattedDate.minute = date.getUTCMinutes()
    formattedDate.second = date.getUTCSeconds()
    formattedDate.milliseconds = date.toISOString().split('.')[1].slice(0, -1)
  
    // Template personalizado para el formato deseado
    return template.replace(/YYYY/g, formattedDate.year.toString())
                   .replace(/YY/g, (formattedDate.year % 100).toString().padStart(2, '0'))
                   .replace(/MM/g, String(formattedDate.month).padStart(2, '0'))
                   .replace(/DD/g, String(formattedDate.day).padStart(2, '0'))
                   .replace(/HH/g, String(formattedDate.hour).padStart(2, '0'))
                   .replace(/MI/g, String(formattedDate.minute).padStart(2, '0'))
                   .replace(/SS/g, String(formattedDate.second).padStart(2, '0'))
                   .replace(/MS/g, String(formattedDate.milliseconds).padStart(3, '0'))
}

export {
    shortFormat
}

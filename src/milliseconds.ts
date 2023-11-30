const formatMilliseconds = (milliseconds: number | string, includeMS: boolean = false): string => {
  let ms = typeof milliseconds === 'string' ? parseInt(milliseconds, 10) : milliseconds

  if (isNaN(ms)) {
    throw new Error('El valor proporcionado no es un número válido de milisegundos.')
  }

  const hours = Math.floor(ms / 3600000)
  ms %= 3600000
  const minutes = Math.floor(ms / 60000)
  ms %= 60000
  const seconds = Math.floor(ms / 1000)
  ms %= 1000

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num.toString())

  if (includeMS) {
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}.${ms}`
  } else {
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`
  }
}

export {
  formatMilliseconds
}

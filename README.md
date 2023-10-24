# utils-datetime

Manipula y trabaja con fechas y horas de manera sencilla en tu proyecto. Esta biblioteca proporciona funciones útiles para trabajar con fechas y horas de una manera fácil y flexible.

## Instalación

Para instalar `utils-datetime`, simplemente ejecuta el siguiente comando en tu terminal:

```bash
npm install utils-datetime
```
## Importar

```typescript
import  { 
    getCurrentDate, 
    timetransform, 
    dateTimeformat 
}  from 'utils-datetime'
```

## Funciones Disponibles

- getCurrentDate(timezone: Timezones): Date: Obtiene la fecha actual en la zona horaria especificada.

```typescript
const now = getCurrentDate('America/Asuncion')
console.log(now)
// 2023-10-23T22:14:49.876Z
```

- timetransform(date: Date, options: ITimeDelta): Date: Realiza operaciones de suma o resta en una fecha según las opciones proporcionadas.

```typescript
const options = {
  year: -1,
  day: 1,
  hour: 1,
  minute: -3,
  second: 120,
  month: -1
}
const now = getCurrentDate('America/Asuncion')
const timeTransform = timetransform(now, options)
console.log(now)
// 2022-09-25T00:26:06.078Z
```

- dateTimeformat(date: Date, template: string, language: Languages): string: Formatea la fecha según la plantilla y el idioma especificados.

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "Hoy es %DAY%, %DD% de %MONTH% del año %YYYY%, la hora es %H%:%MI% %A%"
const format = dateTimeformat(now, template, 'es-ES')
console.log(format)
// Hoy es Lunes, 23 de Octubre del año 2023, la hora es 10:20 PM
```
```typescript
const now = getCurrentDate('America/Asuncion')
const template = "Hoy es %DAY%, %DD% de %MONTH% del año %YYYY%, la hora es %HH%:%MI%:%SS% con %MS% milisegundos"
const format = dateTimeformat(now, template, 'es-ES')
console.log(format)
// Hoy es Lunes, 23 de Octubre del año 2023, la hora es 22:20:20 con 345 milisegundos
```
```typescript
const now = getCurrentDate('America/Asuncion')
const template = "%DD%/%MM%/%YYYY% %HH%:%MI%"
const format = dateTimeformat(now, template)
console.log(format)
// 23/10/2023 22:20
```
```typescript
const now = getCurrentDate('America/Asuncion')
const template = "%DD%/%MM%/%YYYY% %H%:%MI% %A%"
const format = dateTimeformat(now, template)
console.log(format)
// 23/10/2023 10:20 PM
```

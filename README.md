# utils-datetime

Easily handle and work with dates and times in your project. This library provides useful functions for working with dates and times in an easy and flexible way.

## Installation

To install `utils-datetime`, simply run the following command in your terminal:

```bash
npm install utils-datetime
```
## Import

```typescript
import  { 
    getCurrentDate, 
    timetransform, 
    dateTimeformat 
}  from 'utils-datetime'
```

## Available Functions

- getCurrentDate = (timezone: string = 'UTC'): Gets the current date in the specified time zone.

```typescript
const now = getCurrentDate('America/Asuncion')
console.log(now)
// 2023-10-23T22:14:49.876Z
```

- timetransform = (date: Date, timeDelta: ITimeDelta): Performs addition or subtraction operations on a date according to the provided options.

```typescript
interface ITimeDelta {
    year?: number, 
    month?: number, 
    day?: number, 
    hour?: number, 
    minute?: number, 
    second?: number 
}
```

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

- dateTimeformat = (date: Date, template: string, language: string = 'en-EN'): Formats the date according to the specified template and language.

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "Today is %DAY%, %MONTH% %DD%rd of the year %YYYY%, the time is %H%:%MI% %A%"
const format = dateTimeformat(now, template, 'es-EN')
console.log(format)
// Today is Monday, October 23rd of the year 2023, the time is 10:20 PM.
```

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "Today is %DAY%, %MONTH% %DD%rd of the year %YYYY%, the time is %HH%:%MI%:%SS% with %MS% milliseconds"
const format = dateTimeformat(now, template, 'es-EN')
console.log(format)
// Today is Monday, October 23rd of the year 2023, the time is 22:20:20 with 345 milliseconds.
```

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "%DD%/%MM%/%YYYY% %HH%:%MI%"
const format = dateTimeformat(now, template)
console.log(format)
// 23/10/2023 22:20
// %HH% 23h format
```

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "%DD%/%MM%/%YYYY% %H%:%MI% %A%"
const format = dateTimeformat(now, template)
console.log(format)
// 23/10/2023 10:20 PM
// %H% 12h format
```
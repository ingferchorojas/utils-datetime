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
    timeTransform, 
    dateTimeFormat,
    dateDiff,
    isLeapYear 
}  from 'utils-datetime'
```

## Available Functions

- dateDiff = (dates: DateInterface, timePeriod: TimePeriod): is a function that calculates the time difference between two dates in milliseconds, seconds, minutes, hours, days, weeks, months, or years, depending on the specified time period.

```typescript
interface DateInterface {
    start: Date | string
    end: Date | string
}

type TimePeriod = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'
```

```typescript
const dates = {
    start: new Date('2022-01-01'),
    end: new Date('2023-01-01')
}

const result = dateDiff(dates, 'days')
console.log(result)
// 365
```

- getCurrentDate = (timezone: string = 'UTC'): Gets the current date in the specified time zone.

```typescript
const now = getCurrentDate('America/Asuncion')
console.log(now)
// 2023-10-23T22:14:49.876Z
```

- timeTransform = (date: Date, timeDelta: ITimeDelta): Performs addition or subtraction operations on a date according to the provided options.

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
const transform = timeTransform(now, options)
console.log(transform)
// 2022-09-25T00:26:06.078Z
```

- dateTimeFormat = (date: Date, template: string, language: string = 'en-EN'): Formats the date according to the specified template and language.

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "Today is %DAY%, %MONTH% %DD%rd of the year %YYYY%, the time is %H%:%MI% %A%"
const format = dateTimeFormat(now, template, 'es-EN')
console.log(format)
// Today is Monday, October 23rd of the year 2023, the time is 10:20 PM.
```

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "Today is %DAY%, %MONTH% %DD%rd of the year %YYYY%, the time is %HH%:%MI%:%SS% with %MS% milliseconds"
const format = dateTimeFormat(now, template, 'es-EN')
console.log(format)
// Today is Monday, October 23rd of the year 2023, the time is 22:20:20 with 345 milliseconds.
```

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "%DD%/%MM%/%YYYY% %HH%:%MI%"
const format = dateTimeFormat(now, template)
console.log(format)
// 23/10/2023 22:20
// %HH% 23h format
```

```typescript
const now = getCurrentDate('America/Asuncion')
const template = "%DD%/%MM%/%YYYY% %H%:%MI% %A%"
const format = dateTimeFormat(now, template)
console.log(format)
// 23/10/2023 10:20 PM
// %H% 12h format
```

- const isLeapYear = (yearInterface: YearInterface): checks if a given year (after 1582) is a leap year according to the Gregorian calendar.

```typescript
type YearInterface = number | string
```

```typescript
const leapYear = isLeapYear(2024)
console.log(leapYear)
// true
```
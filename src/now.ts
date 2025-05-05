const getCurrentDate = (
    timezone: string = "UTC",
    offset: string = "+0"
): Date => {
    const now = new Date();

    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
    };

    const formattedDate = new Intl.DateTimeFormat(
        "en-US",
        options
    ).formatToParts();
    const { year, month, day, hour, minute, second } = Object.fromEntries(
        formattedDate.map((part) => [part.type, part.value])
    );

    const milliseconds = now.getMilliseconds();
    const millisecondsString = milliseconds.toString().padStart(3, "0");

    const dateString = `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecondsString}Z`;
    const baseDate = new Date(dateString);

    //Parse offset ("+1000", "-2000", "1h", "30m", "45s")
    const regex = /^([+-]?)(\d+)(ms|s|m|h)?$/;
    const match = offset.match(regex);

    let offsetMs = 0;
    if (match) {
        const [, sign, valueStr, unit = "ms"] = match;
        const value = parseInt(valueStr, 10);
        const multiplier =
            unit === "h"
                ? 3600000
                : unit === "m"
                ? 60000
                : unit === "s"
                ? 1000
                : 1;
        offsetMs = value * multiplier;
        if (sign === "-") offsetMs *= -1;
    }

    return new Date(baseDate.getTime() + offsetMs);
};

export { getCurrentDate };

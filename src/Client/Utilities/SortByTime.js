const parseTime = (timeStr) => {

    const [time, unit] = timeStr.split(" ");
    const value = parseInt(time);

    switch (unit.toLowerCase()) {
        case "second":
        case "seconds":
            return value / 60; 
        case "minute":
        case "minutes":
            return value; 
        case "hour":
        case "hours":
            return value * 60;
        case "day":
        case "days":
            return value * 1440; 
        case "week":
        case "weeks":
            return value * 10080; 
        case "month":
        case "months":
            return value * 43829; 
        case "year":
        case "years":
            return value * 525949; 
        default:
            throw new Error(`Invalid time unit in "${timeStr}"`);
    }
};

export const sortByTime = (arr) => {
    return arr.sort((a, b) => parseTime(a.time) - parseTime(b.time));
};

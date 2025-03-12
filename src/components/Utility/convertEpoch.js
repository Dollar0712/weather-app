
const convertEpochToDateTime = (tz_id, epoch) => {
    const date = new Date(epoch * 1000); // Convert epoch to milliseconds
    const options = { timeZone: tz_id, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);

    const dateTime = {};
    parts.forEach(({ type, value }) => {
        if (type !== 'literal') {
            dateTime[type] = value;
        }
    });

    return {
        year: dateTime.year,
        month: dateTime.month,
        day: dateTime.day,
        hour: dateTime.hour,
        minute: dateTime.minute,
        weekday: dateTime.weekday
    };
};

export default convertEpochToDateTime;
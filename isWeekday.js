function isWeekday(day) {
    var weekendDays = ['Saturday', 'Sunday'];

    return !weekendDays.includes(day);
}
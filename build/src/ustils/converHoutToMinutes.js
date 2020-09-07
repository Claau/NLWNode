"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function converHourToMinutes(time) {
    const [hour, minutes] = time.split(':').map(Number);
    const timeMinutes = hour * 60 + minutes;
    return timeMinutes;
}
exports.default = converHourToMinutes;

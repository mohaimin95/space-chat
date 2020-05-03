
export function getStandardTime(date:Date):String {
    let hours = date.getHours();
    let meridien = hours < 12 ? 'AM' : 'PM';
    let twelveHourFormat = (hours===0) ? 12 : (hours > 12 ? (hours - 12) : hours);
    let minutes = date.getMinutes();
    return `${getTwoFigure(twelveHourFormat)}:${getTwoFigure(minutes)} ${meridien}`;
}
export function getStandardDate(date:Date) {
    let months:String[] = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
export function getTwoFigure(str:any) {
    str = String(str);
    if(str.length === 1) str = "0" + str;
    return str; 
}
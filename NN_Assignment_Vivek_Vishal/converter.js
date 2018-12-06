/**
 * @file
 * @description This  module converts given date time to english readable format .
 * sequence of functions --> bottom to top.
 * main method name --> dateToTimeString.
 * short idea description : 
 *      Divide problem into 2 parts -display special time strings eg. quarter past two & regular ones - two past two.
 *      Use simple and small methods to achieve the goal.
 *      Pick the special time strings from array of objects using minute values (used array.find()) - form the final string.
 *      Pick the non special - time strings(minutes & hours) from array of strings using index values.
 * 
 *Exported the function dateToTimeString as module and hooked to clock.html (simple page to display current time)
 *time on screen refreshes every 20 seconds.
 *
 * Handled cases where input could be null/empty and wrong date formats.
 * 
 */

const minutesArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
                    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", 
                     "eighteen", "nineteen", "twenty", "twenty one", "twenty two" , "twenty three",
                     "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", 
                     "twenty nine"];
                   
const hoursArray = ["twelve","one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
                    "ten", "eleven", "twelve"];

const specialValues = [
    {value:0, string:'o\'clock'},
    {value:15, string:'quarter past'},
    {value:30, string:'half past'},
    {value:45, string:'quarter to'},
    {value:59, string:'a minute to'},
    {value:1, string:'a minute past'}
];  



/**
 * @method
 * @name getHoursInString
 * @memberof getStringForNonspecialValues
 * @description Returns hours in string format.Adds plus one if minutes are greater than 30.
 * subtracts from hour if hour goes beyond 12 (13..24) - keeping hours to 1 to 12 in string only.
 * Looks up the subtracted or actual hour from hour Array index.
 * Value of hour is always equivalent to exactly one index values in array 
 * @param {Number} hour hour count from the clock
 * @param {Number} min  minute count from the clock
 * @returns {string} returns the hour count in string format (value range one... twelve)
 */
const getHoursInString = (hour, min) =>{
    hour = min>30 ? hour+1: hour;
    return hoursArray[hour>=12? hour-12 :hour];
}

/**
 * @method
 * @name getStringForspecialValues
 * @description Returns time in quadrant special formats for given inputs 
 * can work as individual reusable code as well (with required inputs used).
 * @param {string} specialValue special time sayings eg. quarter to, o'clock 
 * @param {Number} hours hour count from the clock values {1..24}
 * @param {Number} minutes minute count from the clock -values {0,15,30,45,1,59}
 * @return {string} time in hours and minutes in english for special time inputs
 */
const getStringForspecialValues = (specialValue, hours, minutes) => {
        let hoursInString;
        hoursInString = getHoursInString(hours, minutes);
        return minutes == 0 ? hoursInString + " " + specialValue : specialValue + " " + hoursInString;
}

/**
 * @method
 * @name getStringForNonspecialValues
 * @description method to get the time in english for special cases .
 * eg. quarter past ten . from array of object with property minute, and string.
 * @param {Number} hours hour count from the clock - values {1..24}
 * @param {Number} minutes minute count from the clock -values except {0,15,30,45}
 * @returns {string} time in hours and minutes in english for non specfic time inputs
 */
const getStringForNonspecialValues = (hours, minutes) =>{
    let minutesinString, hoursInString, timeInString;
    try{
        if(minutes<30){
            minutesinString = minutesArray[minutes -1];
            hoursInString = getHoursInString(hours, minutes);
            timeInString=  minutesinString + " past " + hoursInString;  
         }
         else if(minutes>30) {
            minutesinString = minutesArray[60 - minutes - 1];
            hoursInString = getHoursInString(hours, minutes);
            timeInString=  minutesinString + " to " + hoursInString;  
         }
         else{
             throw "There was some problem with time conversion !";
         }
    }
    catch(err){
        timeInString=  err;
    }
    return timeInString;   
}
/**
 * @method
 * @name validateInput
 * @description This method checks if date input is correct and returns boolean response.
 * Its response is used in callback method to throw a simple exception msg.
 * @param {Date} d dateInput 
 * @returns{boolean}  true or false
 */
const validateInput = (d) => {
    if(isNaN(d.getTime()) || isNaN(d.getHours()) ||  isNaN(d.getMinutes())) return false;
     else return true;
}


/**
 * @module
 * @name dateToTimeString
 * @description main method of the module | exported as module | Reusable | covered with test scripts 
 * function that takes input as date and time in format new Date(2018,2,2,2,15) and returns 
 * time of hours & minutes in string format.
 * 
 * To avoid complexity and to improve readability method is broken into multiple smaller methods.
 * 
 * Internally this method makes use of two functions to determine time formats (special values (eg, quarter past ten) && 
 * non special values (eg. fourteen past two, twenty seven to three)).
 * 
 * It identifies first, if time has a specific format it looks into the specialValues array , finds the object to  
 * find the string format and uses it determine the time format using method - getStringForspecialValues.
 * 
 * secondary statement directly uses method - getStringForNonspecialValues to get the  time in string 
 * format.
 * 
 * Hours in string is retrieved internally using method - getHoursInString from hoursArray array using the hour 
 * count as index , and subtracting from 12 if greater than 12.
 * 
 * similar to hours,  minutes in string is retreived internally and finding the right value using index of minutesArray array  
 * @param {Date} dateTime date and time in format new Date(year,month, day, hour, minute)
 * @returns {string} time  converted in string  format eg. half past three
 * 
 */
 export const dateToTimeString = (dateTime) =>{
     let timeInString;
     if (!dateTime) dateTime = new Date();
try{
        if(validateInput(dateTime)){
            let hours = dateTime.getHours();
            let minutes = dateTime.getMinutes();
                     
            let specialValue = specialValues.find(obj => obj.value === minutes);  
            
            if(specialValue){
                timeInString = getStringForspecialValues(specialValue.string,  hours, minutes);
            }
            else{
                    timeInString = getStringForNonspecialValues(hours, minutes);
            }
        }
        else{
            throw "Fatal Error : Incorrect date time inputs [code 400]";
        }    
    }
    catch(err){
        timeInString = err; 
    }
    return timeInString ;
    }



    
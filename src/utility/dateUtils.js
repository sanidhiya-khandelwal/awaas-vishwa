export const itemDateFormatter = (rawDate) => {
    var parsedDatetime = new Date(rawDate);//yha p date set ho rhi h aka date object ...parse ISO 8601 string 

    //current date
    const currentDate = new Date;

    //calculate time difference in milliseconds
    const timeDifference = currentDate - parsedDatetime;
    //convert milliseconds to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    //integer value of days difference
    const daysDiffInt = Math.floor(daysDifference);
    // console.log(daysDiffInt);

    if (daysDiffInt < 1) {
        return 'TODAY';
    }
    else if (daysDiffInt == 1) {
        return 'YESTERDAY';
    }
    else if (daysDiffInt <= 7) {
        return daysDiffInt + ' DAYS AGO'
    } else {
        const options = { day: 'numeric', month: 'long' };  //formay the date in "date month" format
        return parsedDatetime.toLocaleDateString('en-US', options)//convert the date

    }

}
export const currentDate = () => {
    return new Date();
}
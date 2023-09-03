export const numberToCommaString = (number) => {
    //convert number to a string
    const numberString = number.toString();
    //use regular expressions to add commas every 3 digits from the end
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return formattedNumber;
}
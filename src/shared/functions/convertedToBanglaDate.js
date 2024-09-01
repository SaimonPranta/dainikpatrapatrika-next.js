function convertToBengaliNumerals(number) {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().replace(/\d/g, digit => bengaliDigits[digit]);
}

const convertedToBanglaDate = (dateString) => {
    const date = new Date(dateString) || new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formattedDate = new Intl.DateTimeFormat('bn-BD', options).format(date);
    const parts = formattedDate.split(',');

    const dateParts = parts[0].split(' ');
    const convertedDate = dateParts.map(part => {
        if (!isNaN(part)) {
            return convertToBengaliNumerals(part);
        }
        return part;
    }).join(' ');

    return convertedDate + ', ' + parts[1].trim();


     
}



export default convertedToBanglaDate;
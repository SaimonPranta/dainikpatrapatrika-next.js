// Function to convert a number to Bengali digits
function toBengaliNumber(num) {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => bengaliDigits[digit]).join('');
}

// Function to get the day name in Bengali
function getBengaliDayName(dayIndex) {
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    return days[dayIndex];
}

// Function to get the Bengali month name
function getBengaliMonthName(monthIndex) {
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    return months[monthIndex];
}

// Function to get the Bengali date
function getBengaliDate() {
    const now = new Date();
    
    // English to Bengali mapping for specific month
    const monthNames = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const dayNames = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];

    const dayName = dayNames[now.getDay()];
    const day = toBengaliNumber(now.getDate());
    const monthName = getBengaliMonthName(now.getMonth());
    const year = toBengaliNumber(now.getFullYear());

    // Example: "শনিবার, ২রা মার্চ ২০২৪"
    return `${dayName}, ${day}রা ${monthName} ${year}`;
}

export default getBengaliDate;

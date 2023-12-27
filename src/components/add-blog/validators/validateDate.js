export function validateDate(date) {
    const currentDate = new Date();
    date = new Date(date);
    if(date.getFullYear() === new Date().getFullYear() && 
        date.getMonth() === new Date().getMonth() && 
        date.getDate() === new Date().getDate()){
        return true;
    }

    if (date >= currentDate) {
        return true;
    }
    return false;
}
export const PIZZA_API = 'https://react-fast-pizza-api.onrender.com/api'

export function formatDeliveryDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    const minutes = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();

    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();

    return `${month} ${day}, ${hours}:${minutes} ${ampm}`;
}

export const capitalizeIngredients = (words) => {
    return words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
}
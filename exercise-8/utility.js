import { calculateAge } from './math.js';

const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

export { yearUntilRetirement, makeAjaxRequest };

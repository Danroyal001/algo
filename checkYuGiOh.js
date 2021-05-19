/**
 * This function (named "checkYuGiOh") takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.
 * 
 * Note:
 * - for numbers that have multiple factors, use hyphens as separators
 * e.g 10 === "yu-oh", 30 === "yu-gi-oh"
 * - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
 * @param {number} n Number of items in te array to be created
 * @returns {(string|number)[]} An array of strings and numbers
 */
const checkYuGiOh = (n) => {

    const replace2 = 'yu';
    const replace3 = 'gi';
    const replace5 = 'oh';

    try {

        if (Number.isNaN(n) && !(('string' == typeof n) && /\d+/.test(n))) {
            n = new Number(n.toString().trim());

            if (Number.isNaN(n)) throw new Error('Could not be converted to a number');
        } else if (('string' == typeof n) && /\d+/.test(n)) {
            n = parseInt(n);
        } else if (Number.isNaN(n) && !('string' == typeof n) && /\d+/.test(n)) {
            throw new Error('Could not be converted to a number');
        }

        if (n > 0) {

            /**
             * An array of numbers from  to n
             * @type {Array<string|number>}
             */
            const arr = [];

            (new Array(n)).forEach((_, index) => {

                arr.push(index + 1);

            });

            arr.forEach((item, index) => {

                /**
                 * A temporary array of strings for formng the sequence e.g 'yu-gi-oh'
                 * ```
                 * Todo: Find an optimied solution, creating a new array on each iteration wil hamper performnce ny a couple of miliseconds
                 * ```
                 * @type {string[]}
                 */
                const tempArr = [];

                if (!Number.isNaN(item)) {

                    if (n % 2 == 0) {
                        tempArr.push(replace2);
                    }

                    if (n % 3 == 0) {
                        tempArr.push(replace3);
                    }

                    if (n % 5 == 0) {
                        tempArr.push(replace5);
                    }

                    if (tempArr.length) {
                        const str = tempArr.join('-');
                        arr[index] = str;
                    }

                }

            });

            return arr;

        } else throw new Error('Number must be greater than 0');


    } catch (error) {
        const err = new Error(`${error}`);
        const errormessage = `invalid parameter: "${n}"`;

        console.error(err.message);

        return errormessage;
    }

}

console.log(checkYuGiOh('-1'));

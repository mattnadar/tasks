/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        // if length is zero (no elements), we return an empty array.
        return [];
    } else {
        // length greater than 0
        const newArr: number[] = [];
        newArr.push(numbers[0]);
        newArr.push(numbers[numbers.length - 1]);
        return newArr;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3); // triples each number, pretty explanatory
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((strNum: string): number => {
        const parsedNum = parseInt(strNum); // Try parsing the number
        return isNaN(parsedNum) ? 0 : parsedNum; // if we parse it and it isn't a number, it returns 0, if it is valid, we just return it.
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((dollar: string): number => {
        if (dollar.includes("$")) {
            // remove the dollar sign if it's there
            dollar = dollar.replace("$", "");
        }
        const parsedDollar = parseInt(dollar); // Try parsing the number
        return isNaN(parsedDollar) ? 0 : parsedDollar;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message: string): string => {
            // first we are handling if the string is ending in "!
            if (message.charAt(message.length - 1) === "!") {
                return message.toUpperCase();
            }
            return message;
        })
        .filter(
            // now filter if it ends in "?"
            (message: string): boolean =>
                message.charAt(message.length - 1) !== "?"
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return (
        colors.filter(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        ).length === colors.length
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        // edge case for empty array
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0); // using the reduce function as explained in the instructions
    const addendsString = addends.join("+"); // join with a "+" sign
    return `${sum}=${addendsString}`; // now make it in the format we want
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negIndex = values.findIndex((num) => num < 0); // finds first negative value
    if (negIndex === -1) {
        return [
            ...values,
            values.reduce((total: number, num: number) => total + num, 0)
        ];
    }
    const sum = values
        .slice(0, negIndex)
        .reduce((total: number, num: number) => total + num, 0); // sum from 0 to the first negative index
    return [
        ...values.slice(0, negIndex + 1),
        sum,
        ...values.slice(negIndex + 1)
    ];
}

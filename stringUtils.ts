// Function to reverse a string
export const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
};

// Function to count the number of characters in a string
export const countCharacters = (str: string): number => {
    return str.length;
};

// Function composition
export const compose = <T>(...fns: ((arg: T) => T)[]) => (arg: T) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);
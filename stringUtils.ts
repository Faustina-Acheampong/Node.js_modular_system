
export const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
};

//export const countCharacters = (str: string): number => {
    //return str.length;
//};

export const countCharacters = (str: string): number => {
    return str.replace(/\s/g, '').length;
}

// Function composition
export const compose = <T>(...fns: ((arg: T) => T)[]) => (arg: T) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);
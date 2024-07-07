

// Converts normal text to Kebab case
export const toKebabCase = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, '-');
};

export const toCamelCase = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, (_,match) => match.toUpperCase);
};

export const toCoolCase = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, (_,match) => match.toUpperCase).replace(/^\w/,(c) => c.toUpperCase());
};



// Reduces the size of a given text
export const shortenText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength) + '...';
    }
};

export const generateChildScape = (children: number): string => {
    const defaultChild = (index) => ` & > div:nth-child(${index + 2}) { transform: translateX(-${index + 1}rem); }`;
    const childrenArry = [...Array(children).keys()];

    return `${childrenArry.reduce((str, child) => str + defaultChild(child), '')}`;
};
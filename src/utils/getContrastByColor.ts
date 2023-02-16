export default function getContrastByColor(backgroundColor: string | undefined) {
    if (!backgroundColor) {
        return;
    };

    const color = (backgroundColor.charAt(0) === '#') ? backgroundColor.substring(1, 7) : backgroundColor;
    const R = parseInt(color.substring(0, 2), 16), // hexToR
        G = parseInt(color.substring(2, 4), 16), // hexToG
        B = parseInt(color.substring(4, 6), 16); // hexToB

    const RGB = [R / 255, G / 255, B / 255];
    const colorMap = RGB.map((color) => {
        if (color <= 0.03928) {
            return color / 12.92;
        };

        return Math.pow((color + 0.055) / 1.055, 2.4);
    });

    const L = (0.2126 * colorMap[0]) + (0.7152 * colorMap[1]) + (0.0722 * colorMap[2]);

    return (L > 0.3) ? "#000000" : "#FFFFFF";
};
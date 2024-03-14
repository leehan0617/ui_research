export const indexTableList = [
    { "start": 0, "end": 0.2, "index": 0, "basic": 0, "real": 0, "management": 0, "total": 0 },
    { "start": 0.2, "end": 0.3, "index": 1, "basic": 3.79, "real": 11.38, "management": 1.89, "total": 17.06 },
    { "start": 0.3, "end": 0.5, "index": 2, "basic": 3.07, "real": 9.19, "management": 1.53, "total": 13.79 },
    { "start": 0.5, "end": 1, "index": 3, "basic": 2.14, "real": 6.42, "management": 1.07, "total": 9.63 },
    { "start": 1, "end": 2, "index": 4, "basic": 2.01, "real": 6.01, "management": 1.00, "total": 9.02 },
    { "start": 2, "end": 3, "index": 5, "basic": 1.60, "real": 4.80, "management": 0.80, "total": 7.20 },
    { "start": 3, "end": 5, "index": 6, "basic": 1.46, "real": 4.38, "management": 0.73, "total": 6.57 },
    { "start": 5, "end": 10, "index": 7, "basic": 1.33, "real": 3.97, "management": 0.66, "total": 5.96 },
    { "start": 10, "end": 20, "index": 8, "basic": 1.17, "real": 3.51, "management": 0.58, "total": 5.26 },
    { "start": 20, "end": 30, "index": 9, "basic": 1.08, "real": 3.22, "management": 0.54, "total": 4.84 },
    { "start": 30, "end": 50, "index": 10, "basic": 1.04, "real": 3.11, "management": 0.52, "total": 4.67 },
    { "start": 50, "end": 100, "index": 11, "basic": 1.02, "real": 3.06, "management": 0.51, "total": 4.59 },
    { "start": 100, "end": 200, "index": 12, "basic": 0.99, "real": 2.98, "management": 0.49, "total": 4.46 },
    { "start": 200, "end": 300, "index": 13, "basic": 0.96, "real": 2.89, "management": 0.48, "total": 4.33 },
    { "start": 300, "end": 500, "index": 14, "basic": 0.95, "real": 2.87, "management": 0.47, "total": 4.29 },
    { "start": 5000, "end": 1000, "index": 15, "basic": 0.94, "real": 2.81, "management": 0.46, "total": 4.21 },
    { "start": 1000, "end": 2000, "index": 16, "basic": 0.92, "real": 2.77, "management": 0.45, "total": 4.14 },
    { "start": 2000, "end": 3000, "index": 17, "basic": 0.91, "real": 2.72, "management": 0.44, "total": 4.07 },
    { "start": 3000, "end": 5000, "index": 18, "basic": 0.90, "real": 2.67, "management": 0.43, "total": 4.00 },
    { "start": 5000, "end": 0, "index": 19, "basic": 0.89, "real": 2.64, "management": 0.42, "total": 3.95 },
];

export const findTable = cost => {
    if (cost === 0) return indexTableList[0];
    if (cost > 5000) return indexTableList[indexTableList.length - 1];
    const table = indexTableList.find(e => {
        const { start, end } = e;
        return start <= cost && cost < end;
    });
    return table;
};

export const findNextTable = index => {
    if (index === 19) return indexTableList[indexTableList.length - 1];
    return indexTableList[index+1];
};

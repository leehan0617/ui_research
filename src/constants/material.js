// DEPRECATED
// 자재산출로직 탭에서 사용하는 세부 자재 
export const high_cable = {
    name: "고압케이블",
    unit: "단위수량",
    unit_text: "(C-km/천m2)",
    unit_values: [0.023, 0.018, 0.013, 0.025],
    data: [
        {
            order: 1,
            name: "CU325",
            values: [8.20, 6.60, 6.00, 16.10],
        },
        {
            order: 2,
            name: "AL400",
            values: [34.30, 43.20, 53.60, 44.90]
        },
        {
            order: 3,
            name: "AL 95",
            values: [57.50, 50.20, 40.40, 39.00]
        }
    ]
}

export const low_cable = {
    name: "저압케이블",
    unit: "관로수량 연계",
    unit_text: "(C-km/천m2)",
    unit_values: [3.95, 3.95, 3.95, 3.95],
    data: [
        {
            order: 1,
            name: "CV 240mm x 3/120m x 1",
            values: [50, 50, 50, 50]
        },
        {
            order: 2,
            name: "CV 240mm x 3/75m x 1",
            values: [50, 50, 50, 50]
        }
    ]
}

export const ground_machine = {
    name: "지상기기",
    unit: "단위수량",
    unit_text: "(대/천m2)",
    unit_values: [0.050, 0.040, 0.030, 0.071],
    data: [
        {
            order: 1,
            name: "개폐기",
            values: [63.80, 51.80, 47.10, 68.00]
        },
        {
            order: 2,
            name: "변압기",
            values: [36.20, 48.20, 52.90, 32.00]
        }
    ]
}

export const transformer = {
    name: "변압기",
    unit: "단위수량",
    unit_text: "(대/천m2)",
    unit_values: ["상기 변압기 수량", "상기 변압기 수량", "상기 변압기 수량", "상기 변압기 수량"],
    data: [
        {
            order: 1,
            name: "75KVA",
            values: [30, 30, 30, 70]
        },
        {
            order: 2,
            name: "150KVA",
            values: [10, 10, 10, 10]
        },
        {
            order: 3,
            name: "300KVA",
            values: [60, 60, 60, 20]
        }
    ]
}

export const structure = {
    name: "구조물",
    unit: "단위수량",
    unit_text: "(조/천m2)",
    unit_values: [0.092, 0.146, 0.154, 0.158],
    data: [
        {
            order: 1,
            name: "맨홀",
            values: [46.40, 36.40, 28.50, 56.20]
        },
        {
            order: 2,
            name: "핸드홀",
            values: [38.80, 38.70, 43.70, 21.30]
        },
        {
            order: 3,
            name: "접속함",
            values: [14.80, 24.90, 27.80, 22.50]
        }
    ]
}

export const pipeline = {
    name: "관로",
    unit: "단위수량",
    unit_text: "km/천m2",
    unit_values: [0.060, 0.052, 0.043, 0.069],
    data: [
        {
            order: 1,
            name: "175mm",
            values: [41.80, 35.10, 31.50, 45.30]
        },
        {
            order: 2,
            name: "150mm",
            values: [24.80, 28.10, 27.20, 32.50]
        },
        {
            order: 3,
            name: "100mm",
            values: [33.40, 36.80, 41.30, 22.20]
        }
    ]
}

export const tube = {
    name: "파형관",
    unit: "단위수량",
    unit_text: "(km/천m2)",
    unit_values: [0.025, 0.018, 0.014, 0.031],
    data: [
        {
            order: 1,
            name: "175mm",
            values: [41.80, 35.10, 31.50, 45.30]
        }
    ]
}

export const tube_150 = {
    name: "파형관",
    unit: "단위수량",
    unit_text: "(km/천m2)",
    unit_values: [0.015, 0.015, 0.012, 0.022],
    data: [
        {
            order: 1,
            name: "150mm",
            values: [24.80, 28.10, 27.20, 32.50]
        }
    ]
}

export const tube_100 = {
    name: "파형관",
    unit: "단위수량",
    unit_text: "(km/천m2)",
    unit_values: [0.020, 0.019, 0.018, 0.015],
    data: [
        {
            order: 1,
            name: "100mm",
            values: [33.40, 36.80, 41.30, 22.20]
        }
    ]
}

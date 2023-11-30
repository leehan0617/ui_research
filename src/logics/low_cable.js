// 저압케이블
// parameter info:
// input_area: 대지면적
// voltage: 수요전력
// building_type: 단지유형
// density_number: 부하밀도(상,중,하) 상(0) 중(1) 하(2)

// 상,중,하,산업
const low_cable_unit_counts = [3.946, 3.946, 3.946, 3.946]
// density = 0, 1, 2 (상, 중, 하)
const get_unit_count = (building_type, density_number) => {
    if (building_type === "industry") return low_cable_unit_counts[3]
    return low_cable_unit_counts[density_number]
}

const cv_cable_240_120 = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.5, 0.5, 0.5, 0.5]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]

    const material_calculation = unit_count * weight

    const company_cost = 97088 * material_calculation
    const contract_cost = 42740 * material_calculation

    return [company_cost, contract_cost]
}

const cv_cable_120_70 = (input_area, voltage, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.5, 0.5, 0.5, 0.5]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]

    // 부하밀도가 하일경우 조건이 조금 붙는다.
    const material_calculation = voltage < 40000 && density_number == 2 ? 0 : unit_count * weight

    const company_cost = 50781 * material_calculation
    const contract_cost = 27799 * material_calculation

    return [company_cost, contract_cost]
}


// 고압케이블

// 상,중,하,산업
const high_cable_unit_counts = [0.023, 0.018, 0.013, 0.025]

// density = 0, 1, 2 (상, 중, 하)
const get_unit_count = (building_type, density_number) => {
    if (building_type === "industry") return high_cable_unit_counts[3]
    return high_cable_unit_counts[density_number]
}

// parameter: 대지면적(입력), 단지유형, 부하밀도(상,중,하)
// 부하밀도 상(0) 중(1) 하(2)
const cu_325 = (input_area, building_type, density_number) => {
    // 단위수량 * 대지면적(입력창) / 1000 * 비중
    // 예) 주택단지 고압케이블 하 일경우
    // 0.013 * 10000 / 1000 * 0.06 = 0.78 -> 여기까지가 자재산출
    // 개략공사비 (기준단가 조정후) * 0.78 = 회사분 공사비용
    // 개략공사비 (도급공사비 조정후) * 0.78 = 도급분 공사비용

    // 단위수량
    const unit_count = get_unit_count(building_type, density_number)
    
    // 비중 (상, 중, 하, 산업)
    const weights = [0.082, 0.066, 0.06, 0.161]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]

    // 자재 산출
    const material_calculation = unit_count * input_area / 1000 * weight

    // 개략공사비 회사분 = 기준단가(조정후) * 자재산출
    const company_cost = 234974 * material_calculation
    // 개략공사비 도급분 = 도급공사비(조정후) * 자재산출
    const contract_cost = 58810 * material_calculation

    return [company_cost, contract_cost]
}

const al_400 = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.343, 0.432, 0.536, 0.449]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * input_area / 1000 * weight
    const company_cost = 132329 * material_calculation
    const contract_cost = 58660 * material_calculation
    return [company_cost, contract_cost]
}

const al_95 = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.575, 0.502, 0.404, 0.39]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * input_area / 1000 * weight
    const company_cost = 45560 * material_calculation
    const contract_cost = 20802 * material_calculation
    return [company_cost, contract_cost]
}

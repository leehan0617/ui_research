// 변압기
// 지상기기 변압기 (이 함수의 결과값은 변압기의 단위수량으로 사용된다)
const ground_transformer = (input_area, building_type, density_number) => {
    const ground_machine_unit_counts = [0.05, 0.05, 0.03, 0.071]
    const unit_count = building_type === "industry" ? ground_machine_unit_counts[3] : ground_machine_unit_counts[density_number]
    const weights = [0.362, 0.482, 0.529, 0.32]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]

    const material_calculation = unit_count * input_area / 1000 * weight
    return material_calculation
}

const kva_75 = (input_area, building_type, density_number) => {
    const unit_count = ground_transformer(input_area, building_type, density_number)

    const weights = [0.3, 0.3, 0.3, 0.7]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]

    const material_calculation = unit_count * weight
    const company_cost = 7573 * material_calculation
    const contract_cost = 1169 * material_calculation

    return [company_cost, contract_cost]
}

const kva_150 = (input_area, building_type, density_number) => {
    const unit_count = ground_transformer(input_area, building_type, density_number)
    const weights = [0.1, 0.1, 0.1, 0.1]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * weight
    const company_cost = 8755 * material_calculation
    const contract_cost = 1336 * material_calculation
    return [company_cost, contract_cost]
}

const kva_300 = (input_area, building_type, density_number) => {
    const unit_count = ground_transformer(input_area, building_type, density_number)
    const weights = [0.6, 0.6, 0.6, 0.2]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * weight
    const company_cost = 10635 * material_calculation
    const contract_cost = 1360 * material_calculation
    return [company_cost, contract_cost]
}


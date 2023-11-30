// 지상 기기
const ground_machine_unit_counts = [0.05, 0.05, 0.03, 0.071]

const get_unit_count = (building_type, density_number) => {
    if (building_type === "industry") return ground_machine_unit_counts[3]
    return ground_machine_unit_counts[density_number]
}

// 개폐기
const ground_switch = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)

    const weights = [0.638, 0.518, 0.471, 0.68]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]

    const material_calculation = unit_count * input_area / 1000 * weight

    const company_cost = (23479 + 360) * material_calculation
    const contract_cost = (1230 + 1082) * material_calculation

    return [company_cost, contract_cost]
}

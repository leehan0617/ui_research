// 구조물, 맨홀
const structure_unit_counts = [0.092, 0.146, 0.154, 0.158]

const get_unit_count = (building_type, density_number) => {
    if (building_type === "industry") return structure_unit_counts[3]
    return structure_unit_counts[density_number]
}


// density_number가 상중하가 아닌 대,중,소 규모로 나눈다. 
// 이 함수는 다른곳의 단위수량 구하는 함수로 사용된다. (직접사용 X)
const hole = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)

    const weights = [0.464, 0.364, 0.285, 0.562]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]

    const material_calculation = unit_count * input_area / 1000 * weight
    
    return material_calculation
}

const hand_hole = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.388, 0.387, 0.437, 0.213]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * input_area / 1000 * weight

    const company_cost = 3062 * material_calculation
    const contract_cost = 2448 * material_calculation

    return [company_cost, contract_cost]
}

const connect_box = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.148, 0.249, 0.278, 0.225]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * input_area / 1000 * weight
    const company_cost = 337 * material_calculation
    const contract_cost = 717 * material_calculation

    return [company_cost, contract_cost]
}

const man_hole_ma4 = (input_area, building_type, density_number) => {
    const unit_count = hole(input_area, building_type, density_number)
    const material_calculation = building_type === "industry" ? unit_count * 0.192 / (0.417 + 0.297 + 0.192) : unit_count * 0.194 / (0.37 + 0.278 + 0.194)
    const company_cost = 5701 * material_calculation
    const contract_cost = 3785 * material_calculation
    
    return [company_cost, contract_cost]
}
const man_hole_ma6 = (input_area, building_type, density_number) => {
    const unit_count = hole(input_area, building_type, density_number)
    const material_calculation = building_type === "industry" ? unit_count * 0.297 / (0.417 + 0.297 + 0.192) : unit_count * 0.278 / (0.37 + 0.278 + 0.194)
    const company_cost = 6072 * material_calculation
    const contract_cost = 3978 * material_calculation
    
    return [company_cost, contract_cost]
}

const man_hole_me6 = (input_area, building_type, density_number) => {
    const unit_count = hole(input_area, building_type, density_number)
    const material_calculation = building_type === "industry" ? unit_count * 0.417 / (0.417 + 0.297 + 0.192) : unit_count * 0.37 / (0.37 + 0.278 + 0.194)
    const company_cost = 11187 * material_calculation
    const contract_cost = 6257 * material_calculation
    
    return [company_cost, contract_cost]
}
// 관로
const pipeline_unit_counts = [0.06, 0.052, 0.043, 0.069]

const get_unit_count = (building_type, density_number) => {
    if (building_type === "industry") return pipeline_unit_counts[3]
    return pipeline_unit_counts[density_number]
}

const pipeline_175 = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.418, 0.351, 0.315, 0.453]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * input_area / 1000 * weight
    return material_calculation
}
const pipeline_150 = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.248, 0.281, 0.272, 0.325]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * input_area / 1000 * weight
    return material_calculation
}
const pipeline_100 = (input_area, building_type, density_number) => {
    const unit_count = get_unit_count(building_type, density_number)
    const weights = [0.334, 0.368, 0.413, 0.222]
    const weight = building_type === "industry" ? weights[3] : weights[density_number]
    const material_calculation = unit_count * input_area / 1000 * weight
    return material_calculation
}

// 175mm + 150mm + 100mm 를 더한값
const pipeline_3x3 = (input_area, building_type, density_number) => {
    const weights = building_type === "industry" ? [0.241, 0.129, 0.047] : [0.185, 0.106, 0.079]
    const weights_sum = building_type === "industry" ? [0.441, 0.324, 0.235] : [0.34, 0.265, 0.395]
    const pipe_175 = pipeline_175(input_area, building_type, density_number) * weights[0] / weights_sum[0]
    const pipe_150 = pipeline_150(input_area, building_type, density_number) * weights[1] / weights_sum[1]
    const pipe_100 = pipeline_100(input_area, building_type, density_number) * weights[2] / weights_sum[2]

    const pipe_result = (pipe_175 + pipe_150 + pipe_100) / 9
    const company_cost = 79276 * pipe_result
    const contract_cost = 191435 * pipe_result
    return [company_cost, contract_cost]
}
const pipeline_3x2 = (input_area, building_type, density_number) => {
    const weights = building_type === "industry" ? [0.12, 0.13, 0.047] : [0.093, 0.106, 0.079]
    const weights_sum = building_type === "industry" ? [0.441, 0.324, 0.235] : [0.34, 0.265, 0.395]
    const pipe_175 = pipeline_175(input_area, building_type, density_number) * weights[0] / weights_sum[0]
    const pipe_150 = pipeline_150(input_area, building_type, density_number) * weights[1] / weights_sum[1]
    const pipe_100 = pipeline_100(input_area, building_type, density_number) * weights[2] / weights_sum[2]
    const pipe_result = (pipe_175 + pipe_150 + pipe_100) / 6
    
    const company_cost = 50295 * pipe_result
    const contract_cost = 136653 * pipe_result
    return [company_cost, contract_cost]
}
const pipeline_2x2 = (input_area, building_type, density_number) => {
    const weights = building_type === "industry" ? [0.08, 0.065, 0.047] : [0.062, 0.053, 0.079]
    const weights_sum = building_type === "industry" ? [0.441, 0.324, 0.235] : [0.34, 0.265, 0.395]
    const pipe_175 = pipeline_175(input_area, building_type, density_number) * weights[0] / weights_sum[0]
    const pipe_150 = pipeline_150(input_area, building_type, density_number) * weights[1] / weights_sum[1]
    const pipe_100 = pipeline_100(input_area, building_type, density_number) * weights[2] / weights_sum[2]
    const pipe_result = (pipe_175 + pipe_150 + pipe_100) / 4

    const company_cost = 32754 * pipe_result
    const contract_cost = 138213 * pipe_result
    return [company_cost, contract_cost]
}
const pipeline_2x1 = (input_area, building_type, density_number) => {
    const weight = building_type === "industry" ? 0.094 : 0.158
    const weight_sum = building_type === "industry" ? 0.235 : 0.395
    const pipe_100 = pipeline_100(input_area, building_type, density_number) * weight / weight_sum
    const pipe_result = pipe_100 / 2
    const company_cost = 6698 * pipe_result
    const contract_cost = 40607 * pipe_result
    return [company_cost, contract_cost]
}
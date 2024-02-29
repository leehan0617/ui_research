export default function DetailMaterialTab() {
    return <>
        <div className="col-span-12 text-center text-2xl bg-yellow-100 p-2">
            <b>주택단지 세부자재별 비중</b>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-sky-100">
                    <tr>
                        <th className="border border-slate-600"></th>
                        <th colSpan={5} className="border border-slate-600">맨홀</th>
                        <th colSpan={4} className="border border-slate-600">핸드홀</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">MA4</td>
                        <td className="border border-slate-600">ME6</td>
                        <td className="border border-slate-600">MA6</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">HB4+HB2</td>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">계</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.021</td>
                        <td className="border border-slate-600">89%</td>
                        <td className="border border-slate-600">9%</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">98%</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.041</td>
                        <td className="border border-slate-600">72%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">11%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.026</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.029</td>
                        <td className="border border-slate-600">76%</td>
                        <td className="border border-slate-600">16%</td>
                        <td className="border border-slate-600">8%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.058</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.068</td>
                        <td className="border border-slate-600">84%</td>
                        <td className="border border-slate-600">13%</td>
                        <td className="border border-slate-600">3%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.069</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.052</td>
                        <td className="border border-slate-600">87%</td>
                        <td className="border border-slate-600">6%</td>
                        <td className="border border-slate-600">7%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.044</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모6</td>
                        <td className="border border-slate-600">0.037</td>
                        <td className="border border-slate-600">87%</td>
                        <td className="border border-slate-600">6%</td>
                        <td className="border border-slate-600">7%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">95%</td>
                        <td className="border border-slate-600">5%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모7</td>
                        <td className="border border-slate-600">0.096</td>
                        <td className="border border-slate-600">56%</td>
                        <td className="border border-slate-600">28%</td>
                        <td className="border border-slate-600">16%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.13</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모8</td>
                        <td className="border border-slate-600">0.078</td>
                        <td className="border border-slate-600">71%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">12%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.012</td>
                        <td className="border border-slate-600">88%</td>
                        <td className="border border-slate-600">12%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-sky-100">
                    <tr>
                        <th className="border border-slate-600"></th>
                        <th colSpan={5} className="border border-slate-600">관로</th>
                        <th colSpan={5} className="border border-slate-600">고압케이블</th>
                        <th colSpan={5} className="border border-slate-600">저압케이블</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">175mm</td>
                        <td className="border border-slate-600">150mm</td>
                        <td className="border border-slate-600">100mm</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">325mm2</td>
                        <td className="border border-slate-600">400mm2</td>
                        <td className="border border-slate-600">95mm2</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">240mm2</td>
                        <td className="border border-slate-600">120mm2</td>
                        <td className="border border-slate-600">70mm2</td>
                        <td className="border border-slate-600">계</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.048</td>
                        <td className="border border-slate-600">30%</td>
                        <td className="border border-slate-600">28%</td>
                        <td className="border border-slate-600">42%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.045</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">53%</td>
                        <td className="border border-slate-600">45%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.014</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.042</td>
                        <td className="border border-slate-600">45%</td>
                        <td className="border border-slate-600">19%</td>
                        <td className="border border-slate-600">36%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.037</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">53%</td>
                        <td className="border border-slate-600">45%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.048</td>
                        <td className="border border-slate-600">47%</td>
                        <td className="border border-slate-600">21%</td>
                        <td className="border border-slate-600">32%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">53%</td>
                        <td className="border border-slate-600">45%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.01</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.056</td>
                        <td className="border border-slate-600">54%</td>
                        <td className="border border-slate-600">15%</td>
                        <td className="border border-slate-600">31%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.065</td>
                        <td className="border border-slate-600">3%</td>
                        <td className="border border-slate-600">50%</td>
                        <td className="border border-slate-600">47%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.018</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.050</td>
                        <td className="border border-slate-600">55%</td>
                        <td className="border border-slate-600">21%</td>
                        <td className="border border-slate-600">24%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.058</td>
                        <td className="border border-slate-600">10%</td>
                        <td className="border border-slate-600">44%</td>
                        <td className="border border-slate-600">46%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.013</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모6</td>
                        <td className="border border-slate-600">0.045</td>
                        <td className="border border-slate-600">43%</td>
                        <td className="border border-slate-600">28%</td>
                        <td className="border border-slate-600">29%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.061</td>
                        <td className="border border-slate-600">8%</td>
                        <td className="border border-slate-600">55%</td>
                        <td className="border border-slate-600">37%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.012</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모7</td>
                        <td className="border border-slate-600">0.103</td>
                        <td className="border border-slate-600">44%</td>
                        <td className="border border-slate-600">35%</td>
                        <td className="border border-slate-600">21%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.088</td>
                        <td className="border border-slate-600">22%</td>
                        <td className="border border-slate-600">42%</td>
                        <td className="border border-slate-600">36%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.036</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모8</td>
                        <td className="border border-slate-600">0.071</td>
                        <td className="border border-slate-600">56%</td>
                        <td className="border border-slate-600">24%</td>
                        <td className="border border-slate-600">20%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.078</td>
                        <td className="border border-slate-600">1%</td>
                        <td className="border border-slate-600">79%</td>
                        <td className="border border-slate-600">20%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.007</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-sky-100">
                    <tr>
                        <th className="border border-slate-600"></th>
                        <th colSpan={4} className="border border-slate-600">저압접속함</th>
                        <th colSpan={5} className="border border-slate-600">지상변압기</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">JBL</td>
                        <td className="border border-slate-600">JBS</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">75kVA</td>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">계</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.037</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.021</td>
                        <td className="border border-slate-600">3%</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">95%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.019</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">9%</td>
                        <td className="border border-slate-600">6%</td>
                        <td className="border border-slate-600">85%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.006</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.012</td>
                        <td className="border border-slate-600">21%</td>
                        <td className="border border-slate-600">1%</td>
                        <td className="border border-slate-600">78%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.035</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.029</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">4%</td>
                        <td className="border border-slate-600">94%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.030</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.022</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">4%</td>
                        <td className="border border-slate-600">94%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모6</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.017</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">4%</td>
                        <td className="border border-slate-600">94%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모7</td>
                        <td className="border border-slate-600">0.121</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.025</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">4%</td>
                        <td className="border border-slate-600">94%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모8</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.02</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">4%</td>
                        <td className="border border-slate-600">94%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div className="col-span-12 text-center text-2xl bg-yellow-100 p-2 mt-3">
            <b>산업단지 세부자재별 비중</b>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-sky-100">
                    <tr>
                        <th className="border border-slate-600"></th>
                        <th colSpan={5} className="border border-slate-600">맨홀</th>
                        <th colSpan={4} className="border border-slate-600">핸드홀</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">MA4</td>
                        <td className="border border-slate-600">ME6</td>
                        <td className="border border-slate-600">MA6</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">HB4+HB2</td>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">계</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.023</td>
                        <td className="border border-slate-600">72%</td>
                        <td className="border border-slate-600">11%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.028</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.025</td>
                        <td className="border border-slate-600">91%</td>
                        <td className="border border-slate-600">4%</td>
                        <td className="border border-slate-600">5%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.004</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.033</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">35%</td>
                        <td className="border border-slate-600">40%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.048</td>
                        <td className="border border-slate-600">66%</td>
                        <td className="border border-slate-600">11%</td>
                        <td className="border border-slate-600">23%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.011</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.047</td>
                        <td className="border border-slate-600">16%</td>
                        <td className="border border-slate-600">37%</td>
                        <td className="border border-slate-600">47%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.021</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-sky-100">
                    <tr>
                        <th className="border border-slate-600"></th>
                        <th colSpan={5} className="border border-slate-600">관로</th>
                        <th colSpan={5} className="border border-slate-600">고압케이블</th>
                        <th colSpan={5} className="border border-slate-600">저압케이블</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">175mm</td>
                        <td className="border border-slate-600">150mm</td>
                        <td className="border border-slate-600">100mm</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">325mm2</td>
                        <td className="border border-slate-600">400mm2</td>
                        <td className="border border-slate-600">95mm2</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">240mm2</td>
                        <td className="border border-slate-600">120mm2</td>
                        <td className="border border-slate-600">70mm2</td>
                        <td className="border border-slate-600">계</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.026</td>
                        <td className="border border-slate-600">57%</td>
                        <td className="border border-slate-600">23%</td>
                        <td className="border border-slate-600">20%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.039</td>
                        <td className="border border-slate-600">4%</td>
                        <td className="border border-slate-600">58%</td>
                        <td className="border border-slate-600">38%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.015</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.029</td>
                        <td className="border border-slate-600">40%</td>
                        <td className="border border-slate-600">35%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.027</td>
                        <td className="border border-slate-600">1%</td>
                        <td className="border border-slate-600">59%</td>
                        <td className="border border-slate-600">40%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.005</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.046</td>
                        <td className="border border-slate-600">49%</td>
                        <td className="border border-slate-600">20%</td>
                        <td className="border border-slate-600">31%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.041</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">61%</td>
                        <td className="border border-slate-600">37%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.007</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.047</td>
                        <td className="border border-slate-600">39%</td>
                        <td className="border border-slate-600">13%</td>
                        <td className="border border-slate-600">48%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.053</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">57%</td>
                        <td className="border border-slate-600">41%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.011</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.065</td>
                        <td className="border border-slate-600">55%</td>
                        <td className="border border-slate-600">10%</td>
                        <td className="border border-slate-600">35%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.077</td>
                        <td className="border border-slate-600">10%</td>
                        <td className="border border-slate-600">74%</td>
                        <td className="border border-slate-600">16%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">75%</td>
                        <td className="border border-slate-600">25%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-sky-100">
                    <tr>
                        <th className="border border-slate-600"></th>
                        <th colSpan={4} className="border border-slate-600">저압접속함</th>
                        <th colSpan={5} className="border border-slate-600">지상변압기</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">JBL</td>
                        <td className="border border-slate-600">JBS</td>
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">단위수량</td>
                        <td className="border border-slate-600">75kVA</td>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">계</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.012</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">81%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.020</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">81%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">81%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.022</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">81%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.022</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0%</td>
                        <td className="border border-slate-600">100%</td>
                        <td className="border border-slate-600">0.02</td>
                        <td className="border border-slate-600">2%</td>
                        <td className="border border-slate-600">17%</td>
                        <td className="border border-slate-600">81%</td>
                        <td className="border border-slate-600">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};

export default function MainMaterialTab() {
    return <>
        <div className="col-span-12 text-center text-2xl bg-yellow-100 p-2">
            <b>부하밀도 기반 규모별 주자재 단위 수량</b>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-blue-100">
                    <th className="border border-slate-600">주택단지</th>
                    <th className="border border-slate-600">맨홀<br/>(조/천m2)</th>
                    <th className="border border-slate-600">핸드홀<br/>(조/천m2)</th>
                    <th className="border border-slate-600">관로<br/>(km/천m2)</th>
                    <th className="border border-slate-600">고압케이블<br/>(km/천m2)</th>
                    <th className="border border-slate-600">저압케이블<br/>(km/천m2)</th>
                    <th className="border border-slate-600">저압접속함<br/>(조/천m2)</th>
                    <th className="border border-slate-600">지상개폐기<br/>(대/천m2)</th>
                    <th className="border border-slate-600">지상변압기<br/>(대/천m2)</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.021</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">0.048</td>
                        <td className="border border-slate-600">0.045</td>
                        <td className="border border-slate-600">0.014</td>
                        <td className="border border-slate-600">0.037</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">0.021</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.041</td>
                        <td className="border border-slate-600">0.026</td>
                        <td className="border border-slate-600">0.042</td>
                        <td className="border border-slate-600">0.037</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">0.019</td>
                        <td className="border border-slate-600">0.019</td>
                        <td className="border border-slate-600">0.016</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.029</td>
                        <td className="border border-slate-600">0.058</td>
                        <td className="border border-slate-600">0.048</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">0.010</td>
                        <td className="border border-slate-600">0.006</td>
                        <td className="border border-slate-600">0.019</td>
                        <td className="border border-slate-600">0.012</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.068</td>
                        <td className="border border-slate-600">0.069</td>
                        <td className="border border-slate-600">0.056</td>
                        <td className="border border-slate-600">0.065</td>
                        <td className="border border-slate-600">0.018</td>
                        <td className="border border-slate-600">0.035</td>
                        <td className="border border-slate-600">0.031</td>
                        <td className="border border-slate-600">0.029</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.052</td>
                        <td className="border border-slate-600">0.044</td>
                        <td className="border border-slate-600">0.050</td>
                        <td className="border border-slate-600">0.058</td>
                        <td className="border border-slate-600">0.013</td>
                        <td className="border border-slate-600">0.030</td>
                        <td className="border border-slate-600">0.030</td>
                        <td className="border border-slate-600">0.022</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모6</td>
                        <td className="border border-slate-600">0.037</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">0.045</td>
                        <td className="border border-slate-600">0.061</td>
                        <td className="border border-slate-600">0.012</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">0.029</td>
                        <td className="border border-slate-600">0.017</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모7</td>
                        <td className="border border-slate-600">0.096</td>
                        <td className="border border-slate-600">0.130</td>
                        <td className="border border-slate-600">0.103</td>
                        <td className="border border-slate-600">0.088</td>
                        <td className="border border-slate-600">0.036</td>
                        <td className="border border-slate-600">0.121</td>
                        <td className="border border-slate-600">0.059</td>
                        <td className="border border-slate-600">0.025</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모8</td>
                        <td className="border border-slate-600">0.078</td>
                        <td className="border border-slate-600">0.012</td>
                        <td className="border border-slate-600">0.071</td>
                        <td className="border border-slate-600">0.078</td>
                        <td className="border border-slate-600">0.007</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">0.046</td>
                        <td className="border border-slate-600">0.020</td>
                    </tr>
                    <tr className="bg-yellow-200">
                        <td className="border border-slate-600">평균</td>
                        <td className="border border-slate-600">0.053</td>
                        <td className="border border-slate-600">0.050</td>
                        <td className="border border-slate-600">0.058</td>
                        <td className="border border-slate-600">0.058</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">0.036</td>
                        <td className="border border-slate-600">0.031</td>
                        <td className="border border-slate-600">0.020</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-blue-100">
                    <th className="border border-slate-600">산업단지</th>
                    <th className="border border-slate-600">맨홀<br/>(조/천m2)</th>
                    <th className="border border-slate-600">핸드홀<br/>(조/천m2)</th>
                    <th className="border border-slate-600">관로<br/>(km/천m2)</th>
                    <th className="border border-slate-600">고압케이블<br/>(km/천m2)</th>
                    <th className="border border-slate-600">저압케이블<br/>(km/천m2)</th>
                    <th className="border border-slate-600">저압접속함<br/>(조/천m2)</th>
                    <th className="border border-slate-600">지상개폐기<br/>(대/천m2)</th>
                    <th className="border border-slate-600">지상변압기<br/>(대/천m2)</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">규모1</td>
                        <td className="border border-slate-600">0.023</td>
                        <td className="border border-slate-600">0.028</td>
                        <td className="border border-slate-600">0.026</td>
                        <td className="border border-slate-600">0.039</td>
                        <td className="border border-slate-600">0.015</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">0.017</td>
                        <td className="border border-slate-600">0.012</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모2</td>
                        <td className="border border-slate-600">0.025</td>
                        <td className="border border-slate-600">0.004</td>
                        <td className="border border-slate-600">0.029</td>
                        <td className="border border-slate-600">0.027</td>
                        <td className="border border-slate-600">0.005</td>
                        <td className="border border-slate-600">0.02</td>
                        <td className="border border-slate-600">0.013</td>
                        <td className="border border-slate-600">0.008</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모3</td>
                        <td className="border border-slate-600">0.033</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">0.046</td>
                        <td className="border border-slate-600">0.041</td>
                        <td className="border border-slate-600">0.007</td>
                        <td className="border border-slate-600">0.016</td>
                        <td className="border border-slate-600">0.032</td>
                        <td className="border border-slate-600">0.016</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모4</td>
                        <td className="border border-slate-600">0.048</td>
                        <td className="border border-slate-600">0.011</td>
                        <td className="border border-slate-600">0.047</td>
                        <td className="border border-slate-600">0.053</td>
                        <td className="border border-slate-600">0.011</td>
                        <td className="border border-slate-600">0.022</td>
                        <td className="border border-slate-600">0.027</td>
                        <td className="border border-slate-600">0.008</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">규모5</td>
                        <td className="border border-slate-600">0.047</td>
                        <td className="border border-slate-600">0.021</td>
                        <td className="border border-slate-600">0.065</td>
                        <td className="border border-slate-600">0.077</td>
                        <td className="border border-slate-600">0.008</td>
                        <td className="border border-slate-600">0.022</td>
                        <td className="border border-slate-600">0.033</td>
                        <td className="border border-slate-600">0.02</td>
                    </tr>
                    <tr className="bg-yellow-200">
                        <td className="border border-slate-600">평균</td>
                        <td className="border border-slate-600">0.035</td>
                        <td className="border border-slate-600">0.014</td>
                        <td className="border border-slate-600">0.043</td>
                        <td className="border border-slate-600">0.047</td>
                        <td className="border border-slate-600">0.009</td>
                        <td className="border border-slate-600">0.019</td>
                        <td className="border border-slate-600">0.024</td>
                        <td className="border border-slate-600">0.013</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};

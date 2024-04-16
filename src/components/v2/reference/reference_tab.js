export default function ReferenceTab() {
    return <>
        <div className="col-span-12 text-center text-2xl bg-yellow-100 p-2">
            <b>2024년 배전건설공사 기준단가(지중)</b>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr className="bg-orange-200">
                        <th colSpan={5} rowSpan={2} className="border border-slate-400">유형분류</th>
                        <th className="border border-slate-400" rowSpan={2}>단위</th>
                        <th className="border border-slate-400" colSpan={3}>회사분</th>
                        <th className="border border-slate-400" rowSpan={2}>도급공사비</th>
                        <th className="border border-slate-400" rowSpan={2}>기준단가</th>
                        <th className="border border-slate-400" colSpan={3}>회사분(조정후)</th>
                        <th className="border border-slate-400" rowSpan={2}>도급공사비(조정후)</th>
                        <th className="border border-slate-400" rowSpan={2}>기준단가(조정후)</th>
                    </tr>
                    <tr className="bg-orange-200">
                        <th className="border border-slate-400">재료비</th>
                        <th className="border border-slate-400">경비</th>
                        <th className="border border-slate-400">소계</th>
                        <th className="border border-slate-400">재료비</th>
                        <th className="border border-slate-400">경비</th>
                        <th className="border border-slate-400">소계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={3} className="border border-slate-400">고압케이블</td>
                        <td rowSpan={3} className="border border-slate-400">관로설치</td>
                        <td className="border border-slate-400">TRCNCE-WCU</td>
                        <td className="border border-slate-400">325mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">176,401</td>
                        <td className="border border-slate-400">181</td>
                        <td className="border border-slate-400">176,582</td>
                        <td className="border border-slate-400">60,657</td>
                        <td className="border border-slate-400">237,239</td>
                        <td className="border border-slate-400">176,401</td>
                        <td className="border border-slate-400">181</td>
                        <td className="border border-slate-400">176,582</td>
                        <td className="border border-slate-400">60,657</td>
                        <td className="border border-slate-400">237,239</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className="border border-slate-400">TRCNCE-WAL</td>
                        <td className="border border-slate-400">400mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">73,136</td>
                        <td className="border border-slate-400">180</td>
                        <td className="border border-slate-400">73,316</td>
                        <td className="border border-slate-400">60,534</td>
                        <td className="border border-slate-400">133,850</td>
                        <td className="border border-slate-400">73,136</td>
                        <td className="border border-slate-400">180</td>
                        <td className="border border-slate-400">73,136</td>
                        <td className="border border-slate-400">60,534</td>
                        <td className="border border-slate-400">133,850</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">95mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">24,204</td>
                        <td className="border border-slate-400">67</td>
                        <td className="border border-slate-400">24,271</td>
                        <td className="border border-slate-400">22,516</td>
                        <td className="border border-slate-400">46,787</td>
                        <td className="border border-slate-400">24,204</td>
                        <td className="border border-slate-400">67</td>
                        <td className="border border-slate-400">24,271</td>
                        <td className="border border-slate-400">22,516</td>
                        <td className="border border-slate-400">46,787</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td rowSpan={2} className="border border-slate-400">저압케이블</td>
                        <td rowSpan={2} className="border border-slate-400">간선용</td>
                        <td rowSpan={2} className="border border-slate-400">CV Cable</td>
                        <td className="border border-slate-400">120mm x 3<br/>70mm x 1</td>
                        <td className="border border-slate-400">인력</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">50,639</td>
                        <td className="border border-slate-400">57</td>
                        <td className="border border-slate-400">50,696</td>
                        <td className="border border-slate-400">28,294</td>
                        <td className="border border-slate-400">78,990</td>
                        <td className="border border-slate-400">50,639</td>
                        <td className="border border-slate-400">57</td>
                        <td className="border border-slate-400">50,696</td>
                        <td className="border border-slate-400">28,294</td>
                        <td className="border border-slate-400">78,990</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">240mm x 3<br/>120mm x 1</td>
                        <td className="border border-slate-400">인력</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">97,152</td>
                        <td className="border border-slate-400">88</td>
                        <td className="border border-slate-400">97,240</td>
                        <td className="border border-slate-400">43,767</td>
                        <td className="border border-slate-400">141,007</td>
                        <td className="border border-slate-400">97,152</td>
                        <td className="border border-slate-400">88</td>
                        <td className="border border-slate-400">97,240</td>
                        <td className="border border-slate-400">43,767</td>
                        <td className="border border-slate-400">141,007</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className="border border-slate-400">지상개폐기</td>
                        <td className="border border-slate-400">개폐기</td>
                        <td colSpan={2} className="border border-slate-400">4W4S<br/>(지능화용)</td>
                        <td className="border border-slate-400">애폭시절연</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">24,119</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">24,122</td>
                        <td className="border border-slate-400">1,286</td>
                        <td className="border border-slate-400">25,408</td>
                        <td className="border border-slate-400">24,119</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">24,122</td>
                        <td className="border border-slate-400">1,286</td>
                        <td className="border border-slate-400">25,408</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">개폐기<br/>기초대</td>
                        <td colSpan={2} className="border border-slate-400">SW4</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">572</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">574</td>
                        <td className="border border-slate-400">1,214</td>
                        <td className="border border-slate-400">1,788</td>
                        <td className="border border-slate-400">572</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">574</td>
                        <td className="border border-slate-400">1,214</td>
                        <td className="border border-slate-400">1,788</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td rowSpan={4} className="border border-slate-400">지상변압기</td>
                        <td rowSpan={3} className="border border-slate-400">변압기</td>
                        <td rowSpan={3} className="border border-slate-400">삼상</td>
                        <td className="border border-slate-400">75kVA</td>
                        <td className="border border-slate-400">compact</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">7,650</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">7,652</td>
                        <td className="border border-slate-400">1,240</td>
                        <td className="border border-slate-400">8,892</td>
                        <td className="border border-slate-400">7,650</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">7,652</td>
                        <td className="border border-slate-400">1,240</td>
                        <td className="border border-slate-400">8,892</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">150kVA</td>
                        <td className="border border-slate-400">compact</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">8,933</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">8,936</td>
                        <td className="border border-slate-400">1,418</td>
                        <td className="border border-slate-400">10,354</td>
                        <td className="border border-slate-400">8,933</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">8,936</td>
                        <td className="border border-slate-400">1,418</td>
                        <td className="border border-slate-400">10,354</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">300kVA</td>
                        <td className="border border-slate-400">compact</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">10,648</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">10,651</td>
                        <td className="border border-slate-400">1,451</td>
                        <td className="border border-slate-400">12,102</td>
                        <td className="border border-slate-400">10,648</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">10,651</td>
                        <td className="border border-slate-400">1,451</td>
                        <td className="border border-slate-400">12,102</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">변압기<br/>기초대</td>
                        <td colSpan={2} className="border border-slate-400">T3L</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">672</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">674</td>
                        <td className="border border-slate-400">1,234</td>
                        <td className="border border-slate-400">1,908</td>
                        <td className="border border-slate-400">672</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">674</td>
                        <td className="border border-slate-400">1,234</td>
                        <td className="border border-slate-400">1,908</td>
                    </tr>
                    <tr>
                        <td rowSpan={3} className="border border-slate-400">고압관로공사</td>
                        <td rowSpan={3} colSpan={2} className="border border-slate-400">합성수지파형관<br/>175+150+100mm<br/>(전력신기술 105호)</td>
                        <td className="border border-slate-400">4공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">39,886</td>
                        <td className="border border-slate-400">294</td>
                        <td className="border border-slate-400">40,180</td>
                        <td className="border border-slate-400">146,947</td>
                        <td className="border border-slate-400">187,127</td>
                        <td className="border border-slate-400">31,261</td>
                        <td className="border border-slate-400">230</td>
                        <td className="border border-slate-400">31,491</td>
                        <td className="border border-slate-400">97,867</td>
                        <td className="border border-slate-400">129,358</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">6공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">56,771</td>
                        <td className="border border-slate-400">368</td>
                        <td className="border border-slate-400">57,139</td>
                        <td className="border border-slate-400">193,769</td>
                        <td className="border border-slate-400">250,908</td>
                        <td className="border border-slate-400">45,843</td>
                        <td className="border border-slate-400">297</td>
                        <td className="border border-slate-400">46,140</td>
                        <td className="border border-slate-400">133,313</td>
                        <td className="border border-slate-400">179,453</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">9공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">79,187</td>
                        <td className="border border-slate-400">485</td>
                        <td className="border border-slate-400">79,672</td>
                        <td className="border border-slate-400">242,671</td>
                        <td className="border border-slate-400">322,343</td>
                        <td className="border border-slate-400">67,705</td>
                        <td className="border border-slate-400">415</td>
                        <td className="border border-slate-400">68,120</td>
                        <td className="border border-slate-400">176,017</td>
                        <td className="border border-slate-400">244,137</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">저압관로공사</td>
                        <td colSpan={2} className="border border-slate-400">합성수지파형관<br/>100mm<br/>인력시공</td>
                        <td className="border border-slate-400">2공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">6,965</td>
                        <td className="border border-slate-400">103</td>
                        <td className="border border-slate-400">7,068</td>
                        <td className="border border-slate-400">43,729</td>
                        <td className="border border-slate-400">50,797</td>
                        <td className="border border-slate-400">6,617</td>
                        <td className="border border-slate-400">98</td>
                        <td className="border border-slate-400">6,715</td>
                        <td className="border border-slate-400">34,983</td>
                        <td className="border border-slate-400">41,698</td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="border border-slate-400">고압구조물</td>
                        <td rowSpan={3} className="border border-slate-400">맨홀</td>
                        <td className="border border-slate-400">MA4</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">5,846</td>
                        <td className="border border-slate-400">9</td>
                        <td className="border border-slate-400">5,855</td>
                        <td className="border border-slate-400">4,463</td>
                        <td className="border border-slate-400">10,318</td>
                        <td className="border border-slate-400">5,846</td>
                        <td className="border border-slate-400">9</td>
                        <td className="border border-slate-400">5,855</td>
                        <td className="border border-slate-400">4,463</td>
                        <td className="border border-slate-400">10,318</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">MA6</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">6,006</td>
                        <td className="border border-slate-400">9</td>
                        <td className="border border-slate-400">6,015</td>
                        <td className="border border-slate-400">4,718</td>
                        <td className="border border-slate-400">10,733</td>
                        <td className="border border-slate-400">6,006</td>
                        <td className="border border-slate-400">9</td>
                        <td className="border border-slate-400">6,015</td>
                        <td className="border border-slate-400">4,718</td>
                        <td className="border border-slate-400">10,733</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">ME6</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">10,727</td>
                        <td className="border border-slate-400">15</td>
                        <td className="border border-slate-400">10,742</td>
                        <td className="border border-slate-400">7,603</td>
                        <td className="border border-slate-400">18,345</td>
                        <td className="border border-slate-400">10,727</td>
                        <td className="border border-slate-400">15</td>
                        <td className="border border-slate-400">10,742</td>
                        <td className="border border-slate-400">7,603</td>
                        <td className="border border-slate-400">18,345</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">핸드홀</td>
                        <td className="border border-slate-400">HB2<br/>(2방향용)</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">4,003</td>
                        <td className="border border-slate-400">6</td>
                        <td className="border border-slate-400">4,009</td>
                        <td className="border border-slate-400">2,884</td>
                        <td className="border border-slate-400">6,893</td>
                        <td className="border border-slate-400">4,003</td>
                        <td className="border border-slate-400">6</td>
                        <td className="border border-slate-400">4,009</td>
                        <td className="border border-slate-400">2,884</td>
                        <td className="border border-slate-400">6,893</td>
                    </tr>
                    <tr className="bg-gray-100"> 
                        <td className="border border-slate-400">저압구조물</td>
                        <td className="border border-slate-400">저압접속함</td>
                        <td className="border border-slate-400">간선용(JBL)</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">318</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">320</td>
                        <td className="border border-slate-400">880</td>
                        <td className="border border-slate-400">1,200</td>
                        <td className="border border-slate-400">318</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">320</td>
                        <td className="border border-slate-400">880</td>
                        <td className="border border-slate-400">1,200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};

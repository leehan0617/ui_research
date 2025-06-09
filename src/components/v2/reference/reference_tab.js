export default function ReferenceTab() {
    return <>
        <div className="col-span-12 text-center text-2xl bg-yellow-100 p-2">
            <b>2025년 배전건설공사 기준단가(지중)</b>
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
                        <td className="border border-slate-400">191,535</td>
                        <td className="border border-slate-400">186</td>
                        <td className="border border-slate-400">191,721</td>
                        <td className="border border-slate-400">62,286</td>
                        <td className="border border-slate-400">254,007</td>
                        <td className="border border-slate-400">191,535</td>
                        <td className="border border-slate-400">186</td>
                        <td className="border border-slate-400">191,721</td>
                        <td className="border border-slate-400">62,286</td>
                        <td className="border border-slate-400">254,007</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className="border border-slate-400">TRCNCE-WAL</td>
                        <td className="border border-slate-400">400mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">80,652</td>
                        <td className="border border-slate-400">188</td>
                        <td className="border border-slate-400">80,840</td>
                        <td className="border border-slate-400">63,153</td>
                        <td className="border border-slate-400">143,993</td>
                        <td className="border border-slate-400">80,652</td>
                        <td className="border border-slate-400">188</td>
                        <td className="border border-slate-400">80,840</td>
                        <td className="border border-slate-400">63,153</td>
                        <td className="border border-slate-400">143,993</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">95mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">26,538</td>
                        <td className="border border-slate-400">68</td>
                        <td className="border border-slate-400">26,606</td>
                        <td className="border border-slate-400">22,701</td>
                        <td className="border border-slate-400">49,307</td>
                        <td className="border border-slate-400">26,538</td>
                        <td className="border border-slate-400">68</td>
                        <td className="border border-slate-400">26,606</td>
                        <td className="border border-slate-400">22,701</td>
                        <td className="border border-slate-400">49,307</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td rowSpan={2} className="border border-slate-400">저압케이블</td>
                        <td rowSpan={2} className="border border-slate-400">간선용</td>
                        <td rowSpan={2} className="border border-slate-400">CV Cable</td>
                        <td className="border border-slate-400">120mm x 3<br/>70mm x 1</td>
                        <td className="border border-slate-400">인력</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">51,680</td>
                        <td className="border border-slate-400">57</td>
                        <td className="border border-slate-400">51,737</td>
                        <td className="border border-slate-400">28,303</td>
                        <td className="border border-slate-400">80,040</td>
                        <td className="border border-slate-400">51,680</td>
                        <td className="border border-slate-400">57</td>
                        <td className="border border-slate-400">51,737</td>
                        <td className="border border-slate-400">28,303</td>
                        <td className="border border-slate-400">80,040</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">240mm x 3<br/>120mm x 1</td>
                        <td className="border border-slate-400">인력</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">100,440</td>
                        <td className="border border-slate-400">90</td>
                        <td className="border border-slate-400">100,530</td>
                        <td className="border border-slate-400">45,230</td>
                        <td className="border border-slate-400">145,760</td>
                        <td className="border border-slate-400">100,440</td>
                        <td className="border border-slate-400">90</td>
                        <td className="border border-slate-400">100,530</td>
                        <td className="border border-slate-400">45,230</td>
                        <td className="border border-slate-400">145,760</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className="border border-slate-400">지상개폐기</td>
                        <td className="border border-slate-400">개폐기</td>
                        <td colSpan={2} className="border border-slate-400">4W4S<br/>(지능화용)</td>
                        <td className="border border-slate-400">애폭시절연</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">24,354</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">24,357</td>
                        <td className="border border-slate-400">1,296</td>
                        <td className="border border-slate-400">25,653</td>
                        <td className="border border-slate-400">24,354</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">24,357</td>
                        <td className="border border-slate-400">1,296</td>
                        <td className="border border-slate-400">25,653</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">개폐기<br/>기초대</td>
                        <td colSpan={2} className="border border-slate-400">SW4</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">382</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">385</td>
                        <td className="border border-slate-400">1,252</td>
                        <td className="border border-slate-400">1,637</td>
                        <td className="border border-slate-400">382</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">385</td>
                        <td className="border border-slate-400">1,252</td>
                        <td className="border border-slate-400">1,637</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td rowSpan={4} className="border border-slate-400">지상변압기</td>
                        <td rowSpan={3} className="border border-slate-400">변압기</td>
                        <td rowSpan={3} className="border border-slate-400">삼상</td>
                        <td className="border border-slate-400">75kVA</td>
                        <td className="border border-slate-400">compact</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">8,002</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">8,005</td>
                        <td className="border border-slate-400">1,361</td>
                        <td className="border border-slate-400">9,366</td>
                        <td className="border border-slate-400">8,002</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">8,005</td>
                        <td className="border border-slate-400">1,361</td>
                        <td className="border border-slate-400">9,366</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">150kVA</td>
                        <td className="border border-slate-400">compact</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">9,312</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">9,315</td>
                        <td className="border border-slate-400">1,429</td>
                        <td className="border border-slate-400">10,744</td>
                        <td className="border border-slate-400">9,312</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">9,315</td>
                        <td className="border border-slate-400">1,429</td>
                        <td className="border border-slate-400">10,744</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">300kVA</td>
                        <td className="border border-slate-400">compact</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">11,022</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">11,025</td>
                        <td className="border border-slate-400">1,462</td>
                        <td className="border border-slate-400">12,487</td>
                        <td className="border border-slate-400">11,022</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">11,025</td>
                        <td className="border border-slate-400">1,462</td>
                        <td className="border border-slate-400">12,487</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">변압기<br/>기초대</td>
                        <td colSpan={2} className="border border-slate-400">T3L</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">대</td>
                        <td className="border border-slate-400">455</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">458</td>
                        <td className="border border-slate-400">1,270</td>
                        <td className="border border-slate-400">1,728</td>
                        <td className="border border-slate-400">455</td>
                        <td className="border border-slate-400">3</td>
                        <td className="border border-slate-400">458</td>
                        <td className="border border-slate-400">1,270</td>
                        <td className="border border-slate-400">1,728</td>
                    </tr>
                    <tr>
                        <td rowSpan={3} className="border border-slate-400">고압관로공사</td>
                        <td rowSpan={3} colSpan={2} className="border border-slate-400">합성수지파형관<br/>175+150+100mm<br/>(전력신기술 105호)</td>
                        <td className="border border-slate-400">4공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">33,167</td>
                        <td className="border border-slate-400">295</td>
                        <td className="border border-slate-400">33,462</td>
                        <td className="border border-slate-400">147,714</td>
                        <td className="border border-slate-400">181,176</td>
                        <td className="border border-slate-400">25,995</td>
                        <td className="border border-slate-400">231</td>
                        <td className="border border-slate-400">26,226</td>
                        <td className="border border-slate-400">122,972</td>
                        <td className="border border-slate-400">149,198</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">6공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">48,267</td>
                        <td className="border border-slate-400">368</td>
                        <td className="border border-slate-400">48,635</td>
                        <td className="border border-slate-400">184,086</td>
                        <td className="border border-slate-400">232,721</td>
                        <td className="border border-slate-400">38,976</td>
                        <td className="border border-slate-400">297</td>
                        <td className="border border-slate-400">39,273</td>
                        <td className="border border-slate-400">119,369</td>
                        <td className="border border-slate-400">158,641</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">9공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">66,284</td>
                        <td className="border border-slate-400">486</td>
                        <td className="border border-slate-400">66,770</td>
                        <td className="border border-slate-400">243,079</td>
                        <td className="border border-slate-400">309,849</td>
                        <td className="border border-slate-400">56,673</td>
                        <td className="border border-slate-400">416</td>
                        <td className="border border-slate-400">57,088</td>
                        <td className="border border-slate-400">166,175</td>
                        <td className="border border-slate-400">223,264</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-400">저압관로공사</td>
                        <td colSpan={2} className="border border-slate-400">합성수지파형관<br/>100mm<br/>인력시공</td>
                        <td className="border border-slate-400">2공</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">5,274</td>
                        <td className="border border-slate-400">88</td>
                        <td className="border border-slate-400">5,362</td>
                        <td className="border border-slate-400">44,089</td>
                        <td className="border border-slate-400">49,451</td>
                        <td className="border border-slate-400">5,010</td>
                        <td className="border border-slate-400">84</td>
                        <td className="border border-slate-400">5,094</td>
                        <td className="border border-slate-400">35,271</td>
                        <td className="border border-slate-400">40,365</td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="border border-slate-400">고압구조물</td>
                        <td rowSpan={3} className="border border-slate-400">맨홀</td>
                        <td className="border border-slate-400">MA4</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">4,090</td>
                        <td className="border border-slate-400">10</td>
                        <td className="border border-slate-400">4,100</td>
                        <td className="border border-slate-400">4,905</td>
                        <td className="border border-slate-400">9,005</td>
                        <td className="border border-slate-400">4,090</td>
                        <td className="border border-slate-400">10</td>
                        <td className="border border-slate-400">4,100</td>
                        <td className="border border-slate-400">4,905</td>
                        <td className="border border-slate-400">9,005</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">MA6</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">4,516</td>
                        <td className="border border-slate-400">10</td>
                        <td className="border border-slate-400">4,526</td>
                        <td className="border border-slate-400">5,072</td>
                        <td className="border border-slate-400">9,598</td>
                        <td className="border border-slate-400">4,516</td>
                        <td className="border border-slate-400">10</td>
                        <td className="border border-slate-400">4,526</td>
                        <td className="border border-slate-400">5,072</td>
                        <td className="border border-slate-400">9,598</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">ME6</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">10,679</td>
                        <td className="border border-slate-400">16</td>
                        <td className="border border-slate-400">10,695</td>
                        <td className="border border-slate-400">7,820</td>
                        <td className="border border-slate-400">18,515</td>
                        <td className="border border-slate-400">10,679</td>
                        <td className="border border-slate-400">16</td>
                        <td className="border border-slate-400">10,695</td>
                        <td className="border border-slate-400">7,820</td>
                        <td className="border border-slate-400">18,515</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">핸드홀</td>
                        <td className="border border-slate-400">HB2<br/>(2방향용)</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">2,617</td>
                        <td className="border border-slate-400">6</td>
                        <td className="border border-slate-400">2,623</td>
                        <td className="border border-slate-400">2,967</td>
                        <td className="border border-slate-400">5,590</td>
                        <td className="border border-slate-400">2,617</td>
                        <td className="border border-slate-400">6</td>
                        <td className="border border-slate-400">2,623</td>
                        <td className="border border-slate-400">2,967</td>
                        <td className="border border-slate-400">5,590</td>
                    </tr>
                    <tr className="bg-gray-100"> 
                        <td className="border border-slate-400">저압구조물</td>
                        <td className="border border-slate-400">저압접속함</td>
                        <td className="border border-slate-400">간선용(JBL)</td>
                        <td className="border border-slate-400">조립식</td>
                        <td className="border border-slate-400">사리도</td>
                        <td className="border border-slate-400">개소</td>
                        <td className="border border-slate-400">342</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">344</td>
                        <td className="border border-slate-400">999</td>
                        <td className="border border-slate-400">1,343</td>
                        <td className="border border-slate-400">342</td>
                        <td className="border border-slate-400">2</td>
                        <td className="border border-slate-400">344</td>
                        <td className="border border-slate-400">999</td>
                        <td className="border border-slate-400">1,343</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};

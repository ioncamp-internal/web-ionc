import Link from "next/link";

const busRoutes = ['藍線 1 區', '先導公車', '5608', '182', '1', '2', '83', '31'];

const intercityBuses = [
    { name: '統聯客運',                  href: 'https://www.ubus.com.tw/' },
    { name: '新竹三重客運聯營',           href: 'https://www.hcbus.com.tw/' },
    { name: '國光客運',                  href: 'https://www.kingbus.com.tw/' },
    { name: '豪泰客運',                  href: 'https://www.houtaibus.com.tw/' },
    { name: '新竹台中客運聯營',           href: 'http://www.hcbus.com.tw/' },
    { name: '日豪客運',                  href: 'https://www.rihaobus.com/service.html' },
    { name: '和欣客運',                  href: 'https://www.ebus.com.tw/' },
    { name: '台中客運',                  href: 'https://www.tcbus.com.tw/' },
];

const BORDER = 'rgba(29,3,241,0.18)';

function TravelRow({ label, children }) {
    return (
        <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
            <td
                className="px-4 py-3 font-semibold text-sm whitespace-nowrap align-top"
                style={{ color: '#1D03F1', borderRight: `1px solid ${BORDER}`, background: 'rgba(77,91,218,0.04)' }}
            >
                {label}
            </td>
            <td className="px-4 py-3 text-sm leading-relaxed align-top" style={{ color: '#4D5BDA' }}>
                {children}
            </td>
        </tr>
    );
}

export default function Travel() {
    return (
        <div className="z-50 w-full max-w-3xl flex flex-col">
            <div className="text-center mb-2">
                <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#1D03F1' }}>交通資訊</h1>
            </div>
            <p className="text-center text-sm font-medium mb-6 mt-2" style={{ color: '#A361DD' }}>
                國立清華大學校本部地址：新竹市光復路二段 101 號
            </p>

            <div
                className="overflow-x-auto rounded-xl"
                style={{ border: `1.5px solid ${BORDER}`, boxShadow: '3px 3px 0 rgba(29,3,241,0.12)', background: '#fff' }}
            >
                <table className="table-auto w-full text-left border-collapse" style={{ minWidth: '500px' }}>
                    <thead>
                        <tr style={{ borderBottom: `1.5px solid ${BORDER}`, background: 'rgba(77,91,218,0.06)' }}>
                            <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(29,3,241,0.45)', width: '110px' }}>交通方式</th>
                            <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(29,3,241,0.45)' }}>說明 / 相關網站</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TravelRow label="高鐵">
                            請於高鐵新竹站下車，下車後可轉搭計程車、182公車或先導公車至校門口，轉乘資訊請見&nbsp;
                            <br/>
                            <a href="http://www.thsrc.com.tw/" target="_blank" rel="noreferrer"
                                className="font-semibold underline underline-offset-2 transition-colors"
                                style={{ color: '#A361DD' }}>
                                臺灣高鐵網站
                            </a>。
                        </TravelRow>

                        <TravelRow label="火車">
                            西部幹線新竹站下車，下車後可轉搭計程車或藍線1區、182、5608等市區公車至校門口。&nbsp;
                            <br/>
                            <a href="http://www.railway.gov.tw/tw/" target="_blank" rel="noreferrer"
                                className="font-semibold underline underline-offset-2 transition-colors"
                                style={{ color: '#A361DD' }}>
                                臺灣鐵路管理局
                            </a>
                        </TravelRow>

                        <TravelRow label="市區公車">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {busRoutes.map(r => (
                                    <span key={r}
                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{ background: 'rgba(163,97,221,0.10)', color: '#A361DD', border: '1px solid rgba(163,97,221,0.3)' }}>
                                        {r}
                                    </span>
                                ))}
                            </div>
                            <a href="http://www.hcbus.com.tw/" target="_blank" rel="noreferrer"
                                className="font-semibold underline underline-offset-2 transition-colors"
                                style={{ color: '#A361DD' }}>
                                新竹客運
                            </a>
                        </TravelRow>

                        <TravelRow label="計程車">
                            火車站 → 清華大學校本部門口，車資約 200~250 元<br />
                            <span style={{ color: 'rgba(29,3,241,0.5)' }}>(若未跳錶，上車前請先與司機議價)</span>
                        </TravelRow>

                        <TravelRow label="國道客運">
                            下交流道後之下車站（於交流道口或清華大學門口），請先洽詢各客運公司。
                            <ul className="mt-2 space-y-1">
                                {intercityBuses.map(bus => (
                                    <li key={bus.name}>
                                        <a href={bus.href} target="_blank" rel="noopener noreferrer"
                                            className="font-medium underline underline-offset-2 transition-colors"
                                            style={{ color: '#A361DD' }}>
                                            {bus.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </TravelRow>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

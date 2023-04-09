import {PaperClipIcon} from '@heroicons/react/20/solid'

export default function Example() {
    return (
        <>
            <div className="text-center z-10" style={{marginTop: "-15px"}}>
                <h1 className="text-6xl font-bold" style={{color: "#FFF"}}>交通資訊</h1>
            </div>
            <div>
                <h3 className="mt-5 mb-2 text-base font-semibold leading-6 text-white"
                    style={{color: "#8DD6F7"}}>國立清華大學校本部地址：新竹市光復路二段 101 號</h3>
            </div>
            <table className="table-auto w-full mt-3 text-center leader-6 text-white">
                <thead>
                    <tr className="text-gray-500 border-b-2">
                        <th className="px-4 py-2">交通</th>
                        <th className="px-4 py-2">說明</th>
                        <th className="px-4 py-2">相關網站</th>
                    </tr>
                </thead>
                <tbody className="font-normal">
                    <tr className="border-b mt-1 mb-1">
                        <td className=" px-4 py-2">高鐵</td>
                        <td className=" px-4 py-2">請於高鐵新竹站下車，下車後可轉搭其他交通工具，轉乘資訊請見臺灣高鐵網站。</td>
                        <td className=" px-4 py-2"style={{color: "#8DD6F7"}}><a href="http://www.thsrc.com.tw/" target="_blank"
                                                            rel="noreferrer">臺灣高鐵網站</a></td>
                    </tr>
                    <tr className="border-b mt-1 mb-1">
                        <td className=" px-4 py-2">火車</td>
                        <td className=" px-4 py-2">西部幹線新竹站下車，下車後需轉搭其他交通工具。</td>
                        <td className=" px-4 py-2"style={{color: "#8DD6F7"}}>
                            <a href="http://www.railway.gov.tw/tw/" target="_blank"
                               rel="noreferrer" >臺灣鐵路管理局</a>
                        </td>
                    </tr>
                    <tr className="border-b mt-1 mb-1">
                        <td className=" px-4 py-2">市區公車</td>
                        <td className="py-2 col-span-2">
                            <div className="flex flex-wrap justify-center">
                                <div className="mr-2 mb-2"><span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">藍線 1 區</span>
                                </div>
                                <div className="mr-2 mb-2"><span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">5608</span>
                                </div>
                                <div className="mr-2 mb-2"><span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">182</span>
                                </div>
                                <div className="mr-2 mb-2"><span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">1</span>
                                </div>
                                <div className="mr-2 mb-2"><span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">2</span>
                                </div>
                                <div className="mr-2 mb-2"><span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">83</span>
                                </div>
                                <div className="mr-2 mb-2"><span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">31</span>
                                </div>
                            </div>
                        </td>
                        <td className=" px-4 py-2"style={{color: "#8DD6F7"}}><a href="http://www.hcbus.com.tw/" target="_blank"
                                                            rel="noreferrer">新竹客運</a></td>
                    </tr>
                    <tr className="border-b mt-1 mb-1">
                        <td className=" px-4 py-2">計程車</td>
                        <td className=" px-4 py-2">
                            <p>火車站 → 清華大學校本部門口，車資約 200~250 元<br/>(若未跳錶，上車前請先與司機議價)</p>
                        </td>
                        <td className=" px-4 py-2"></td>
                    </tr>
                    <tr className="border-b mt-1 mb-1">
                        <td className="text-center">國道客運</td>
                        <td>
                            下交流道後之下車站（於交流道口或清華大學門口），請先洽詢各客運公司。
                        </td>
                        <td>
                            <ul style={{color: "#8DD6F7"}}>
                                <li className="mt-2 mb-2">
                                    <a href="https://www.ubus.com.tw/" target="_blank" rel="noopener noreferrer">亞聯客運（行駛北二高路線）</a>
                                </li>
                                <li className="mt-2 mb-2">
                                    <a href="https://www.hcbus.com.tw/" target="_blank" rel="noopener noreferrer">                                        新竹三重客運聯營</a>
                                </li>
                                <li className="mt-2 mb-2">
                                    <a href="https://www.kingbus.com.tw/" target="_blank" rel="noopener noreferrer">國光客運</a>
                                </li>
                                <li className="mt-2 mb-2">
                                    <a href="https://www.flixbus.com.tw/" target="_blank" rel="noopener noreferrer">飛狗巴士</a>
                                </li>
                                <li className="mt-2 mb-2">
                                    <a href="https://www.houtaibus.com.tw/" target="_blank" rel="noopener noreferrer">豪泰客運</a>
                                </li>
                                <li className="mt-2 mb-2">
                                    <a href="https://www.tongyebus.com.tw/" target="_blank" rel="noopener noreferrer">統聯客運</a>
                                </li>
                                <li className="mt-2 mb-2">
                                    <a href="https://www.aloha168.com.tw/" target="_blank" rel="noopener noreferrer">阿羅哈客運</a>
                                </li>
                                <li className="mt-2 mb-2">
                                    <a href="http://www.hcbus.com.tw/" target="_blank">新竹台中客運聯營</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

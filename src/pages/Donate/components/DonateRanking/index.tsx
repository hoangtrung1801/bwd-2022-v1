import { useViewport } from "../../../../utils/hook/useViewport";
import "./donate-ranking.css";

interface DonateRankingProps {}

const DonateRanking: React.FC<DonateRankingProps> = ({}) => {
    const {isMobile} = useViewport();

    return (
            <div className="donate-ranking">
                <section className="" style={{padding: `${isMobile ? '3rem 1rem' : '6rem'}`, background: 'var(--green-1)'}}>
                    <div className="donate-ranking-title is-flex is-justify-content-center is-align-items-center block is-relative">
                        <p className=" is-size-3 is-uppercase has-text-weight-bold font-heading">Bảng quyên góp</p>
                    </div>

                    <div className="container">
                        <div className="table-container" style={{borderRadius: "4px", overflow: 'hidden'}}>
                            <table
                                className="table is-striped is-fullwidth"
                                style={{ border: '1px solid #e0e0e0' }}
                            >
                                <thead style={{background: 'var(--green-6)'}}>
                                    <tr>
                                        <th>
                                            <a
                                                className="has-text-white is-flex is-align-items-center is-justify-content-start is-uppercase"
                                                style={{ background: 'inherit', color: 'white !important' , padding: '0.75rem 0.75rem'}}
                                                href="#"
                                            >
                                                <span className="mr-1">STT</span>
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="has-text-white is-flex is-align-items-center is-justify-content-start is-uppercase"
                                                style={{  background: 'inherit', color: 'white !important', padding: '0.75rem 0.75rem' }}
                                                href="#"
                                            >
                                                <span className="mr-1">
                                                    Tên
                                                </span>
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="has-text-white is-flex is-align-items-center is-justify-content-start is-uppercase"
                                                style={{  background: 'inherit', color: 'white !important', padding: '0.75rem 0.75rem' }}
                                                href="#"
                                            >
                                                <span className="mr-1">Số tiền</span>
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="has-text-white is-flex is-align-items-center is-justify-content-start is-uppercase"
                                                style={{  background: 'inherit', color: 'white !important', padding: '0.75rem 0.75rem' }}
                                                href="#"
                                            >
                                                <span className="mr-1">Ngày quyên góp</span>
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Array(10).fill(0).map((_, id) => (
                                            <tr key={id}>
                                                <td className="py-5 pl-5">{id+1}</td>
                                                <td className="py-5 pl-5">
                                                    Lê Kim Hoàng Trung
                                                </td>
                                                <td className="py-5 pl-5">50K</td>
                                                <td className="py-5 pl-5">6/6/2022</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
    );
};

export default DonateRanking;

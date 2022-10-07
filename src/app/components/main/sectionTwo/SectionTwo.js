import Styles from "../../../style/App.module.scss";
import DataJson from "../../../data/data.json";
import CountUp from 'react-countup';


const SectionTwo = () => {
    const profilePerf = DataJson.sectionTwoComponent;
    return(
        <section>
            <div className={Styles.title}>
                <h2>{profilePerf.title}</h2>
            </div>
            <div className={Styles.sectionTwo}>
                {profilePerf.dashboard.map((data, i) => {
                    return(
                        <div className={Styles.sectionTwo_card} key={i}>
                            <div className={Styles.sectionTwo_card_children}>
                                {data.perf}
                                <img src={require(`../../../assets/${data.img}`)} alt={data.img}/>
                            </div>
                            <div className={Styles.sectionTwo_card_children}>
                                    <div className={Styles.sectionTwo_card_children_nb}><CountUp start={0} end={data.nb} duration={3} /></div>
                                    <div className={Styles.sectionTwo_card_children_percent}>
                                        <img src={require(`../../../assets/${data.arrow}`)} alt={data.arrow}/>
                                        <span className={data.percent === '2%' ? Styles.red : Styles.green}>{data.percent}</span>
                                    </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}


export default SectionTwo;
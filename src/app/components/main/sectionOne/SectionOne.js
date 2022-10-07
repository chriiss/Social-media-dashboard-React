import Styles from "../../../style/App.module.scss";
import DataJson from "../../../data/data.json";
import CountUp from 'react-countup';

const SectionOne = () => {
    const dashBoard = DataJson.sectionOneComponent.dashboard;
    return(
        <section>
            <div className={Styles.sectionOne}>
                {dashBoard.map((data, i) => {
                    return(
                        <div className={Styles.sectionOne_card} key={i}>
                            <div className={Styles.sectionOne_card_name}>
                                <img src={require(`../../../assets/${data.img}`)} alt={data.img}/>
                                <span>{data.name}</span>
                            </div>
                            <CountUp className={Styles.sectionOne_card_nb} start={0} end={data.followersNumber} duration={3} />
                            <p>{data.followersText}</p>
                            <div className={Styles.sectionOne_card_toDay}>
                                <img src={require(`../../../assets/${data.arrow}`)} alt={data.img}/>
                                <span className={data.toDay === '144 Today' ? Styles.red : Styles.green}>{data.toDay}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default SectionOne;
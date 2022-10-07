import { useState, useEffect } from 'react';
import Styles from "../../style/App.module.scss";
import DataJson from "../../data/data.json";

const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    const toggleTheme = () => {
        darkMode === Styles.dark ? setDarkMode(Styles.light) : setDarkMode(Styles.dark);
    };

    useEffect(() => {
        document.body.className = darkMode;
      }, [darkMode]);

    const headerData = DataJson.headerComponent;
    return(
        <div className={Styles.header}>
            <div className={Styles.header_text}>
                <h1>{headerData.title}</h1>
                <p>{headerData.text.followers}</p>
            </div>
            <div className={Styles.header_toggle}>
                <div>
                    <label className={Styles.switch}>
                        <input type="checkbox" onClick={toggleTheme}/>
                        <span className={`${Styles.slider} ${Styles.round}`}></span>
                    </label>
                </div>
                <span>{headerData.text.darkMode}</span>
            </div>
        </div>
    )
}

export default Header;
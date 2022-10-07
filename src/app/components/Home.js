import Header from "./header/Header";
import SectionOne from "./main/sectionOne/SectionOne";
import SectionTwo from "./main/sectionTwo/SectionTwo";

const Home = () => {
    return(
        <>
            <header>
                <Header/>
            </header>
            <main>
                <SectionOne/>
                <SectionTwo/>
            </main>
        </>
    )
}

export default Home;
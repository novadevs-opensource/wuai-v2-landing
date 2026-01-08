import TopNav from "../components/Common/TopNav";
import ClaimBlock from "../components/MainBlocks/ClaimBlock";
import ClaimBlueBlock from "../components/MainBlocks/ClaimBlueBlock";
import FAQ from "../components/MainBlocks/FAQ";
import Features from "../components/MainBlocks/Features";
import Footer from "../components/MainBlocks/Footer";
import Jumbotron from "../components/MainBlocks/Jumbotron";
import Pains from "../components/MainBlocks/Pains";
import Marquee from "../components/Separators/Marquee";

const IndexPage = () => {
    const data = {
        jumbotron: {
            title: 'Your agentic infrastructure layer.',
            mainClaim: 'All your agents',
            claims: [
                'unified',
                'without CLI',
                'production-ready',
            ],
        }
    };

    return (
        <>
            <TopNav/>
            
            <Jumbotron title={data.jumbotron.title} ctas={data.jumbotron.claims} mainClaim={data.jumbotron.mainClaim}/>
            
            <Pains/>
            
            <ClaimBlock/>

            <Features/>
            
            <Marquee text="TOTAL CONTROL · ONE DASHBOARD · ALL YOUR AGENTS"/>
            
            <FAQ/>

            <ClaimBlueBlock/>

            <Footer/>
        </>
    );
}

export default IndexPage
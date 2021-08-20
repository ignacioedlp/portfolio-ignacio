import Layout from "../components/Layout"
import Header from "../components/Header"
import Information from "../components/Information"
import Portafolios from "../components/Portafolios"
import { Skills, information, hobbies, portfolios } from "../profile"



const Index = ({ Portfolios }) => (
    <Layout Layout >
        <Header data-aos="fade-in" />
        <Information
            Skills={Skills}
            information={information}
            hobbies={hobbies}
            className="information"
        />
        <Portafolios portfolios={portfolios} className="portfolios" />
    </Layout >
)

export default Index
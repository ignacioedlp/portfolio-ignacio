import Layout from "../components/Layout"
import Header from "../components/Header"
import Information from "../components/Information"
import Portafolios from "../components/Portafolios"
import { Skills, information, hobbies, portfolios } from "../profile"



const Index = () => (
    <Layout Layout>
        <Header />
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
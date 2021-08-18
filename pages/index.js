import Layout from "../components/Layout"
import Header from "../components/Header"
import Information from "../components/Information"
import Portafolios from "../components/Portafolios"
import { Skills, information, hobbies, portfolios } from "../profile"



const Index = () => (
    <Layout>
        <Header />
        <Information
            Skills={Skills}
            information={information}
            hobbies={hobbies}
        />
        <Portafolios portfolios={portfolios} />
    </Layout >
)

export default Index
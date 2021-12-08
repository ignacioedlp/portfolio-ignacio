import Layout from "../components/Layout";
import Header from "../components/Header";
import Information from "../components/Information";
import Portafolios from "../components/Portafolios";
import { Skills, information, hobbies, portafolio } from "../profile";

const Index = () => (
  <Layout>
    <Header />
    <Information
      Skills={Skills}
      information={information}
      hobbies={hobbies}
      className="information"
    />
    <Portafolios portafolio={portafolio} className="portfolios" />
  </Layout>
);

export default Index;

import Banner from "../../components/Banner"
import Layout from "../../components/Layout"
import { donateSection } from "../../utils/constant"

interface DonateProps {

}

const Donate: React.FC<DonateProps> = ({}) => {

  return (
      <Layout>
          <Banner sections={donateSection} />
      </Layout>
  )
}

export default Donate
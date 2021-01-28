import Layout from "../components/Layout/Layout"
import PageCarousel from "../components/PageCarousel"
import HomeContentLayout from "../components/Layout/HomeContentLayout"

export default function Home() {
  return (
    <Layout>
      {/* <PageCarousel /> */}
      <HomeContentLayout title={<div>Flash Sales</div>} more={<div>All Sales</div>}></HomeContentLayout>
    </Layout>
  )
}

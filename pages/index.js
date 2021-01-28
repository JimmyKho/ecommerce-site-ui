import Layout from "../components/Layout/Layout"
import PageCarousel from "../components/PageCarousel"
import HomeContentLayout from "../components/Layout/HomeContentLayout"
import RowProduct from "../components/Product/RowProduct"

export default function Home() {
  return (
    <Layout>
      <PageCarousel />
      <HomeContentLayout title={<div>Flash Sales</div>} more={<div>All Sales</div>}>
        <RowProduct list={PRODUCTS} />
      </HomeContentLayout>
    </Layout>
  )
}

const PRODUCTS = [
  {
    name: "Indian Cotton Double Gauze Shirt",
    code: "4550344324004",
    price: 109,
    discAmount: 20,
    oriPrice: 136.25,
    attr: {
      colors: [
        {
          name: "Grey",
          code: "#fdfdfd",
        },
        {
          name: "Brown",
          code: "#a47551",
        },
      ],
      sizes: [
        {
          name: "S",
        },
        {
          name: "M",
        },
        {
          name: "L",
        },
      ],
    },
  },
  {
    name: "Merino Wool Washable High Neck",
    code: "4550344168301",
    price: 159,
    discAmount: 20,
    oriPrice: 195.75,
    attr: {
      colors: [
        {
          name: "Brown",
          code: "#fdfdfd",
        },
        {
          name: "Grey",
          code: "#a47551",
        },
      ],
      sizes: [
        {
          name: "S",
        },
        {
          name: "M",
        },
        {
          name: "L",
        },
      ],
    },
  },
  {
    name: "Moisture wicking water repellent hooded jacket Sealing taped",
    code: "4550182976489",
    price: 229,
    discAmount: 30,
    oriPrice: 327.1,
    attr: {
      colors: [
        {
          name: "Black",
          code: "#fdfdfd",
        },
        {
          name: "Green",
          code: "#a47551",
        },
      ],
      sizes: [
        {
          name: "S",
        },
        {
          name: "M",
        },
        {
          name: "L",
        },
      ],
    },
  },
  {
    name: "WALK-SUPPORT WATER REPELLENT SNEAKERS",
    code: "4550182295511",
    price: 99.9,
    discAmount: 25,
    oriPrice: 132.6,
    attr: {
      colors: [
        {
          name: "Navy",
          code: "#fdfdfd",
        },
        {
          name: "Green",
          code: "#a47551",
        },
      ],
      sizes: [
        {
          name: "22",
        },
        {
          name: "23",
        },
        {
          name: "24",
        },
        {
          name: "25",
        },
      ],
    },
  },
]

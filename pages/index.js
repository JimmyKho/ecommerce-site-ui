import Layout from "../components/Layout/Layout"
import PageCarousel from "../components/PageCarousel"
import HomeContentLayout from "../components/Layout/HomeContentLayout"
import RowProduct from "../components/Product/RowProduct"
import RowVoucher from "../components/Voucher/RowVoucher"

export default function Home() {
  return (
    <Layout>
      {/* <PageCarousel /> */}
      <HomeContentLayout title={<div>Flash Sales</div>} more={<div>All Sales</div>}>
        <RowProduct list={PRODUCTS} />
      </HomeContentLayout>

      <HomeContentLayout more={<div>More Voucher</div>}>
        <RowVoucher list={VOUCHERS} />
      </HomeContentLayout>
    </Layout>
  )
}

const PRODUCTS = [
  {
    name: "Indian Cotton Gauze Shirt",
    code: "4550344324004",
    price: 109,
    discAmount: 20,
    oriPrice: 136.25,
    attr: {
      colors: [
        {
          name: "Grey",
          code: "#d8d7d5",
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
    name: "Merino Wool High Neck",
    code: "4550344168301",
    price: 159,
    discAmount: 20,
    oriPrice: 195.75,
    attr: {
      colors: [
        {
          name: "Brown",
          code: "#a47551",
        },
        {
          name: "Grey",
          code: "#d8d7d5",
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
    name: "Moisture Hooded Jacket",
    code: "4550182976489",
    price: 229,
    discAmount: 30,
    oriPrice: 327.1,
    attr: {
      colors: [
        {
          name: "Black",
          code: "#050606",
        },
        {
          name: "Green",
          code: "#59981a",
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
    name: "Water Repellent Sneakers",
    code: "4550182295511",
    price: 99.9,
    discAmount: 25,
    oriPrice: 132.6,
    attr: {
      colors: [
        {
          name: "Navy",
          code: "#003060",
        },
        {
          name: "Green",
          code: "#59981a",
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

const VOUCHERS = [
  {
    name: "Monday Happy",
    code: "#MONHPY",
    discAmount: 20,
  },
  {
    name: "Payday Surprise",
    code: "#SRPSPYDY",
    discAmount: 20,
  },
  {
    name: "First Order",
    code: "#HPYFRST",
    discAmount: 20,
  },
  {
    name: "Vegetarian Food",
    code: "#VEGANLOVE",
    discAmount: 20,
  },
]

import Layout from "../components/Layout/Layout"
import PageCarousel from "../components/PageCarousel"
import HomeContentLayout from "../components/Layout/HomeContentLayout"
import RowProduct from "../components/Product/RowProduct"
import RowVoucher from "../components/Voucher/RowVoucher"
import FlashSales from "../components/FlashSales"

export default function Home() {
  return (
    <Layout>
      <PageCarousel />
      <HomeContentLayout title={<FlashSales />}>
        <RowProduct list={PRODUCTS} />
      </HomeContentLayout>

      <HomeContentLayout more={<div className="PrimaryText">More Voucher</div>}>
        <RowVoucher list={VOUCHERS} />
      </HomeContentLayout>

      <HomeContentLayout more={<div className="PrimaryText">All Product</div>}>
        <RowProduct list={PRODUCTS} />
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
    brand: "MUJI",
    info: {
      rating: 4.8,
    },
    image: "/prod1_grey3.jpg",
    attr: {
      colors: [
        {
          name: "Grey",
          code: "#d8d7d5",
          images: ["/prod1_grey3.jpg", "/prod1_grey1.jpg", "/prod1_grey2.jpg"],
        },
        {
          name: "White",
          code: "#fdfdfd",
          images: ["/prod1_white1.jpg", "/prod1_white2.jpg", "/prod1_white3.jpg"],
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
    brand: "MUJI",
    info: {
      rating: 4.6,
    },
    image: "/prod2_brown1.jpg",
    attr: {
      colors: [
        {
          name: "Brown",
          code: "#a47551",
          images: ["/prod2_brown1.jpg", "/prod2_brown2.jpg", "/prod2_brown3.jpg"],
        },
        {
          name: "Grey",
          code: "#d8d7d5",
          images: ["/prod2_grey1.jpg", "/prod2_grey2.jpg", "/prod2_grey3.jpg"],
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
    brand: "MUJI",
    info: {
      rating: 4.9,
    },
    image: "/prod3_black1.jpg",
    attr: {
      colors: [
        {
          name: "Black",
          code: "#050606",
          images: ["/prod3_black1.jpg", "/prod3_black2.jpg", "/prod3_black3.jpg"],
        },
        {
          name: "Green",
          code: "#59981a",
          images: ["/prod3_green1.jpg", "/prod3_green2.jpg", "/prod3_green3.jpg"],
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
    brand: "MUJI",
    info: {
      rating: 4.3,
    },
    image: "/prod4_navy1.jpg",
    attr: {
      colors: [
        {
          name: "Navy",
          code: "#003060",
          images: ["/prod4_navy1.jpg", "/prod4_navy2.jpg", "/prod4_navy3.jpg"],
        },
        {
          name: "Red",
          code: "#e43d40",
          images: ["/prod4_red1.jpg", "/prod4_red2.jpg", "/prod4_red3.jpg"],
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

import Category from "@/components/categorysec/Category";
import SearchBanner from "@/components/seachbanner/Searchbanner";
import { ProductsData, grocery } from "../../data/products.js";
import Footer from "@/components/footer/Footer.jsx";
import Title from "@/components/title/Title.jsx";
import { Atta } from "../../data/atta.js";
import Navbar from "@/components/navbar/Navbar.jsx";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        <SearchBanner />

        <Title title={"Our Featured Categories"} />
        <Category
          pro={ProductsData}
          heading={"Atta, Rice, Oil & Dals"}
          list={grocery}
        />
        <Category pro={ProductsData} heading={"Masala & More"} list={grocery} />
        <Category
          pro={ProductsData}
          heading={"Cold Drinks & Juices"}
          list={grocery}
        />
        <Category pro={ProductsData} heading={"Snacks "} list={grocery} />
        <Category pro={ProductsData} heading={"Insta Food "} list={grocery} />
        <Category
          pro={ProductsData}
          heading={"Dairy & Bread "}
          list={grocery}
        />
        <Category pro={ProductsData} heading={"Biscuits "} list={grocery} />
        <Footer />
      </div>
    </>
  );
}

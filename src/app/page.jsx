
import Category from "@/components/categorysec/Category";
import SearchBanner from "@/components/seachbanner/Searchbanner";
import Location from "@/components/location/Location.jsx";
import {
  ProductsData,
  grocery,

} from "../../data/products.js";
import Footer from "@/components/footer/Footer.jsx";
import Title from "@/components/title/Title.jsx";
import Banner from "@/components/banner/Banner.jsx";
import { Atta } from "../../data/atta.js";
import Navbar from "@/components/navbar/Navbar.jsx";
import Adress from "@/components/adress/Adress.jsx";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-20">
          <SearchBanner />
        </div>
        <Title title={'Our Featured Categories'}/>
        <Category pro={Atta} heading={"Atta, Rice, Oil & Dals"} list={grocery} />
        <Category pro={ProductsData} heading={"Masala & More"} list={grocery} />
        <Category pro={ProductsData} heading={"Fruits & Vegetables"} list={grocery} />
        <Category pro={ProductsData} heading={"Cold Drinks & Juices"} list={grocery} />
        <Category pro={ProductsData} heading={"Dairy & Bread "} list={grocery} />
        <Category pro={ProductsData} heading={"Snacks "} list={grocery} />
        <Category pro={ProductsData} heading={"Insta Food "} list={grocery} />
        <Category pro={ProductsData} heading={"Biscuits "} list={grocery} />
        <Adress />
    
        <Footer />
      </div>
    </>
  );
}

import Category from "@/components/categorysec/Category";
import SearchBanner from "@/components/seachbanner/Searchbanner";
import {
  ProductsData,
  newata,
  meat,
  grocery,
  vegetable,
  groce,
} from "../../data/products.js";
import Footer from "@/components/footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <div>
        <div className="mt-20">
          <SearchBanner />
        </div>
        <Category pro={ProductsData} heading={"Grocery"} list={grocery} />
        <Category pro={ProductsData} heading={"Grocery"} list={grocery} />
        <Category pro={ProductsData} heading={"Grocery"} list={grocery} />
        <Footer />
      </div>
    </>
  );
}

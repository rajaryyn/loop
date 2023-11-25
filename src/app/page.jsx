import Category from "@/components/categorysec/Category";
import SearchBanner from "@/components/seachbanner/Searchbanner";
import { ProductsData, grocery, masal, colddr } from "../../data/products.js";
import Title from "@/components/title/Title.jsx";
import Navbar from "@/components/navbar/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBanner />
      <Title title={"Our Featured Categories"} />
      {/* <div className="flex gap-4 ml-10 mt-5">

<Catego />
<Catego />
<Catego />
<Catego />
<Catego />
<Catego />
</div> */}
      <Category
        pro={ProductsData}
        heading={"Atta, Rice, Oil & Dals"}
        list={grocery}
      />
      <Category pro={ProductsData} heading={"Masala & More"} list={masal} />
      <Category
        pro={ProductsData}
        heading={"Cold Drinks & Juices"}
        list={colddr}
      />
      <Category pro={ProductsData} heading={"Snacks "} list={grocery} />
      <Category pro={ProductsData} heading={"Insta Food "} list={grocery} />
      <Category pro={ProductsData} heading={"Dairy & Bread "} list={grocery} />
      <Category pro={ProductsData} heading={"Biscuits "} list={grocery} />
    </>
  );
}

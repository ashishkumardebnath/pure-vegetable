import About from "../About/About";
import Banner1 from "../Banner1/Banner1";
import Category from "../Category/Category";
import Deal from "../Deal/Deal";
import MostView from "../MostView/MostView";
import Products from "../Products/Products";
import SimpleDiv from "../SimpleDiv/SimpleDiv";
import SimpleDiv1 from "../SimpleDiv1/SimpleDiv1";
import SimpleDiv2 from "../SimpleDiv2/SimpleDiv2";
import TrendingProduct from "../TrendingProduct/TrendingProduct";

const Home = () => {
  return (
    <div>
      <Banner1></Banner1>
      <Category></Category>
      <About></About>
      <Products></Products>
      <SimpleDiv></SimpleDiv>
      <Deal></Deal>
      <TrendingProduct></TrendingProduct>
      <MostView></MostView>
      <SimpleDiv1></SimpleDiv1>
      <SimpleDiv2></SimpleDiv2>
    </div>
  );
};

export default Home;

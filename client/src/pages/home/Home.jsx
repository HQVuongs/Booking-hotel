import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header className="header"/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Tìm theo loại chỗ nghỉ</h1>
        <PropertyList/>
        <h1 className="homeTitle">Những chỗ nghỉ được khách du lịch ưa thích</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

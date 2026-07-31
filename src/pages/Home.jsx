import Header from "../components/layout/Header";
import Banner from "../components/home/Banner";
import HomeSearch from "../components/home/HomeSearch";
import QuickLookup from "../components/home/QuickLookup";
import RoleCard from "../components/home/RoleCard";
import Footer from "../components/layout/Footer";

export default function Home() {

    return (

        <>

            <Header />

            <Banner />

            {/* Thanh tìm kiếm thủ tục */}
            <HomeSearch />

            {/* Tra cứu nhanh */}
            <QuickLookup />

            {/* Chọn vai trò */}
            <RoleCard />

            <Footer />

        </>

    );

}
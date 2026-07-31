import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import BackButton from "../components/common/BackButton";
import OfficerBanner from "../components/officer/OfficerBanner";
import MinistryGrid from "../components/officer/MinistryGrid";
import QuickAccess from "../components/officer/QuickAccess";

import "../styles/officer.css";

export default function Officer(){

    return(

        <>

            <Header/>

            <main className="officer-page">

                <div className="container">

                    <BackButton current="Khu vực Cán bộ"/>

                    <OfficerBanner/>

                    <MinistryGrid/>

                    <QuickAccess/>

                </div>

            </main>

            <Footer/>

        </>

    )

}
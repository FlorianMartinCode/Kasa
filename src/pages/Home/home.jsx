import React from 'react'
import Navbar from '../../components/Navbar/navbar';
import Main from '../../components/Main/main';
import Banner from '../../components/Main/Banner/banner';
import Logements from '../../components/Main/Logements/logements';
import Footer from '../../components/Footer/footer';


function home() {
    return (
        <div>
            <Navbar />
            <Main>
                <Banner />
                <Logements />
            </Main>
            <Footer />
        </div>
      )
}

export default home
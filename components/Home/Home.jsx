import { Fragment } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar/Navbar';
import MainHeader from './MainHeader/MainHeader';
import Features from './Features/Features';
import Team from './Team/Team';
import RoadMap from './RoadMap/RoadMap';
import ContactUs from './ContactUs/ContactUs';
import StayConnected from './StayConnected/StayConnected';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <MainHeader />
      <Features />
      <Team />
      <RoadMap />
      <ContactUs />
      <StayConnected />
      <Footer />

      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default Home;

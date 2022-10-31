import React, {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MyAllDataContex } from "../../../App";
import auth from "../../../firebase.init";
import Footer from "../../SharedPage/Footer/Footer";
import "./Home.css";
const Banner = React.lazy(() => import("../Banner/Banner"));
const Services = React.lazy(() => import("../ServicesPage/Services"));

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  // const [details, setDetails] = useState([]);
  if (loading) {
    <p>loading..</p>;
  }
  const [services, setServices] = useContext(MyAllDataContex);

  return (
    <div>
      <Suspense fallback={<h1>loading ....</h1>}>
        <div className="text-center m-3 name-plate fs-2">KIBRIA HOSSAIN</div>
        <Banner></Banner>
        <Services></Services>
        <Footer></Footer>
      </Suspense>
    </div>
  );
};

export default Home;

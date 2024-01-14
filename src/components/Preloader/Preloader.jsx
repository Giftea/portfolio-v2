import { Bars } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="st-preloader">
      <Bars
        height="80"
        width="80"
        color="#b8916e"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Preloader;

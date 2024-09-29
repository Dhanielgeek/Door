import Qrcode from "../client/Profile/Qrcode";

const ViewQr = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-[30%] h-[80%] bg-white shadow-md max-md:w-[90%] flex justify-center items-center">
        <Qrcode />
      </div>
    </div>
  );
};

export default ViewQr;

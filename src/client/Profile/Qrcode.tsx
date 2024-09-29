import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const Qrcode = () => {
  const merchant = useSelector((state: any) => state.merchant.merchant);

  // Construct the correct URL
  const merchantId = merchant._id;
  console.log(merchantId);

  const baseUrl = "https://door-eight.vercel.app"; // Your app's base URL
  const qrValue = `${baseUrl}/userinfo/${merchantId}`;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold mb-4">
        Scan the QR Code to view payment options
      </h1>

      {/* Generate QR Code with the correct route */}
      <QRCode
        value={qrValue} // The value now points to the correct URL
        size={150}
      />

      <p className="mt-4 text-sm">
        Scan the QR code to display payment methods.
      </p>
    </div>
  );
};

export default Qrcode;

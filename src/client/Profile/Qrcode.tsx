import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const Qrcode = () => {
  const merchant = useSelector((state: any) => state.merchant.merchant);

  // console.log(merchant);

  const merchantId = merchant._id;
  // console.log(merchantId);

  const qrValue = `${window.location.origin}/userinfo/${merchantId}`;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold mb-4">
        Scan the QR Code to view payment options
      </h1>

      {/* Generate QR Code with a value that signifies a payment trigger */}
      <QRCode
        value={qrValue} // Simplified value just for triggering payment options
        size={150}
      />

      <p className="mt-4 text-sm">
        Scan the QR code to display payment methods.
      </p>
    </div>
  );
};

export default Qrcode;

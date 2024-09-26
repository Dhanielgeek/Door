import { CiBank } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";
import { useState } from "react";
import Modal from "react-modal";

// Set up the root element for the modal to attach to
Modal.setAppElement("#root");

const AddInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-screen p-5">
      {/* Add Bank button */}
      <div
        className="w-[48%] h-[10%] cursor-pointer transform duration-150 hover:bg-blue-500 mt-2 rounded flex justify-start px-5 gap-3 items-center max-md:w-[70%]"
        onClick={openModal}
      >
        <div className="w-[45px] text-white h-[45px] rounded-full flex justify-center items-center bg-blue-700">
          <CiBank size={30} />
        </div>
        <p className="font-semibold">Add Bank</p>
      </div>

      {/* Security Button */}
      <div className="w-[48%] h-[10%] hover:bg-blue-500 transform duration-150 cursor-pointer mt-2 rounded flex justify-start px-5 gap-3 items-center max-md:w-[70%]">
        <div className="w-[45px] h-[45px] text-white rounded-full flex justify-center items-center bg-blue-700">
          <MdSecurity size={30} />
        </div>
        <p className="font-semibold">Security</p>
      </div>

      {/* Modal for adding bank information */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Bank Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-4">Add Bank Information</h2>

          {/* Example form for adding bank information */}
          <form className="space-y-4">
            {/* Bank Name select option */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                required
              >
                <option value="">Select Bank</option>
                <option value="bank1">Bank of America</option>
                <option value="bank2">Chase Bank</option>
                <option value="bank3">Wells Fargo</option>
                <option value="bank4">Citibank</option>
                <option value="bank5">HSBC</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="Enter account number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Holder Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="Enter account holder name"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Add Bank
              </button>
            </div>
          </form>

          <button className="text-red-500 mt-4" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddInfo;

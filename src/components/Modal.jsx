export default function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors text-black z-10
      ${open ? "visible bg-black/70 " : "hidden"}`}
    >
      {/* todo: fix mobile view for modal */}
      <div
        className="flex flex-col h-[60%] md:h-[80%] bg-white rounded-xl shadow-2xl sm:w-[70%] md:w-[50%]  p-4 text-justify transition-all overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-[15%] right-[50%] md:top-[5%] md:right-[25%] text-gray-500 bg-red-200 hover:text-gray-900 hover:bg-red-400 rounded-full px-2 py-1"
          onClick={onClose}
        >
          X
        </button>
        {children}

        <div className="items-center">
          <button
            data-te-ripple-init
            className="bg-lime-200 hover:bg-lime-400 rounded-lg p-4 w-[30%] mt-4"
          >
            copy
          </button>
        </div>
      </div>
    </div>
  );
}

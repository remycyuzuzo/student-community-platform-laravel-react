function Modal({ children }) {
    return (
        <div className="w-full h-full z-30 fixed top-0 left-0 backdrop-blur-md flex flex-col items-center justify-center">
            {children}
        </div>
    );
}

export default Modal;
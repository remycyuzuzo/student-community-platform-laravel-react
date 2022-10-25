function H3({ className, children }) {
    return (
        <h3 className={`${className} text-2xl text-blue-900 dark:text-white font-bold mb-4`}>
            {children}
        </h3>
    );
}

export default H3;
function Card({ children, className }) {
    return (
        <div className={`rounded-lg bg-white p-4 mb-2 border-gray-100 dark:text-gray-300 dark:bg-gray-700 dark:border-transparent ` + className}>
            {children}
        </div>
    );
}

export default Card;
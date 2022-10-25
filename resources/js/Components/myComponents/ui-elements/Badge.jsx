function Badge({ children, className }) {
    return (
        <span className={`${className} bg-red-500 text-white text-xs px-1  rounded-lg`}>
            {children}
        </span>
    );
}

export default Badge;
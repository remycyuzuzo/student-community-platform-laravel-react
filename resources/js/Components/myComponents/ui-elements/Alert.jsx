function Alert({ color, message, title }) {
    return (
        <div className={`bg-${color}-100 border-l-4 border-${color}-500 dark:bg-slate-500 text-${color}-700 p-4`} role="alert">
            <p className="font-bold">{title}</p>
            <p>
                {message}
            </p>
        </div>
    );
}

export default Alert;
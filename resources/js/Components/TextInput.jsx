import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    placeHolder,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 dark:border-gray-500 focus:border-indigo-300 dark:focus:border-gray-500 dark:placeholder:text-gray-500 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                placeholder={placeHolder}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

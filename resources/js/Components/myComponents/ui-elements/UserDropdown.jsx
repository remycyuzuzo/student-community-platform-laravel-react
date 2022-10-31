import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import RouterLink from "./RouterLink";

function DropDown() {

    const [isOpen, setOpen] = useState(false);
    const { data, setData, post } = useForm({})

    const toggle = () => {
        if (isOpen) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    const logout = e => {
        e.preventDefault();
        post('/logout');
    }

    return (
        <div className="relative">
            <button className="bg-gray-300 h-8 w-8 flex items-center justify-center dark:bg-gray-500 dark:text-white rounded-full" onClick={toggle}>
                <BiUser className="inline-block scale-150" />
            </button>
            {isOpen && (
                <ul className="absolute top-10 left-0">
                    <li className="bg-white shadow-lg px-4 py-2 dark:bg-gray-500 dark:text-white" style={{ minWidth: '110px' }}><RouterLink className="inline-block" href="">My profile</RouterLink></li>
                    <li className="bg-white shadow-lg px-4 py-2 dark:bg-gray-500 dark:text-white" style={{ minWidth: '110px' }}><RouterLink className="inline-block" href="">Settings</RouterLink></li>
                    <li className="bg-white shadow-lg px-4 py-2 dark:bg-gray-500 dark:text-white" style={{ minWidth: '110px' }}>
                        <form className="inline" onSubmit={logout}>
                            <button type="submit" className="inline-block" href="">Logout</button>
                        </form>
                    </li>
                </ul>
            )}

        </div>
    );
}

export default DropDown;
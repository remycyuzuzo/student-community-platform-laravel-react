import H3 from "../../../components/ui-elements/H3";
import { FaRocket, FaFacebook, FaGoogle, FaUser, FaBriefcase, FaPlusCircle } from "react-icons/fa"
import RouterLink from "../../../components/ui-elements/RouterLink";
import { useState } from "react";
import axios from "axios";
import Guest from "@/Layouts/GuestLayout";

function LoginPage() {

    const [isFormValidated, setFormValidated] = useState(false)
    const [formData, setFormData] = useState({})

    const formValidated = () => {
        if (formData.email.length <= 0) {
            setFormValidated(false)
            return
        } else if (formData.password.length <= 0) {
            setFormValidated(false)
            return
        }
        setFormValidated(true)
    }

    const handleSubmitData = async e => {
        e.preventDefault();
        if (!formValidated()) {
            return;
        }
        const url = "http://127.0.0.1:8000/login";
        const data = new FormData(e.taget);
        await axios.post(`${url}`, data).then(

        )
    }

    document.title = `Login`;
    return (
        <Guest>
            <div className="my-container py-8">
                <div className="flex lg:flex-row flex-col justify-center">
                    <div className="main-content lg:w-3/5 px-2">
                        <H3 className="text-center">Welcome back</H3>
                        <div className="h-full flex flex-col justify-center">
                            <form method="post" onSubmit={handleSubmitData}>
                                <div className="input mb-4">
                                    <div className="input-group flex items-center">
                                        <input type="email" placeholder="Email address" className="block w-full px-4 py-2 rounded-2xl dark:placeholder:text-gray-50 dark:bg-gray-500 dark:text-white" />
                                        <span className="-ml-10"><FaUser /></span>
                                    </div>

                                </div>
                                <div className="input mb-4">
                                    <div className="input-group flex items-center">
                                        <input type="password" placeholder="Password" className="block w-full px-4 py-2 rounded-2xl dark:placeholder:text-gray-50 dark:bg-gray-500 dark:text-white" />
                                        <span className="-ml-10"><FaBriefcase /></span>
                                    </div>

                                </div>
                                <RouterLink to="/forgot-password" className="text-blue-500">forgot your password?</RouterLink>
                                <div className="input mb-4 text-center">
                                    <button {...!isFormValidated && `disabled`} className="bg-blue-900 text-white px-5 py-2 rounded-2xl shadow-sm hover:shadow-md hover:w-32 transition-all text-center">
                                        <FaRocket className="inline-block" /> Sign in
                                    </button>
                                </div>
                            </form>

                            <div className="separator mb-4">
                                <div className="flex items-center justify-center">
                                    <div className="bg-gray-600 h-0.5 w-48"></div>
                                    <div className="w-10 text-center">Or</div>
                                    <div className="bg-gray-600 h-0.5 w-48"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="bg-blue-900 text-white px-3 py-2 rounded-md shadow-sm hover:shadow-md transition-all mx-2"><FaFacebook className="inline-block" /> continue with Facebook</button>
                                <button className="bg-white text-gray-800 px-3 py-2 rounded-md shadow-sm hover:shadow-md transition-all mx-2"><FaGoogle className="inline-block text-blue-600" /> continue with Google</button>
                            </div>
                            <div className="mt-7 text-center">
                                Don't have an account yet? <RouterLink to="/sign-up" className="text-blue-500">sign up now</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Guest>
    );
}

export default LoginPage;
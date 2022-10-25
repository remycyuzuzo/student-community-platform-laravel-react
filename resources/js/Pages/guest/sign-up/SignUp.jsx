import H3 from "../../../components/ui-elements/H3";
import { FaFacebook, FaGoogle, FaPlusCircle } from "react-icons/fa";
import RouterLink from "../../../components/ui-elements/RouterLink";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/inertia-react";
function SignUp() {
    return (
        <Guest>
            <Head title="Sign Up" />
            <div className="my-container py-8">
                <div className="flex lg:flex-row flex-col justify-center">
                    <div className="main-content lg:w-3/5 px-2">
                        <H3 className="text-center">Create your account</H3>
                        <div className="h-full flex flex-col justify-center">
                            <form method="post">
                                <div className="input md:flex">
                                    <input type="text" placeholder="First name" className="block w-full px-4 py-2 rounded-2xl mb-3 dark:placeholder:text-gray-50 dark:bg-gray-500 dark:text-white md:w-1/2 md:mr-1" />
                                    <input type="text" placeholder="Last name" className="block w-full px-4 py-2 rounded-2xl mb-3 dark:placeholder:text-gray-50 dark:bg-gray-500 dark:text-white md:w-1/2 md:ml-1" />
                                </div>
                                <div className="input mb-4">
                                    <label>Gender</label>
                                    <select className="inline-block cursor-pointer px-4 py-2 rounded-2xl ml-3 dark:bg-gray-500">
                                        <option disabled selected>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="input mb-4">
                                    <label className="block">How old are you?</label>
                                    <select className="inline-block cursor-pointer px-4 py-2 rounded-2xl ml-3 dark:bg-gray-500">
                                        <option disabled selected>day</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                    <select className="inline-block cursor-pointer px-4 py-2 rounded-2xl ml-3 dark:bg-gray-500">
                                        <option disabled selected>month</option>
                                        <option>January</option>
                                        <option>February</option>
                                    </select>
                                    <select className="inline-block cursor-pointer px-4 py-2 rounded-2xl ml-3 dark:bg-gray-500">
                                        <option disabled selected>Year</option>
                                        <option>1999</option>
                                        <option>2000</option>
                                    </select>
                                </div>
                                <div className="input mb-4">
                                    <input type="email" placeholder="Email address" className="block w-full px-4 py-2 rounded-2xl mb-3 dark:placeholder:text-gray-50 dark:bg-gray-500 dark:text-white" />
                                </div>
                                <div className="input mb-4">
                                    <input type="password" placeholder="Password" className="block w-full px-4 py-2 rounded-2xl mb-3 dark:placeholder:text-gray-50 dark:bg-gray-500 dark:text-white" />
                                </div>
                                <div className="input mb-4 text-center">
                                    <button className="bg-blue-900 text-white px-5 py-2 rounded-2xl shadow-sm hover:shadow-md hover:w-36 transition-all text-center">
                                        <FaPlusCircle className="inline-block" /> Join the fun
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
                                Already joined? <RouterLink to="/login" className="text-blue-500">login now!</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Guest>
    );
}

export default SignUp;
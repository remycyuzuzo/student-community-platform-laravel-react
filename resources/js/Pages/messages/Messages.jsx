import RightSection from "@/Components/myComponents/layouts/rightSideBar/RightSection";
import Alert from "@/Components/myComponents/ui-elements/Alert";
import H3 from "@/Components/myComponents/ui-elements/H3";
import Layout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/inertia-react";
import { isArray, toArray } from "lodash";
import { useEffect, useState } from "react";

function Messages({ userMessages }) {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        if (!isArray(userMessages)) {
            userMessages = toArray(userMessages)
        }
        let msgs = userMessages.map(msg => (
            <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 rounded-t-lg text-inherit">
                <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                    <img src="../assets/img/kal-visuals-square.jpg" alt="kal" className="w-full shadow-soft-2xl rounded-xl" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h6 className="mb-0 leading-normal text-sm">{`${msg.user.first_name} ${msg.user.last_name}`}</h6>
                    <p className="mb-0 leading-tight text-xs">Hi! I need more information..</p>
                </div>
                <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="javascript:;">Reply</a>
            </li>
        ))
        setMessages(msgs)
    }, []);
    return (
        <Layout>
            <div className="w-full max-w-full px-3 lg-max:mt-6 min-h-screen xl:w-4/12">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                        <h6 className="mb-0">Conversations</h6>
                    </div>
                    <div className="flex-auto p-4">
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            {userMessages.length > 0 ? messages : (
                                <Alert color={`orange`} message={`you don't have any conversation open`} />
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Messages;
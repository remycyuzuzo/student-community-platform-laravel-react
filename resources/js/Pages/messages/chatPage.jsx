import RightSection from "@/Components/myComponents/layouts/rightSideBar/RightSection";
import Alert from "@/Components/myComponents/ui-elements/Alert";
import Layout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import { isArray, toArray } from "lodash";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import CurrentUserMessageBox from "./CurrentUserMessage";
import OtherUserMessageBox from "./OtherUserMessage";

function ChatPage({ conversationToken, participantOne }) {
    const { data, setData, post, errors, processing, reset } = useForm({
        messageText: '',
        conversationTokenState: '',
    })
    const [messageState, setMessageState] = useState([])


    const loadMessage = async () => {
        let messages;
        await axios.get(route('getConversationMessage', conversationToken))
            .then(response => {
                if (response.data) {
                    messages = response.data;
                }
            })
            .catch(err => console.warn(err))
        if (!isArray(messages)) {
            messages = toArray(messages)
        }
        let comps = messages.map(message => (
            message.user_id == participantOne.id ? <OtherUserMessageBox key={message.id} message={message} /> : <CurrentUserMessageBox key={message.id} message={message} />
        ));
        setMessageState(comps)
    }
    useEffect(() => {
        loadMessage()
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        post(route('sendMessage', conversationToken))
    }

    return (
        <Layout>
            <div className=" sm:w-5/6 lg:w-11/12 xl:w-3/4 flex flex-col lg:flex-row mx-auto ">
                <div className="grow-8 lg:w-4/5 px-2  justify-between flex flex-col" style={{ height: `calc(100vh - 60px)` }}>
                    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 dark:border-gray-600">
                        <div className="relative flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <button type="button" className="inline-flex items-center justify-center rounded-lg h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                    <BiArrowBack />
                                </button>
                            </div>
                            <div className="relative">
                                <span className="absolute text-green-500 right-0 bottom-0">
                                    <svg width="20" height="20">
                                        <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <img src={`/storage/${participantOne.profile_pic}`} alt="" className="w-10 sm:w-16 h-10 object-cover sm:h-16 rounded-full" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <div className="text-2xl mt-1 flex items-center">
                                    <span className="text-gray-700 dark:text-gray-100 mr-3">{participantOne.first_name + ' ' + participantOne.last_name}</span>
                                </div>
                                <span className="text-lg text-gray-600 dark:text-gray-200">{/* USER TAG LINE */}</span>
                            </div>
                        </div>
                    </div>

                    <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                        {messageState.length > 0 ? messageState : (
                            <Alert color={`orange`} title="No message" message={`please start the conversation`} />
                        )}
                    </div>

                    <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                        <form onSubmit={handleSubmit} method="post" className="inline">
                            <div className="relative flex">
                                <input type="text" placeholder="Write your message" value={data.messageText} onChange={e => setData('messageText', e.target.value)} className="w-full focus:outline-none focus:placeholder-gray-400 dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-100 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />
                                <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                    <button type="submit" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                        <span className="font-bold">Send</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <RightSection />
            </div>
        </Layout>
    );
}

export default ChatPage;
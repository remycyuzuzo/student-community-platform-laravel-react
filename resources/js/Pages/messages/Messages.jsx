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
            <Alert color={blue} title={`somethis`} message={msg.user.first_name} />
        ))
        setMessages(msgs)
    });
    return (
        <Layout>
            <div className="main-content-wrapper sm:w-5/6 lg:w-11/12 xl:w-3/4 min-h-screen mx-auto pt-4 px-2">
                <Head title="My conversations" />
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="main-content lg:w-4/5 px-2">
                        <H3>My conversations</H3>
                        {messages.length > 0 ? messages : (
                            <Alert color={`orange`} title="You haven't made any conversation" message={'find someone to write to'} />
                        )}
                    </div>
                    <RightSection />
                </div>
            </div>
        </Layout>
    );
}

export default Messages;
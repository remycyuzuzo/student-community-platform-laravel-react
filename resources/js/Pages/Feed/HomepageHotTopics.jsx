import InputLabel from "@/Components/InputLabel";
import NewCommunityModal from "@/Components/myComponents/layouts/my-communities/NewCommunityModal";
import Card from "@/Components/myComponents/ui-elements/Card";
import H3 from "@/Components/myComponents/ui-elements/H3";
import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";



function HotTopicsList() {

    return (
        <>
            <div className="widget text-gray-600 dark:text-gray-200 mb-6">
                <H3 className="my-5">Start your own community</H3>
                <div className="topics">
                    <Link href="/new-community" className="bg-gray-900 text-blue-100 dark:bg-gray-600 dark:text-gray-100 rounded-3xl px-6 py-3"><BiPlusCircle className="inline-block" /> New Community </Link>
                </div>
            </div>
        </>


    );
}

export default HotTopicsList;
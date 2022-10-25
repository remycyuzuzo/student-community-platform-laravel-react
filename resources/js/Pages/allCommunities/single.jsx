import MembersList from "@/Components/myComponents/layouts/my-communities/MembersList";
import Layout from "@/Layouts/AppLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import { BiCheckCircle, BiPaperPlane, BiPlusCircle } from "react-icons/bi";
import CommunityPostList from "../Posts/CommunityPostList";
import CreatePostForm from "./CreatePostForm";

function Community(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        community_unique_id: props.communityInfo.unique_id,
        type: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        let actionUrl = (props.is_member) ? `/leave-community` : `/join-community`;
        post(actionUrl)
    };

    useEffect(() => { }, [])

    return (
        <Layout>
            <Head title={`${props.communityInfo.name}`} />
            <div className="min-h-screen">
                <div className=" grow-1">
                    <div className="header py-6 px-3 bg-slate-400 dark:bg-slate-600">
                        <div className="sm:w-5/6 lg:w-11/12 mx-auto xl:w-3/4">
                            <div className="flex justify-center py-3">
                                <h1 className="text-center text-2xl font-extrabold">{props.communityInfo.name}</h1>
                            </div>
                            <div className="circle shadow-xl rounded-full bg-orange-100 w-20 h-20 flex items-center justify-center text-blue-900 font-weight-bolder text-2xl border-gray-300 -mb-16">
                                {props.communityInfo.name.split(' ')[0][0]}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="sm:w-5/6 lg:w-11/12 mx-auto xl:w-3/4 pt-16 px-3">
                            <div className="flex gap-6  justify-between">
                                <div className="grow-1">
                                    <div className="flex items-center gap-4">
                                        <h1 className="text-2xl font-extrabold">{props.communityInfo.name}</h1>
                                        {props.is_member && (
                                            <form data-action={`/leave-community`} onSubmit={handleSubmit} method="post">
                                                <input type="hidden" name="community_unique_id" onLoad={e => setData('community_unique_id', e.target.value)} value={props.communityInfo.unique_id} />
                                                <button type="submit" className="bg-white shadow-lg dark:bg-slate-700 dark:hover:bg-slate-600 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                                                    <BiCheckCircle className="inline-block" /> joined
                                                </button>
                                            </form>
                                        )}
                                        {!props.is_member && (
                                            <form data-action={`/join-community`} onSubmit={handleSubmit} method="post">
                                                <input type="hidden" name="community_unique_id" onLoad={e => setData('community_unique_id', e.target.value)} value={props.communityInfo.unique_id} />
                                                <button type="submit" className="bg-white shadow-lg dark:bg-slate-700 dark:hover:bg-slate-600 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                                                    <BiPlusCircle className="inline-block" /> join now
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                    <div className="my-3">
                                        {props.is_member && (
                                            <CreatePostForm communityId={props.communityInfo.id} />
                                        )}
                                    </div>

                                    <div className="my-3">
                                        <CommunityPostList communityId={props.communityInfo.unique_id} />
                                    </div>
                                </div>

                                <div className="sidebar">
                                    {(props.members) ? (
                                        <MembersList membersList={props.members} />
                                    ) : (
                                        `No member`
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    );
}

export default Community;
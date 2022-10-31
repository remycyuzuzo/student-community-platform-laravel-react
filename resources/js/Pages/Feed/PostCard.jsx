// import pazzoPic from "@/assets/images/WIN_20220824_10_32_22_Pro.jpg"

import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";
import { timeSince } from "@/functions/timeAgo";
import { toArray } from "lodash";
import { BsArrowUp } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri"

function SinglePostCard({ postInfo }) {
    const handleReact = () => { }

    return (
        <div className="bg-white dark:bg-gray-700 dark:text-slate-300 mb-3 rounded-2xl shadow-md p-4 hover:border-blue-300 dark:hover:bg-gray-600 transition-all">
            <div className="card-header flex">
                <div className="profile-pic w-12 h-12 rounded-full overflow-hidden bg-slate-700">
                    <RouterLink to={`/u/${postInfo.user.username}`}>
                        <img src={`/storage/${postInfo.user.profile_pic}`} className="object-cover w-full h-full" />
                    </RouterLink>
                </div>
                <div className="pl-4">
                    <div className="flex gap-4">
                        <div className="user-full-name font-bold dark:text-gray-200">
                            <RouterLink to={`/u/${postInfo.user.username}`}>
                                {`${postInfo.user.first_name} ${postInfo.user.last_name}`}
                            </RouterLink>
                        </div>
                        {timeSince(postInfo.created_at)}
                    </div>
                    <div className="username text-gray-600 text-sm dark:text-gray-400">
                        University of Rwanda
                    </div>
                </div>
            </div>
            <div className="post-content py-3 font-raleway">
                {postInfo.post_texts}
            </div>
            <div className="foot flex items-center">
                <button onClick={handleReact} className="flex rounded-2xl bg-blue-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-500 dark:text-gray-200 p-1">
                    <span className="w-6 h-6 flex items-center justify-center bg-white dark:bg-gray-400 rounded-full p-1 text-sm"><BsArrowUp /></span>
                    <span className="inline-block px-2 text-sm">{toArray(postInfo.reactions).length}</span>
                </button>
                <a href="/" className="reactions bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-500 dark:text-gray-300 p-1 inline-block ml-2 rounded-md shadow-sm">
                    <RiMessage3Fill className="inline-block" />
                    <span className="px-2">answer</span>
                </a>
                {/* <div className="fans pl-4 flex">
                    <div className="shadow-md border-2 border-solid w-10 h-10 -mx-1 bg-slate-300 dark:bg-gray-400 rounded-full overflow-hidden border-white dark:border-gray-400">
                        
                    </div>
                    <div className="shadow-md border-2 border-solid w-10 h-10 -mx-1 bg-slate-300 dark:bg-gray-400 rounded-full overflow-hidden border-white dark:border-gray-400">
                        
                    </div>
                    <a href="/" title="23 people in this conversation" className="shadow-md border-2 border-solid flex items-center px-2 h-10 -mx-1 bg-slate-300 dark:bg-slate-700 text-white dark:text-gray-300 font-bold rounded-2xl overflow-hidden border-white dark:border-gray-400">
                        +23
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default SinglePostCard;

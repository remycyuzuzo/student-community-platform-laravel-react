import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";
import { MdGroup } from "react-icons/md";
import SinglePostCard from "./PostCard";

function SingleHomePagePostWidget({ postInfo }) {
    return (
        <div>
            <div className="my-6">
                <h1 className="my-2 dark:text-gray-400 text-gray-500 text-sm">
                    <MdGroup className="inline-block mr-3" />
                    Posted in <RouterLink to={`/c/${postInfo.community.unique_id}`} className="dark:bg-gray-600 inline-block bg-white rounded-md px-2">{postInfo.community.name}</RouterLink>
                </h1>
                <SinglePostCard key={postInfo.id} postInfo={postInfo} />
            </div>
        </div>
    );
}

export default SingleHomePagePostWidget;
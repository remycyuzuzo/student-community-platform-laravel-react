// import sampleImg from "@/"
import RouterLink from "../../ui-elements/RouterLink";

function CommunityListItem({ community }) {
    return (
        <div className="rounded-xl bg-gray-100 shadow-2xl dark:shadow-gray-900 dark:bg-gray-600 dark:hover:bg-gray-600 overflow-hidden flex mb-2">
            <div className="w-3 bg-blue-200 dark:bg-gray-500">
                <RouterLink to={`/c/${community.community.unique_id}`}>
                    {/* <img src={sampleImg} className="object-cover w-full h-full" /> */}
                </RouterLink>
            </div>
            <div className="community-details grow-1 pl-4 pr-2 py-2">
                <div className="flex justify-between align-start w-full">
                    <RouterLink to={`/c/${community.community.unique_id}`} className="text-gray-700 dark:text-gray-300 text-ellipsis w-10/12" title={community.community.name}>
                        {community.community.name}
                    </RouterLink>
                </div>
            </div>
        </div >
    );
}

export default CommunityListItem;
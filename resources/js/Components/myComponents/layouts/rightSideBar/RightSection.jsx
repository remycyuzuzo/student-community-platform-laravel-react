import EventList from "@/Pages/Feed/Events";
import HotTopicsList from "@/Pages/Feed/HomepageHotTopics";
import CommunityList from "../my-communities/CommunityList";


function RightSection() {
    return (
        <div className="other grow-3 lg:w-2/5 lg:ml-3">
            <HotTopicsList />
            <CommunityList />
            <EventList />
        </div>
    );
}

export default RightSection;
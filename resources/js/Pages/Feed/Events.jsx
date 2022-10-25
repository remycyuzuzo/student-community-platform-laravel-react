import Card from "@/Components/myComponents/ui-elements/Card";
import H3 from "@/Components/myComponents/ui-elements/H3";
import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";
import SingleEventListItem from "./SingleEventListItem";


function EventList() {
    return (
        <Card>
            <div className="flex justify-between card-header mb-2">
                <H3 className="mb-3">Events</H3>
                <RouterLink to="/events" className="text-slate-600 dark:text-gray-300">view all events</RouterLink>
            </div>
            <SingleEventListItem />
            <SingleEventListItem />
            <SingleEventListItem />
        </Card>
    );
}

export default EventList;
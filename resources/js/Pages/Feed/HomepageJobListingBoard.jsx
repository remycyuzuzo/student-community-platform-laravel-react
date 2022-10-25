import Card from "@/Components/myComponents/ui-elements/Card";
import H3 from "@/Components/myComponents/ui-elements/H3";
import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";
import HomepageJobListingItem from "./HomepageJobListingItem";

function HomepageJobListing() {
    return (
        <Card>
            <div className="flex justify-between card-header mb-2">
                <H3>Job listing board</H3>
                <RouterLink to="/events" className="dark:text-gray-300">view all jobs</RouterLink>
            </div>
            <HomepageJobListingItem />
            <HomepageJobListingItem />
            <HomepageJobListingItem />
        </Card>
    );
}

export default HomepageJobListing;
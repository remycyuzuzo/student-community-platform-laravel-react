import SingleCommunityWidget from "@/Components/myComponents/layouts/my-communities/SingleCommunityWidget";
import H3 from "@/Components/myComponents/ui-elements/H3";
import Layout from "@/Layouts/AppLayout";
import { useEffect, useState } from "react";
import { AiOutlineAccountBook } from "react-icons/ai";

function DiscoverPage(props) {
    const [communities, setCommunities] = useState([])

    useEffect(() => {
        const c = props.communities.map((community) => {
            return (
                <SingleCommunityWidget communityInfo={community} url={`${props.ziggy.url}/c/${community.unique_id}`} key={community.unique_id} />
            );
        })
        setCommunities(c)
    }, []);

    return (
        <Layout>
            <div className="min-h-screen">
                <div className=" sm:w-5/6 lg:w-11/12 mx-auto xl:w-3/4 pt-4 px-2">
                    <H3 className="my-4 text-2xl"><AiOutlineAccountBook className="inline-block mr-2" /> Suggested communities for you</H3>
                    <div className="suggested-communities grid grid-cols-12 gap-4">
                        {communities}
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default DiscoverPage;
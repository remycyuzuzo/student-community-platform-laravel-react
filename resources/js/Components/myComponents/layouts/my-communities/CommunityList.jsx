import Card from "@/Components/myComponents/ui-elements/Card";
import H3 from "@/Components/myComponents/ui-elements/H3";
import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";
import axios from "axios";
import { isArray, toArray } from "lodash";
import { useEffect, useState } from "react";
import CommunityListItem from "./CommunityListItem";


function CommunityList(props) {
    const [communities, setCommunities] = useState([]);
    const loadCommunities = async () => {
        await axios.get(`/get/my-communities`)
            .then(response => {
                let responseData = response.data;
                if (!isArray(responseData)) {
                    responseData = toArray(responseData)
                }
                const results = responseData.map(community => (
                    <CommunityListItem key={community.id} community={community} />
                ))
                setCommunities(results)
            })
            .catch(err => console.warn(err))
    }
    useEffect(() => {
        loadCommunities()
    }, [])
    return (
        <Card>
            <div className="flex justify-between align-start">
                <H3 className="mb-3">My communities</H3>
                <RouterLink to="/discover" title="view all">view all</RouterLink>
            </div>
            {communities}
        </Card>
    );
}

export default CommunityList;
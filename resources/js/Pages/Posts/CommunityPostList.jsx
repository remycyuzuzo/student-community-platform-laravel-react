import Alert from "@/Components/myComponents/ui-elements/Alert";
import axios from "axios";
import { isArray, toArray } from "lodash";
import { useEffect, useState } from "react";
import SinglePostCard from "../Feed/PostCard";

function CommunityPostList({ communityId }) {
    const [postList, setPostList] = useState([])

    const loadPostList = async () => {
        await axios.get(route('allPost', communityId))
            .then(response => {
                console.log(response.data);
                let responseData = response.data;
                if (!isArray(responseData)) {
                    responseData = toArray(responseData);
                }
                let dt = responseData.map(res => (
                    <SinglePostCard key={res.id} postInfo={res} />
                ))
                setPostList(dt)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        loadPostList()
    }, [])

    return (
        <>
            {postList.length > 0 ? (
                postList
            ) : (
                <Alert color="orange" title="no posts" message="It seems there are no posts available in this community" />
            )}
        </>
    );
}

export default CommunityPostList;
import Alert from "@/Components/myComponents/ui-elements/Alert";
import axios from "axios";
import { isArray, toArray } from "lodash";
import { useEffect, useState } from "react";
import SingleHomePagePostWidget from "../Feed/SingleHomePagePostWidget";

function UserPostList({ userId }) {
    const [postList, setPostList] = useState([])

    const loadPostList = async () => {
        await axios.get(route('showUserProfile', userId))
            .then(response => {
                let responseData = response.data;
                if (!isArray(responseData)) {
                    responseData = toArray(responseData);
                }
                let dt = responseData.map(res => (
                    <SingleHomePagePostWidget key={res.id} postInfo={res} />
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

export default UserPostList;
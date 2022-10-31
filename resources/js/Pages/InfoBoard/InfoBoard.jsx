import Alert from "@/Components/myComponents/ui-elements/Alert";
import Layout from "@/Layouts/AppLayout";
import { isArray, toArray } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import SinglePostListItem from "./SinglePostListItem";

function InfoBoard({ posts }) {
    const [postsState, setPostState] = useState([]);
    useEffect(() => {
        if (!isArray(posts)) {
            posts = toArray(posts)
        }
        const postList = posts.map(post => (
            <SinglePostListItem key={post.id} post={post} />
        ))
        setPostState(postList);
    }, [])
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {posts.length > 0 ? postsState : (
                            <Alert color={`blue`} title={`No stories available now`} message={`Please come back later`} />
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default InfoBoard;
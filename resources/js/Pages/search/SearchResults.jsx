import React, { useEffect, useState } from "react";
import RightSection from "@/Components/myComponents/layouts/rightSideBar/RightSection";
import { Head } from "@inertiajs/inertia-react";
import H3 from "@/Components/myComponents/ui-elements/H3";
import Guest from "@/Layouts/GuestLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Layout from "@/Layouts/AppLayout";
import { isArray } from "lodash";
import UserWidget from "../userProfile/StudentWidget";
import SingleCommunityWidget from "@/Components/myComponents/layouts/my-communities/SingleCommunityWidget";


function SearchResults({ users, communities, posts, keyword, ziggy }) {
    const [userState, setUsers] = useState([]);
    const [communityState, setCommunities] = useState([]);
    const [postState, setPosts] = useState([]);

    const getUsers = () => {
        if (isArray(users)) {
            setUsers(users.map(user => (
                <UserWidget userInfo={user} key={user.username} />
            )));
        }
    }
    const getCommunities = () => {
        if (isArray(communities)) {
            setCommunities(communities.map(community => (
                <SingleCommunityWidget communityInfo={community} key={community.unique_id} url={`${ziggy.url}/c/${community.unique_id}`} />
            )))
        }
    }

    // const getPosts = () => {
    //     if (isArray(posts)) {
    //         postState = posts.map(post => (
    //             <SingleCommunityWidget communityInfo={post} />
    //         ))
    //     }
    // }

    useEffect(() => {
        getUsers()
        getCommunities()
    }, [])




    return (
        <Layout>
            <div className="main-content-wrapper sm:w-5/6 lg:w-11/12 xl:w-3/4 min-h-screen mx-auto pt-4 px-2">
                <Head title={`searched Search Results`} />
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="main-content lg:w-4/5 px-2">
                        <H3>You searched "{keyword}"</H3>
                        <div className="latest-posts my-2">
                            {users && (
                                <>
                                    <H3 className="bg-white px-4 dark:bg-gray-500 py-1 rounded-md mb-3">Found {users.length} users</H3>
                                    {userState}
                                </>
                            )}
                            {communities && (
                                <>
                                    <H3 className="bg-white px-4 dark:bg-gray-500 py-1 rounded-md mb-3">Found {communities.length} communities</H3>
                                    <div className="grid grid-cols-12 gap-3">
                                        {communityState}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <RightSection />
                </div>
            </div>
        </Layout>
    );
}

export default SearchResults;

import RightSection from "@/Components/myComponents/layouts/rightSideBar/RightSection";
import Card from "@/Components/myComponents/ui-elements/Card";
import H3 from "@/Components/myComponents/ui-elements/H3";
import Layout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/inertia-react";
import UserPostList from "../Posts/UserPostList";
import UserWidget from "./StudentWidget";

function UserProfile({ userInfo }) {
    return (
        <Layout>
            <div className="main-content-wrapper sm:w-5/6 lg:w-11/12 xl:w-3/4 min-h-screen mx-auto pt-4 px-2">
                <Head title={`${userInfo.first_name} ${userInfo.last_name}`} />
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="main-content lg:w-4/5 px-2">
                        <h2>student profile</h2>
                        <div className="std-info mt-5">
                            <UserWidget userInfo={userInfo} />
                            <div className="interests my-3">
                                <div className="flex gap-2 flex-wrap">
                                    <H3>Interests</H3>
                                    <button className="bg-white dark:bg-slate-700 dark:hover:bg-slate-600 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all">Computers</button>
                                    <button className="bg-white dark:bg-slate-700 dark:hover:bg-slate-600 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all">Coding</button>
                                    <button className="bg-white dark:bg-slate-700 dark:hover:bg-slate-600 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all">Data sciences</button>
                                    <button className="bg-white dark:bg-slate-700 dark:hover:bg-slate-600 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all">...</button>
                                </div>
                            </div>
                            <div className="std-about my-5">
                                <H3 className="mt-2 mb-3">About {`${userInfo.first_name}`}</H3>
                                <p>
                                    {(userInfo.bio) ?
                                        userInfo.bio
                                        : (
                                            <span>No bio</span>
                                        )}
                                </p>
                            </div>
                            {/* Public posts & replies */}
                            <div className="my-3">
                                <H3 className="mb-3">{userInfo.first_name}'s recent activities</H3>
                                <UserPostList userId={userInfo.id} />
                            </div>
                        </div>
                    </div>
                    <RightSection />
                </div>
            </div>
        </Layout>
    );
}

export default UserProfile;
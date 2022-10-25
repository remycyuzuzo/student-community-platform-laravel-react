import React, { useEffect, useState } from "react";
import RightSection from "@/Components/myComponents/layouts/rightSideBar/RightSection";
import { Head } from "@inertiajs/inertia-react";
import H3 from "@/Components/myComponents/ui-elements/H3";
import Layout from "@/Layouts/AppLayout";
import { isArray, toArray } from "lodash";
import SingleHomePagePostWidget from "./Feed/SingleHomePagePostWidget";


function Homepage() {

  const [postList, setPostList] = useState([])

  const loadPostList = async () => {
    await axios.get(route('allCommunitiesPosts'))
      .then(response => {
        console.log(response.data);
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
    <Layout>
      <div className="main-content-wrapper sm:w-5/6 lg:w-11/12 xl:w-3/4 min-h-screen mx-auto pt-4 px-2">
        <Head title="Homepage - Online Student Community Platform" />
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="main-content lg:w-4/5 px-2">
            <H3>Feeds</H3>
            <div className="latest-posts my-2">
              {isArray(postList) ? postList : (
                <div style="border-top-color:transparent" className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
              )}
            </div>
          </div>
          <RightSection />
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;


import RightSection from "@/Components/myComponents/layouts/rightSideBar/RightSection";
import H3 from "@/Components/myComponents/ui-elements/H3";
import { Head } from "@inertiajs/inertia-react";
import SinglePostCard from "./PostCard";

function Homepage() {
  return (
    <>
    <Head title="Home page - Online Student Community Platform" />
    <div className="main-content-wrapper sm:w-5/6 lg:w-11/12 xl:w-3/4 min-h-screen mx-auto pt-4 px-2">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="main-content lg:w-4/5 px-2">
          <H3>Feeds</H3>
          <div className="latest-posts my-2">
            <SinglePostCard />
            <SinglePostCard />
            <SinglePostCard />
          </div>
        </div>
        <RightSection />
      </div>
    </div>
    </>      
  )
}

export default Homepage;

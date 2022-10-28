
import { RiMessage3Fill } from "react-icons/ri";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";

function UserWidget({ userInfo }) {
    // console.log(userInfo);
    return (
        <div className="flex flex-wrap gap-3 mb-4 justify-center md:justify-start md:gap-5">
            <div className="profile-image relative w-48 h-48">
                <img src={`/storage/${userInfo.profile_pic}`} className="rounded-2xl w-full h-full object-cover drop-shadow-xl" />
                <span className="onlineStatus absolute bottom-0 right-0 bg-green-600 opacity-90 rounded-lg px-3 text-white">online</span>
            </div>
            <div className="flex flex-col justify-around ">
                <div>
                    <RouterLink to={`/u/${userInfo.username}`}>
                        <h2 className=" text-2xl">{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                    </RouterLink>
                    <p>Student at INES Ruhengeri</p>
                </div>
                <div>

                    <RouterLink to={route('messageRouter', userInfo.username)} className="px-5 py-2 rounded-xl bg-blue-700 text-white"><RiMessage3Fill className="inline-block" /> message</RouterLink>
                    <RouterLink className="px-2 py-2 rounded-xl bg-orange-200 text-blue-900 ml-2"><BsFillBookmarkPlusFill className="inline-block" /> save</RouterLink>
                </div>
            </div>
        </div>
    );
}

export default UserWidget;
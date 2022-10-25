// import croudPeople from "../../../assets/images/135112609-crowd-of-people-icon-people-men-symbol.webp"

import { AiOutlineUsergroupAdd } from "react-icons/ai"
import RouterLink from "../../ui-elements/RouterLink";
function SingleCommunityWidget(props) {
    return (
        <>
            <div className="relative overflow-hidden rounded-lg col-span-12 sm:col-span-6 md:col-span-4 hover:shadow-lg hover:scale-105 transition-all lg:col-span-4 xl:col-span-3">
                <RouterLink to={`${props.url}`} >
                    <figure className="flex flex-col gap-4 sm:block dark:bg-gray-700 bg-white">
                        <div className="img-container w-4/12 sm:w-full">
                            <div className="circle text-gray-400 dark:bg-gray-600 rounded-full font-extrabold bg-orange-50 w-32 h-32 flex items-center justify-center font-weight-bolder text-4xl border-gray-300 -mb-16">
                                {props.communityInfo.name.split(' ')[0][0]}
                            </div>
                        </div>
                        <figcaption className="p-3 py-4 sm:min-h-[99px] w-8/12 sm:w-full flex flex-col justify-around">
                            <p className="sm:text-center block">{props.communityInfo.name}</p>
                            <div className="sm:text-center my-3 transition">
                                <button className="px-5 py-2 hover:bg-blue-900 inline-block rounded-lg bg-blue-800 dark:bg-slate-500 text-white"><AiOutlineUsergroupAdd className="inline-block mr-3" /> learn more</button>
                            </div>
                        </figcaption>
                    </figure>
                </RouterLink>
            </div>
        </>
    );
}

export default SingleCommunityWidget;
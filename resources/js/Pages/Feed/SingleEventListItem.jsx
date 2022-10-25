import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";


function SingleEventListItem() {
    return (
        <RouterLink  to="/" className="p-2 flex mb-2 bg-slate-100 dark:bg-gray-600 rounded-lg">
            <div className="companyIcon w-10 h-10 rounded-full border border-slate-400 bg-slate-200 dark:bg-gray-600">
                {/* <img src={} /> */}
            </div>
            <div className="px-4">
                <div className="eventName font-bold text-gray-600 dark:text-gray-300">
                    College Application deadline
                </div>
                <div className="text-slate-400 flex justify-between flex-wrap">
                    <span>10th Dec, 2022</span>
                    <span className="text-sm">3 weeks left</span>
                </div>
            </div>
        </RouterLink>
    );
}

export default SingleEventListItem;
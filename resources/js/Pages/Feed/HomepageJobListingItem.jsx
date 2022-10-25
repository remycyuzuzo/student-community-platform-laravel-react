function HomepageJobListingItem() {
    return (
        <div className="p-2 flex mb-2 bg-slate-100 dark:bg-gray-800 rounded-lg">
            <div className="companyIcon w-20 h-24 rounded-2xl bg-slate-200 dark:bg-gray-600">
                {/* <img src={} /> */}
            </div>
            <div className="px-4">
                <div className="eventName font-bold">
                    College Application deadline
                </div>
                <div className="text-slate-400 flex justify-between flex-wrap">
                    <span>10th Dec, 2022</span>
                    <span className="text-sm">3 weeks left</span>
                </div>
            </div>
        </div>
    );
}

export default HomepageJobListingItem;
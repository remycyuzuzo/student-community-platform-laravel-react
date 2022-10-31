import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";

function SinglePostListItem({ post }) {
    return (


        <div className="p-4 md:w-1/3">
            <div className="h-full rounded-lg overflow-hidden bg-white dark:bg-gray-600 shadow-md">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`/storage/${post.thumb}`} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.category}</h2>
                    <h1 className="title-font text-lg dark:text-gray-100 font-medium mb-3">{post.title}</h1>
                    <p className="leading-relaxed mb-3">

                    </p>
                    <div className="flex items-center flex-wrap ">
                        <RouterLink to={route('singleBlogPage', post.id)} className="text-indigo-500 dark:text-indigo-200 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SinglePostListItem;
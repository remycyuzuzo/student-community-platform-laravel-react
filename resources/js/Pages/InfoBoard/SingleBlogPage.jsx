import { timeSince } from "@/functions/timeAgo";
import Layout from "@/Layouts/AppLayout";

function SingleBlogPage({ post }) {
    return (
        <Layout>
            <div className="bg-gray-100 dark:bg-gray-600">

                <section className=" body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 className="flex-grow sm:pr-16 text-2xl text-center my-4 font-medium title-font">{post.title}</h1>
                        </div>
                        <p className="text-center">{`posted ${timeSince(post.created_at)} | last updated ${timeSince(post.updated_at)}`}</p>
                        <p className="text-center"><i>by </i> {`${post.user.first_name} ${post.user.last_name}`}</p>
                    </div>
                </section>
            </div>
            <section>
                <div className="container mx-auto py-7">
                    <div className="story flex justify-center gap-8">
                        <div className="content w-full lg:w-1/2">
                            <div className="thumb">
                                <img src={`/storage/${post.thumb}`} alt={post.title} className={`w-full object-cover`} />
                            </div>
                            <div className="body mt-6" dangerouslySetInnerHTML={{ __html: post.body }} />
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}

export default SingleBlogPage;
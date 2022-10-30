import H3 from "@/Components/myComponents/ui-elements/H3";
import Layout from "@/Layouts/AppLayout";

function SchoolProfile({ school }) {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto">
                    <div className="header my-6">
                        <div className="flex gap-4">
                            {school.logo ? (
                                <img src={`/storage/${school.logo}`} className=" w-32 h-32 object-cover" />
                            ) : (
                                <div className="circle shadow-xl bg-orange-100 w-40 h-40 flex items-center justify-center text-blue-900 font-weight-bolder text-2xl border-gray-300">
                                    {school.school_name.split(' ')[0][0]}
                                </div>
                            )}
                            <div className="py-3 flex flex-col items-around">
                                <h1 className="text-center text-2xl font-extrabold">{school.school_name}</h1>
                                <p className=" text-gray-500">{school.province.name}</p>
                            </div>
                        </div>
                    </div>
                    <main>
                        <div className="lg:w-2/3">
                            <H3>About</H3>
                            <p>{school.school_bio ? school.school_bio : 'no bio'}</p>

                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

export default SchoolProfile;
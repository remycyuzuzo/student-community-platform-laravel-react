import RouterLink from "@/Components/myComponents/ui-elements/RouterLink";

function SingleSchoolWidget({ school }) {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <RouterLink to={route('schoolProfile', school.id)} className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </RouterLink>
            <div className="mt-4">
                <RouterLink to={route('schoolProfile', school.id)}>
                    <h2 className="text-lg dark:text-gray-50 font-medium">{school.school_name}</h2>
                </RouterLink>
                <p className="mt-1 dark:text-gray-400 text-sm">Institution in {school.province.name}</p>
            </div>
        </div>
    );
}

export default SingleSchoolWidget;
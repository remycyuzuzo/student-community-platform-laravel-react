import { isArray, toArray } from "lodash";
import { useEffect, useState } from "react";
import SingleSchoolWidget from "./SingleSchoolWidget";

function SchoolList({ schoolList }) {
    const [schoolsState, setSchoolsState] = useState([]);
    useEffect(() => {
        if (!isArray(schoolList)) {
            schoolList = toArray(schoolList);
        }
        let list = schoolList.map(school => (
            <SingleSchoolWidget key={school.id} school={school} />
        ))

        setSchoolsState(list)
    }, [])
    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24">
                <div className="flex flex-wrap -m-4">
                    {schoolsState}
                </div>
            </div>
        </section>
    );
}

export default SchoolList;
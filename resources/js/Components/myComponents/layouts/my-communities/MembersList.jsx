import { toArray } from "lodash";
import { useEffect, useState } from "react";
import H3 from "../../ui-elements/H3";

function MembersList({ membersList }) {
    const [members, setMembers] = useState([]);


    const findMembers = () => {
        const data = toArray(membersList).map(member => {
            return (
                <div className="flex flex-wrap" key={member.user.username}>
                    <div className="p-2 w-full">
                        <div className="h-full flex items-center border-gray-200 rounded-lg">
                            {member.user.profile_pic ? (
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={`/storage/${member.user.profile_pic}`} />
                            ) : (
                                <div className="circle text-gray-400 rounded-full font-extrabold bg-orange-50 w-32 h-32 flex items-center justify-center font-weight-bolder text-4xl border-gray-300 -mb-16">
                                    {member.user.first_name.split(' ')[0][0]}
                                </div>
                            )}
                            <div className="flex-grow">
                                <h2 className="title-font font-medium">{`${member.user.first_name} ${member.user.last_name}`}</h2>
                                <p className="text-gray-500">{member.role == "standard" ? `member` : (
                                    <span className="bg-white px-3 rounded-md"> Mod</span>
                                )}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        setMembers(data)
    }


    useEffect(() => {
        findMembers();
    }, [])

    return (
        <>
            <H3 className='mt-3'>{toArray(membersList).length} members</H3>
            {members}
        </>
    );
}

export default MembersList;
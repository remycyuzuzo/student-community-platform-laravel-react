import { timeSince } from "@/functions/timeAgo";

function CurrentUserMessageBox({ message }) {
    return (
        <div className="chat-message">
            <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 max-w-xs mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.message}</span></div>
                    <span className="text-xs text-gray-400"> {timeSince(message.created_at)} </span>
                </div>
                <img src={`/storage/${message.user.profile_pic}`} alt="My profile" className="w-6 h-6 rounded-full order-2" />
            </div>
        </div>
    );
}

export default CurrentUserMessageBox;
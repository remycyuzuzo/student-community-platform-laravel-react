import { timeSince } from "@/functions/timeAgo";

function OtherUserMessageBox({ message }) {
    return (
        <div className="chat-message">
            <div className="flex items-end">
                <div className="flex flex-col space-y-2 max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 dark:text-gray-100 dark:bg-gray-500">{message.message}</span></div>
                    <span className="text-xs text-gray-400"> {timeSince(message.created_at)} </span>
                </div>
                <img src={`/storage/${message.user.profile_pic}`} alt="My profile" className="w-6 h-6 rounded-full order-1" />
            </div>
        </div>
    );
}

export default OtherUserMessageBox;
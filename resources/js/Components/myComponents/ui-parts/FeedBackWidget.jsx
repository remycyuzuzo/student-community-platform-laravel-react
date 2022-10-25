import someIcon from "../../assets/icons/some-icon.svg"

function FeedBackWidget() {
    return (
        <div className="w-full h-full">
            <div className="absolute bottom-0 right-0 mr-8 mb-32 ">
                <div className="bg-white rounded-lg shadow-md px-4 py-2 border-1 border-gray-400">
                    Was this doc helpful to you?
                    <img src={someIcon} />
                </div>
            </div>
        </div>
    );
}

export default FeedBackWidget;
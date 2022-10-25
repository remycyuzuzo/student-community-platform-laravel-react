import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import { FaCheck } from "react-icons/fa";

function CreatePostForm({ communityId }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        post_texts: '',
        communityId: communityId
    });
    const handleSendPost = (e) => {
        e.preventDefault();
        post(route('new-post'));
    }
    return (

        <>
            <form onSubmit={handleSendPost} method="post">
                <textarea className=" rounded-3xl w-full h-32 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-300" onChange={(e) => setData('post_texts', e.target.value)} value={data.post_texts} name="post_texts" placeholder="Create a new post!">

                </textarea>
                <InputError message={errors.post_texts} className="my-2" />
                <InputError message={errors.communityId} className="my-2" />

                <button type="submit" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-2xl text-lg">
                    <FaCheck className="inline-block" />  &nbsp; Post
                </button>

            </form>

        </>
    );
}

export default CreatePostForm;
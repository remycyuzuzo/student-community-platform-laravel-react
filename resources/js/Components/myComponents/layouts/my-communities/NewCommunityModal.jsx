import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import Card from "../../ui-elements/Card";
import H3 from "../../ui-elements/H3";
import Modal from "../../ui-parts/Modal";
import Select from 'react-select'
import { useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";

function NewCommunityModal({ onCloseModal }) {
    const options = [{ value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }]

    const { data, setData, post, processing, errors, reset } = useForm({
        communityName: '',
        fields: '',
        bio: '',
        communityTopics: '',
    });
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('new-community'));
    };

    return (
        <Modal>
            <Card className="shadow-2xl dark:shadow-gray-900 w-full md:w-4/5 lg:w-1/2 xl:w-1/3 dark:border dark:border-gray-500">
                <div className="flex items-center justify-between">
                    <H3>Start your own community</H3>
                    <button onClick={onCloseModal}>
                        <FaTimes className=" scale-125" />
                    </button>
                </div>
                <form onSubmit={submit} method="post" encType="multipart/form-data">
                    <div className="mt-3">
                        <InputLabel forInput="communityName">Community name</InputLabel>
                        <TextInput handleChange={onHandleChange} type="text" name="communityName" className="block w-full" placeHolder="What is the commnuity name?" />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-3">
                        <InputLabel forInput="communityTopics">Community fields</InputLabel>

                        <select name="communityTopics" className="block w-full">
                            <option></option>
                        </select>

                        <InputError message={errors.communityTopics} className="mt-2" />

                    </div>

                    <div className="mt-3">
                        <InputLabel forInput="bio">Community bio</InputLabel>
                        <textarea onChange={e => setData('bio', e.target.value)} placeholder="Describe this community" className="block w-full border-gray-300 dark:border-gray-500 focus:border-indigo-300 dark:focus:border-gray-500 dark:placeholder:text-gray-500 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100"></textarea>
                        <InputError message={errors.bio} className="mt-2" />

                    </div>

                    <div className="mt-3">
                        <PrimaryButton type="primary">
                            <FaCheckCircle className="inline-block mr-3" /> Create
                        </PrimaryButton>
                    </div>

                </form>
            </Card>
        </Modal>
    );
}

export default NewCommunityModal;
import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        fname: '',
        lastName: '',
        password: '',
        password_confirmation: '',
        gender: '',
        profilePic: null,
        email: ''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} method="post" encType="multipart/form-data">
                <div>
                    <InputLabel forInput="name" value="First Name" />

                    <TextInput
                        type="text"
                        name="fname"
                        value={data.fname}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.fname} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="lastName" value="Last name" />

                    <TextInput
                        type="text"
                        name="lastName"
                        className="mt-1 block w-full"
                        autoComplete="lastName"
                        value={data.lastName}
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastName} className="mt-2" />
                </div>

                <div className="input mt-4">
                    <InputLabel forInput="gender" value="Gender" />
                    <select id="gender" onChange={e => setData('gender', e.target.value)} name="gender" className="inline-block cursor-pointer px-4 py-1 rounded-xl ml-3 dark:bg-gray-800 w-32">
                        <option value={null}>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <InputError message={errors.gender} className="mt-2" />

                </div>
                <div className="input mt-4">
                    <label className="block">How old are you?</label>
                    <select name="day" onChange={e => setData('day', e.target.value)} className="inline-block cursor-pointer px-4 w-32 py-1 rounded-xl dark:bg-gray-800">
                        <option value={null}>day</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <select name="month" onChange={e => setData('month', e.target.value)} className="inline-block cursor-pointer px-4 w-32 py-1 rounded-xl ml-3 dark:bg-gray-800">
                        <option value={null}>month</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <select name="year" onChange={e => setData('year', e.target.value)} className="inline-block cursor-pointer px-4 w-32 py-1 rounded-xl ml-3 dark:bg-gray-800">
                        <option value={null}>Year</option>
                        <option>1999</option>
                        <option>2000</option>
                    </select>
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <input type="file" name='profilePic' onChange={e => setData('profilePic', e.target.files[0])} className="mt-1 block w-full border-gray-300 dark:border-gray-500 focus:border-indigo-300 dark:focus:border-gray-500 dark:placeholder:text-gray-500 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100" />

                    <InputError message={errors.profilePic} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

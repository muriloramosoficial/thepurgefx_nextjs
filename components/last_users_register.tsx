import { useState, useEffect } from "react";

interface User {
    _id: string;
    username: string;
    email: string;
    createdAt: string;
}

const LastedUsersRegistered = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("/api/users_info");
            const data = await response.json();
            const formattedUsers = data.map((user: any) => {
                return {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    createdAt: new Date(user.createdAt).toLocaleString()
                };
            });
            setUsers(formattedUsers);
        };

        fetchUsers();
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm text-slate-400 font-light">
                                <thead className="border-b border-slate-500 font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">User</th>
                                        <th scope="col" className="px-6 py-4">Email</th>
                                        <th scope="col" className="px-6 py-4">Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id} className="border-b border-slate-500 dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4">{user.username}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.createdAt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastedUsersRegistered;

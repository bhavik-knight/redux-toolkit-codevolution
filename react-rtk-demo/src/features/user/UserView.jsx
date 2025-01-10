import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const usersData = useSelector((state) => state.user);
    console.log("USERDATA", usersData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h2>List of Users: {usersData.data.length}</h2>
            {usersData.isLoading && <div>Loading ... </div>}
            {!usersData.isLoading && usersData.error && <div>Error: {usersData.error}</div>}
            {!usersData.isLoading && !usersData.error && (
                <ol>
                    {usersData?.data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default UserView;

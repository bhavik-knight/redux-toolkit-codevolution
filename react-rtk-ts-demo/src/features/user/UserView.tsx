import { useEffect } from "react";
import { useAppDispatcher, useAppSelector } from "../../app/hook";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const loading = useAppSelector((state) => state.user.isLoading);
    const users = useAppSelector((state) => state.user.data);
    const error = useAppSelector((state) => state.user.error);
    const dispatch = useAppDispatcher();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <h4>List of {users.length} Customers</h4>

            {loading && <h6>Fetching users' data...</h6>}
            {!loading && error && users.length != 0 && <h6>Error in fetching user data </h6>}

            {!loading && !error && (
                <>
                    {users.map((user) => (
                        <p>{user.name}</p>
                    ))}
                </>
            )}
        </>
    );
};

export default UserView;

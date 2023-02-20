import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { act_getAll_user } from '../redux/actions';

export default function Users() {
    const dispatch = useDispatch();

    // Bắn action để lấy tất cả danh sách user ở server lưu trữ ở reducer(users)
    useEffect(() => {
        // bắn action
        dispatch(act_getAll_user());
    }, []);
    // Lấy dữ liệu về để hiển thị
    const listUser = useSelector(state => state.users);
    // Hiển thị dữ liệu
    let elementListUser = listUser.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.fullname}</td>
            <td>
                <button>Update</button>
                <button>Delete</button>
            </td>
        </tr>
    })
    return (
        <div>
            <h2>List User</h2>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>FullName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
        </div>
    )
}

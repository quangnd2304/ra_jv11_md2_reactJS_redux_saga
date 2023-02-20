import { instance } from "./axios";
export const USER_GET = async () => {
    console.log("Step 3: userService thực hiện gọi api get của JSON Server");
    let response = await instance.get("users");
    console.log("Step 4: userService nhận kết quả từ api, listUser-->", response.data);
    return response.data;
}
export const USER_POST = async (newUser) => {
    await instance.post("users", newUser);
}
export const USER_PUT = async (updateUser) => {
    await instance.put("users/" + updateUser.id, updateUser);
}
export const USER_DELETE = async (id) => {
    await instance.delete("users/" + id);
}
export const USER_PATCH = async (updateUser) => {
    await instance.patch("users/" + updateUser.id, updateUser);
}
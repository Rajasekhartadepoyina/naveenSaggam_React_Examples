import {Axios} from 'axios';
class UserServices{
    static getAllUsers(){
        let serverUrl='https://jsonplaceholder.typicode.com/users';
        return Axios.get(serverUrl);
    }
}
export default UserServices;
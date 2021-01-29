import axios from 'axios';
const ACCOUNT_API_BASE_URL= "http://localhost:8080/react";

class ApiService{
    fetchAccount(){
        console.log('>>> axios <<<')
        console.log(axios.get(ACCOUNT_API_BASE_URL))
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    fetchAccountById(accountId){
        return axios.get(ACCOUNT_API_BASE_URL+'/'+accountId);
    }

    deleteAccount(accountId){
        return axios.delete(ACCOUNT_API_BASE_URL+'/'+accountId);
    }

    addAccount(account){
        return axios.post(ACCOUNT_API_BASE_URL, account);
    }

    editAccount(account){
        return axios.put(ACCOUNT_API_BASE_URL, account.id , account);
    }

}
export default new ApiService();
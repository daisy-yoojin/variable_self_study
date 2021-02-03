import axios from 'axios';
const ACCOUNT_API_BASE_URL= "http://localhost:8080/react";

class ApiService{
    fetchAccount(){
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    fetchAccountById(accountId){
        return axios.get(ACCOUNT_API_BASE_URL+'/get/'+accountId);
    }

    fetchAccountByName(word){
        return axios.get(ACCOUNT_API_BASE_URL+'/search?keyword='+word);
    }

    deleteAccount(accountId){
        return axios.delete(ACCOUNT_API_BASE_URL+'/delete/'+accountId);
    }

    addAccount(account){
        console.log('passing account: '+account);
        return axios.post(ACCOUNT_API_BASE_URL+'/add', account);
    }

    editAccount(account){
        return axios.put(ACCOUNT_API_BASE_URL+'/update/'+account.id, account);
    }

}
export default new ApiService();
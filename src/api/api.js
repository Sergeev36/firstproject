import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{"API-KEY":"bd1f7934-d488-4748-b181-52635ba28a3f"}


})


export const usersAPI = {

    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },



    getUsers2 (pageNumber, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }

}

export const usersACT = {
    userUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    userFollow (userId) {
       return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    }


}

export const ProfileAPI =  {

    userProfile (userId) {
    return instance.get("profile/" + userId)
        .then(response => {
            return response.data
        })
    },

    getStatus (userId) {
    return instance.get("profile/status/" + userId)
        .then(response => {
            return response.data
        })
    },

    updateStatus (status) {
    return instance.put("profile/status", {status})
        .then(response => {
            return response.data
        })
    } ,

    updatePhoto (photo) {
        const formData = new FormData();
        formData.append('image', photo);

    return instance.put("profile/photo",  formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }})
        .then(response => {
            return response.data
        })
    }

}

export const LoginApi = {

    authMe ()  {
        return instance.get("auth/me" )
            .then(response => {
                return response.data
            })
    },
       login (email,password,rememberMe)  {
        return instance.post("auth/login", {email,password,rememberMe} )
            .then(response => {
                return response.data
            })
    },
      loginOut ()  {
        return instance.delete("auth/login" )
            .then(response => {
                return response.data
            })
    }

}




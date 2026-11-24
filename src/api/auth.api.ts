import api  from "./axios";
import type {RegisterPayload,LoginPayload,AuthResponse}  from "../types/auth.types";


export const RegisterUser=async(data:RegisterPayload):Promise<AuthResponse>=>{
    const response=await api.post('register/',data)
    return response.data
}

export const LoginUser=async(data:LoginPayload):Promise<AuthResponse>=>{
    const response=await api.post('login/',data)
    return response.data
}

// register payload
export interface RegisterPayload{
    name:string;
    email:string;
    password:string
}

// login payload
export interface LoginPayload{
    email:string;
    password:string
}

//user object
export interface User {
  id: number;
  name: string;
  email: string;
  created_at?: string;
}

// total response along with message
export interface AuthResponse {
  message: string;
  user: User;
}

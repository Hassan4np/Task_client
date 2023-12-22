import axios from "axios";

export const axiossecrt = axios.create({
    baseURL: ' https://task-server-smoky.vercel.app'
  
  });

const useAxousSecret = () => {
    
    return axiossecrt
};

export default useAxousSecret;
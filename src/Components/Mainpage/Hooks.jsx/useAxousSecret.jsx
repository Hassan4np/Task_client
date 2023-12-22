import axios from "axios";

export const axiossecrt = axios.create({
    baseURL: 'http://localhost:5000'
  
  });

const useAxousSecret = () => {
    
    return axiossecrt
};

export default useAxousSecret;
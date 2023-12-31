import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxousSecret from "./useAxousSecret";
import { refresh } from "aos";


const useOngoing = () => {
    const axoussecrt = useAxousSecret()
    const { user } = useAuth()

    const { data:ongoing=[],isLoading } = useQuery({
        queryKey: ['ongoing',user.email],
        queryFn: async () => {
            const res = await axoussecrt.get(`/ongoing/${user?.email}`);
            return res.data
        }
    });
  
   
    return [ongoing,isLoading]
};

export default useOngoing;
import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxousSecret from "./useAxousSecret";
import { refresh } from "aos";


const useComplate = () => {
    const axoussecrt = useAxousSecret()
    const { user } = useAuth()

    const { data:complate=[],isLoading } = useQuery({
        queryKey: ['complate/on',user.email],
        queryFn: async () => {
            const res = await axoussecrt.get(`/complate/on/${user?.email}`);
            return res.data
        }
    });
   
   
    return [complate,isLoading]
};

export default useComplate;
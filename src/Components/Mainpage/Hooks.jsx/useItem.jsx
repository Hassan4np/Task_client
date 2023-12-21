import { useQuery } from "@tanstack/react-query";
import useAxousPublic from "./useAxousPublic";


const useItem = (id) => {
    const axousPublic = useAxousPublic();
    const {  refetch, data:item=[],isLoading } = useQuery({
        queryKey: ['Products',id],
        queryFn:  async () =>{
            const res = await axousPublic.get(`products/${id}`);
            return res.data
        }
      })
console.log(item)
    return [item,refetch,isLoading]
};

export default useItem;
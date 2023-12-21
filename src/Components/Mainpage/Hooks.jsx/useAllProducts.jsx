import { useQuery } from "@tanstack/react-query";
import useAxousPublic from "./useAxousPublic";


const useAllProducts = () => {
    const axousPublic = useAxousPublic();
    const { isPending, refetch, data:alldata } = useQuery({
        queryKey: ['Products'],
        queryFn:  async () =>{
            const res = await axousPublic.get('products');
            return res.data
        }
      })
console.log(alldata)
    return [alldata,isPending,refetch]
};

export default useAllProducts;
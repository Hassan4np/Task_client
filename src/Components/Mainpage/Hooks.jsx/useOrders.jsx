import { useQuery } from "@tanstack/react-query";
import useAxousSecret from "./useAxousSecret";


const useOrders = (email) => {
    const axoussect = useAxousSecret();
    const { refetch, data:orders, isLoading } = useQuery({
        queryKey: ['orders', email],
        queryFn: async () => {
            const res = await axoussect.get(`/orders?email=${email}`);
            return res.data
        }
    })
    console.log(orders)
    return [orders, refetch, isLoading]

  
};

export default useOrders;
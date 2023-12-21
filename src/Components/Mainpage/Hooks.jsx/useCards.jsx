import { useQuery } from "@tanstack/react-query";
import useAxousSecret from "./useAxousSecret";


const useCards = (email) => {

    const axoussecrt = useAxousSecret();

    const { refetch, data: cards, isLoading } = useQuery({
        queryKey: ['cards', email],
        queryFn: async () => {
            const res = await axoussecrt.get(`/cards?email=${email}`);
            return res.data
        }
    })
    console.log(cards)
    refetch()
    return [cards, refetch, isLoading]
};

export default useCards;
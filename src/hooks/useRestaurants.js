import { useEffect , useState } from 'react';
import yelp from '../api/yelp';

export default() => {
 const[restaurants , setRestaurants] = useState([]);
    const[errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) =>{
        try{
       const response = await yelp.get('/search', {
        params: {
            limit:50,
            term: searchTerm,
            location: 'san jose'
        }
       });
       setRestaurants(response.data.businesses);
       }catch(e){
            setErrorMessage('Something went wrong');
       }
    };
     useEffect(() => {
        searchApi('ocean');
        }, []);

        return [searchApi,restaurants,errorMessage];

}
import React , {useState} from 'react';
import {View , Text , StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen= () => {
    const[term,setTerm] = useState('');
    const[restaurants , setRestaurants] = useState([]);

    const searchApi = async () =>{
       const response = await yelp.get('/search', {
        params: {
            limit:50,
            term: term,
            location: 'san jose'
        }
       });
       setRestaurants(response.data.businesses)
    };

    return (
        <View>
        <SearchBar term={term}
         onTermChange= {newTerm => setTerm(newTerm)}
         onTermSubmit={() => searchApi()}
         />
            <Text>SearchScreen</Text>
            <Text>We have found {restaurants.length} restaurants</Text>
        </View>
    );
}
const styles = StyleSheet.create({});
export default SearchScreen;
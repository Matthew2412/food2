import React , {useState } from 'react';
import {View , Text , StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';


const SearchScreen= () => {
    const[term,setTerm] = useState('');
    const[searchApi,restaurants,errorMessage] = useRestaurants();

    return (
        <View>
            <SearchBar term={term}
             onTermChange= {newTerm => setTerm(newTerm)}
             onTermSubmit={() => searchApi(term)}
             />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <Text>We have found {restaurants.length} restaurants</Text>

            <ResultsList title="Cost Effective" />
            <ResultsList title="Bit Pricier"/>
            <ResultsList title="Big Spender"/>
        </View>
    );
}
const styles = StyleSheet.create({});
export default SearchScreen;
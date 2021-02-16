import React , {useState } from 'react';
import {View , Text , StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';


const SearchScreen= () => {
    const[term,setTerm] = useState('');
    const[searchApi,results,errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$'
        return results.filter(result => {
            return result.price ===price;
        })
    };

    return (
        <View>
            <SearchBar term={term}
             onTermChange= {newTerm => setTerm(newTerm)}
             onTermSubmit={() => searchApi(term)}
             />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <Text>We have found {results.length} restaurants</Text>

            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </View>
    );
}
const styles = StyleSheet.create({});
export default SearchScreen;
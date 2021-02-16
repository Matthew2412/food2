import React, {useState , useEffect} from 'react';
import {View , Text , StyleSheet , FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) =>{
    const [result , setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    } , []);

    if(!result){
        return null;
    }
    console.log(result.hours[0].is_open_now);

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.nameTextStyle}>{result.name}</Text>
            <Text style={styles.locationStyle}>{result.location.country} , {result.location.city} , {result.location.address1}</Text>
            {(result.hours[0].is_open_now ? <Text style={styles.openStyle}>Open now !</Text> : <Text style={styles.closedStyle}> Closed now ! </Text>) }
            <FlatList
             data={result.photos}
             keyExtractor={(photo) => photo}
             renderItem = {({item})=> {
                return <Image style={styles.imageStyle} source={{uri: item}} />
             } }
             />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
    height : 200,
    width : 300,
    marginBottom : 10
    },
    locationStyle : {
    marginBottom: 20
    },
    nameTextStyle:{
    fontSize:18,
    fontWeight: 'bold'
    },
    viewStyle : {
    flexDirection: 'column',
    marginLeft: 15
    },
    closedStyle:{
    color:'red',
    marginBottom : 10
    },
    openStyle:{
    color:'green',
    marginBottom : 10
    }

});

export default ResultsShowScreen;
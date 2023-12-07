import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from "../styles/global";

const Home = ({navigation}) => {
    return (
        <View style={globalStyles.container}>
            <Button onPress={()=>navigation.navigate('Details')} title={'Go'}/>
            {/*<Button onPress={()=>navigation.push('Details')} title={'Go'}/> не проверяет открыта ли она уже, а всегда добавляет новую*/}
        </View>
    );
};

const styles = StyleSheet.create({});

export default Home;

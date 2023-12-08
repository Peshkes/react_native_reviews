import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {globalStyles, images} from "../styles/global";
import Card from "../shared/card";

const ReviewDetails = ({route}) => {
    const {title, rating, body, key} = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{key}</Text>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>Rating:</Text>
                    <Image source={images.ratings[rating]}></Image>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderColor: "#eee"
    }
});
export default ReviewDetails;
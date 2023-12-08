import React from "react";
import {globalStyles} from "../styles/global";
import {Formik} from "formik";
import {Text, TextInput, View} from "react-native";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
    title: yup
        .string()
        .required()
        .min(4),
    body: yup
        .string()
        .required()
        .min(8),
    rating: yup
        .string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val)=> {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
});
const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions)=>{
                    actions.resetForm();
                    addReview(values);
                }}>
                {(props)=>(
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder={'Title'}
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            {props.touched.title && <Text style={globalStyles.errorText}>{props.errors.title}</Text>}
                            <TextInput
                                multiline={true}
                                style={globalStyles.input}
                                placeholder={'Body'}
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            {props.touched.body && <Text style={globalStyles.errorText}>{props.errors.body}</Text>}
                            <TextInput
                                style={globalStyles.input}
                                placeholder={'Rating (1-5)'}
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                keyboardType={"numeric"}
                                onBlur={props.handleBlur('rating')}
                            />
                            {props.touched.rating && <Text style={globalStyles.errorText}>{props.errors.rating}</Text>}
                            <FlatButton title={'Submit'} onPress={()=>props.handleSubmit()}/>
                        </View>
                    )}
            </Formik>
        </View>
    );
};

export default ReviewForm;
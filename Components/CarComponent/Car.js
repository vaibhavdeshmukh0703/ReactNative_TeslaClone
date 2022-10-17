import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import styles from './CarStyle';
import modelx from '../../assets/assets/images/ModelX.jpeg';
import BottomButton from '../BottomButtonComponent/BottomButton';


const Car = (props) =>{
  
    const {car:{name, tagline,taglineCTA, image}} = props;
    
    return(       
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={image}/>
            <View style={styles.title}>
                <Text style={styles.Heading}>{name}</Text>
                <Text style={styles.subHeading}>
                    {tagline}{' '}
                    <Text style={styles.subHeading__tagLineCTA}>{taglineCTA}</Text>
                </Text>

            </View>
            <View style={styles.buttonContainer}>
                <BottomButton title={"Customer Order"} type={"primary"} />
                <BottomButton title={"Customer Delivery "} type={"secondry"}/>
            </View>
            
             {/* <ImageBackground style={styles.image} source={image}/>
             <View style={styles.title}>
                <Text style={styles.Heading}>{name}</Text>
                <Text style={styles.subHeading}>
                    {tagline}{' '}
                    <Text style={styles.subHeading__tagLineCTA}>{taglineCTA}</Text>
                </Text>

            </View> */}
        </View>      
    );
}

export default Car;

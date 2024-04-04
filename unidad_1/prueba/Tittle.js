import React from "react";
import { Text, StyleSheet,View} from 'react-native';

const MyTitleCompoent = ({info}) => {
    return(
        <View>
            <Text> {info} </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    title: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 45,
    },
});

export default MyTitleCompoent;
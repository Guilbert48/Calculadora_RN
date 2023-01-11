import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',

        
    },
    operationButton: {
        color: 'rgba(0,0,0,0.5)',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,

    },

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,

    }
})

export default props => {
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}
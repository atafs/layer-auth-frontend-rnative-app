import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import AppTextInput from './app/components/AppTextInput'

export default function App() {
    const [firstName, setFirstName] = useState('')

    return (
        <View style={styles.container}>
            <Text>{firstName}</Text>
            <AppTextInput
                onChangeText={(text) => setFirstName(text)}
                placeholder="First Name"
                style={{
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                }}
            />
            <AppTextInput
                onChangeText={(text) => setFirstName(text)}
                placeholder="First Name"
                style={{
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
})

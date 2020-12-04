import React from 'react'
import { View, TextInput } from 'react-native'

import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, ...otherProps }) => (
    <View style={styles.container}>
        {icon && (
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
            />
        )}
        <TextInput style={styles.defaultStyles.text} {...otherProps} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput

import React from 'react'
import { View, Switch } from 'react-native'

const AppSwitch = ({ otherProps }) => {
    const [isNew, setIsNew] = useState(false)
    return (
        <View>
            <Switch
                value={isNew}
                onValueChange={(newValue) => setIsNew(newValue)}
                {...otherProps}
            />
        </View>
    )
}

export default AppSwitch

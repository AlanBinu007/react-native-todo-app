import React from 'react'
import { ListItem } from 'react-native-elements'
import { TouchableOpacity, View } from 'react-native'

const GoalItem = (props) => {
   return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
         <View>
            <ListItem title={props.title} leftIcon={{ name: 'assignment' }} bottomDivider />
         </View>
      </TouchableOpacity>
   )
}

export default GoalItem

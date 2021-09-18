import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
   const [isAddModalVisible, setAddModalVisible] = useState(false)
   const [courseGoals, setGoals] = useState([
      { id: Math.random().toString(), value: 'A' },
      { id: Math.random().toString(), value: 'B' },
      { id: Math.random().toString(), value: 'C' },
      { id: Math.random().toString(), value: 'D' },
      { id: Math.random().toString(), value: 'E' }
   ])

   const addGoalHandler = (currentGoal) => {
      setGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: currentGoal }])
      setAddModalVisible(false)
   }

   const onDeleteGoal = (goalId) => {
      setGoals((currentGoals) => currentGoals.filter((goal) => goal.id != goalId))
   }

   /* Render */
   return (
      <View style={styles.screen}>
         <View style={styles.showModalRow}>
            <Button
               title="Add Goal"
               buttonStyle={{ marginRight: 10 }}
               textStyle={{ marginLeft: 15 }}
               onPress={() => setAddModalVisible(!isAddModalVisible)}
            />
            <Button title="Clear All" buttonStyle={styles.clearAll} textStyle={{ marginLeft: 15 }} onPress={() => setGoals([])} />
         </View>
         <GoalInput
            isVisible={isAddModalVisible}
            setGoals={setGoals}
            addGoalHandler={addGoalHandler}
            onCancel={() => setAddModalVisible(false)}
         ></GoalInput>
         <FlatList
            keyExtractor={(item) => item.id} //how to generate custom key , if not key is used on the objects ( for example we use id )
            data={courseGoals}
            renderItem={(itemData) => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={onDeleteGoal}></GoalItem>}
         ></FlatList>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: { paddingTop: 80 },
   clearAll: { backgroundColor: 'firebrick' },
   showModalRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center'
   }
})

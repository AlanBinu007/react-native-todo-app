import React, { useState } from 'react'
import { Modal, StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

const GoalInput = (props) => {
   const [currentGoal, setCurrentGoal] = useState('')
   let textInput

   const onChangeText = (goal) => {
      setCurrentGoal(goal)
   }

   const addGoalHandler = () => {
      props.addGoalHandler(currentGoal)
      setCurrentGoal('')
   }

   return (
      <Modal
         visible={props.isVisible}
         animationType="slide"
         onShow={() => {
            textInput.focus()
         }}
      >
         <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={onChangeText} ref={(input) => (textInput = input)} />
            <View style={styles.buttonContainer}>
               <Button title="Add" buttonStyle={{ width: 100 }} onPress={addGoalHandler} />
               <Button title="Cancel" buttonStyle={{ backgroundColor: 'firebrick', width: 100 }} onPress={props.onCancel} />
            </View>
         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
   },
   input: {
      width: '70%',
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 15,
      padding: 10
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
   }
})

export default GoalInput

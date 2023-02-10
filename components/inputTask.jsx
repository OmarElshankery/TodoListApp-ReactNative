import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";
export default function InputTask(props) {
  const [task, setTask] = useState();
  const sendTask = () => {
    props.addTask(task);
    setTask(null);
  };
  return (
    //======================= (Input)============================//

    <KeyboardAvoidingView style={styles.containerOne}>
      <TextInput
        onChangeText={(txt) => {
          setTask(txt);
        }}
        style={styles.inputStyle}
        placeholder=" Enter Your Task"
        value={task}
      />
      <TouchableOpacity onPress={sendTask}>
        <View style={styles.btnStyle}>
          <View style={styles.addInput}>
            <Text style={styles.addText}>+</Text>
          </View>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

    //=========================================================//
  );
}

const styles = StyleSheet.create({
  containerOne: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "relative",
    top: 20,
    width: "100%",
  },
  inputStyle: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "grey",
    borderWidth: 3,
    width: "70%",
  },
  addInput: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 3,
  },
  addText: {
    color: "white",
    fontSize: 20,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

export default function TaskItem(props) {
  const [completed, setCompleted] = useState(false);
  const taskCompleted = () => {
    setCompleted(true);
  };
  return (
    <View style={styles.item}>
      {/**************************(Task)***************************/}
      <View style={styles.itemLeft}>
        <View style={styles.dot}></View>
        <Text style={completed && styles.completed}>{props.task}</Text>
      </View>
      <View style={styles.buttons}>
        {/***********************(Delete Icon)************************/}

        <TouchableOpacity onPress={props.deleteTask}>
          <View style={styles.btnStyle}>
            <Icon name="delete" size={20} color="white" />
          </View>
        </TouchableOpacity>
        {/***********************(Check Icon)************************/}
        <TouchableOpacity onPress={taskCompleted}>
          <View style={styles.btnStyle}>
            <MaterialIcons name="check-circle" color="white" size={22} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#c9d1d9",
    padding: 15,
    top: 35,
    width: 350,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  dot: {
    width: 24,
    height: 24,
    backgroundColor: "black",
    opacity: 0.5,
    borderRadius: 15,
    marginRight: 15,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    margin: 5,
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginLeft: 5,
    backgroundColor: "green",
    borderRadius: 15,
  },
  completed: {
    color: "green",
    fontWeight: "700",
    borderColor: "#003004",
    fontSize: 17,
  },
});

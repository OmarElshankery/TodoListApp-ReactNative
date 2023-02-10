import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native";
import InputTask from "./components/inputTask";
import TaskItem from "./components/taskItem";

export default function App() {
  const [tasksList, setTasksList] = useState([]);
  const [errMsg, setErrMsg] = useState(false);
  const [completed, setCompleted] = useState(false);

  //===================== (Add Function)============================//
  const addTask = (task) => {
    if (task) {
      Keyboard.dismiss();
      setTasksList([...tasksList, task]);
      setErrMsg(false);
    } else {
      setErrMsg(true);
    }
  };
  //===================== (Delete Function)============================//
  const deleteTask = (deletedId) => {
    setTasksList(tasksList.filter((task, id) => id != deletedId));
  };
  //===================================================================//
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#03045E" style="light" />
      <Text style={styles.header}>Todo App</Text>
      <InputTask addTask={addTask} />
      {errMsg && (
        <View style={styles.errorStyle}>
          <Text style={styles.errorText}>Task Can't Be Empty </Text>
        </View>
      )}
      <ScrollView>
        {tasksList.map((task, taskId) => {
          return (
            <View key={taskId}>
              <TaskItem
                task={task}
                index={taskId + 1}
                deleteTask={() => deleteTask(taskId)}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8EAED",
  },
  errorStyle: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 20,
    top: 40,
  },
  header: {
    marginTop: 50,
    color: "black",
    fontSize: 35,
  },
  errorText: {
    color: "white",
  },
  btnStyle: {
    width: 200,
    borderRadius: 15,
    padding: 10,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#03045E",
    alignItems: "center",
    marginBottom: 20,
  },
});

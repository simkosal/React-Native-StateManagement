import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetailDescription = ({ title, datas }) => {
  return (
    <View style={styles.parentView}>
      <Text style={styles.subTitle}>{title}</Text>
      <View style={styles.divBox}></View>
      {datas.map((data) => (
        <View key={data} style={styles.textStyleView}>
          <Text style={styles.textStyle}>{data}</Text>
        </View>
      ))}
    </View>
  );
};

export default MealDetailDescription;

const styles = StyleSheet.create({
  parentView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
  },
  divBox: {
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    margin: 5,
  },
  textStyleView: {
    backgroundColor: "blue",
    borderRadius: 5,
    margin: 4,
  },
  textStyle: {
    fontSize: 16,
    padding: 7,
    color: "white",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetail = ({
  duration,
  complexity,
  affordability,
  parentStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.detail, parentStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 5,
    fontWeight: "500",
  },
  detail: {
    flexDirection: "row",
    margin: 8,
  },
});

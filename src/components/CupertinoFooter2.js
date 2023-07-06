import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <MaterialCommunityIconsIcon
          name="av-timer"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "#616161"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.gossip,
            {
              color: props.active ? "#007AFF" : "#9E9E9E"
            }
          ]}
        >
          Gossip
        </Text>
      </View>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="heart-outline"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.love}>Love</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="account-supervisor"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.friends}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon
          name="credit-card"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.polls}>Polls</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon name="ios-person" style={styles.icon4}></IoniconsIcon>
        <Text style={styles.profile}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between"
  },
  rect: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  gossip: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  love: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  friends: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  polls: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  profile: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  }
});

export default CupertinoFooter2;

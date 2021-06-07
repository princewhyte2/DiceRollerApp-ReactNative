import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Toast from "react-native-simple-toast";

export default function App() {
  //state of dice
  const [value, setValue] = React.useState(
    require("./assets/dice_images/dice_1.png")
  );

  //using oop to handle the dice class
  class Dice {
    sides: number;
    constructor(sides: number) {
      this.sides = sides;
    }
    roll() {
      return Math.floor(Math.random() * (this.sides - 1 + 1) + 1);
    }
  }

  //roll a dice
  function rollDice() {
    const dice: Dice = new Dice(6);
    let diceRoll: number = dice.roll();
    switch (diceRoll) {
      case 1:
        setValue(require("./assets/dice_images/dice_1.png"));
        break;
      case 2:
        setValue(require("./assets/dice_images/dice_2.png"));
        break;
      case 3:
        setValue(require("./assets/dice_images/dice_3.png"));
        break;
      case 4:
        setValue(require("./assets/dice_images/dice_4.png"));
        break;
      case 5:
        setValue(require("./assets/dice_images/dice_5.png"));
        break;
      case 6:
        setValue(require("./assets/dice_images/dice_6.png"));
        break;
      default:
        break;
    }
  }

  React.useEffect(() => {
    rollDice();
  });
  //when button is pressed update state
  const onPress = () => rollDice();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={{ height: 178, width: 158 }} source={value} />
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ color: "white", fontSize: 20 }}>Roll</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -80,
    backgroundColor: "#19e94d",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4630eb",
    width: 100,
    padding: 10,
    marginTop: 16,
    borderRadius: 10,
  },
});

import React, { useState } from 'react';
import { View, Text, Switch, TouchableHighlight } from 'react-native';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('')

  const colors = {
    light: "white",
    light1: "white",
    light2: 'red',
    light3:'khaki',
    dark: "black",
    dark1: "dark",
    dark2: 'red',
    dark3:'lightgreen',
  }
  const Calculate = (title) => {
    if (title == "C") {
      setResult('')
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1))
    } else if (title == "=") {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans)
    } else {
      setResult(result + title)
    }
  }
  const Btn = ({ title, type }) => (
    <TouchableHighlight onPress={() => Calculate(title)} style={{ height: 70, width: 70, padding: 20, margin: 13, borderRadius: 5, elevation: 2, backgroundColor: getColor(colors.dark1, colors.light1) }}>
      <Text style={{ fontSize: 20, textAlign: 'center', textAlignVertical: 'center', color: getBtnColor(type) }}>{title}</Text>
    </TouchableHighlight>
  );

  const getBtnColor = (type) => {
    if (type == "top") {
      return "red"
    } else if (type == "right") {
      return "darkcyan"
    } else {
      return "black"
    }
  };

  const getColor = (light, dark) => (
    darkTheme ? dark : light
  );
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: getColor(colors.light, colors.dark), paddingVertical: 10 }}>
      <Text style={{
        color: getColor(colors.dark, colors.light), fontSize: 20, textAlign: 'left',
        paddingLeft: 20, backgroundColor: getColor(colors.light, colors.dark2)}}>Basic Calculator </Text>
      <Switch value={darkTheme} onValueChange={() => setDarkTheme(!darkTheme)}
        trackColor={{ true: colors.light, false: colors.dark }} thumbColor={getColor(colors.dark, colors.light)} />
      <View style={{ borderWidth: 1,borderRadius:60,margin:10,backgroundColor:getColor(colors.light3,colors.dark3) }}>
        <Text style={{ fontSize: 32, textAlign: 'right', paddingRight: 20, marginTop: 190, color: getColor(colors.dark, colors.light) }}>{result}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Btn title="C" type="top" />
          <Btn title="DL" type="top" />
          <Btn title="/" type="top" />
          <Btn title="%" type="top" />
          <Btn title="7" type="number" />
          <Btn title="8" type="number" />
          <Btn title="9" type="number" />
          <Btn title="*" type="right" />
          <Btn title="4" type="number" />
          <Btn title="5" type="number" />
          <Btn title="6" type="number" />
          <Btn title="+" type="right" />
          <Btn title="1" type="number" />
          <Btn title="2" type="number" />
          <Btn title="3" type="number" />
          <Btn title="-" type="right" />
          <Btn title="00" type="number" />
          <Btn title="0" type="number" />
          <Btn title="." type="number" />
          <Btn title="=" type="right" />
        </View>
        <Text style={{ alignItems: 'flex-end', color: getColor(colors.dark, colors.dark2), fontSize: 20, textAlign: 'right', paddingRight: 23 }}> MADE BY : ISHAQUE QURESHI </Text>
      </View>
    </View>
  )
}
export default App;
import { StyleSheet, View, Text } from "react-native";

export const CalculadoraScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>0</Text>
      </View>
      
      <View style={styles.buttonRow}>
        <View style={[styles.button, styles.grayButton]}>
          <Text style={styles.buttonText}>C</Text>
        </View>
        <View style={[styles.button, styles.grayButton]}>
          <Text style={styles.buttonText}>+/-</Text>
        </View>
        <View style={[styles.button, styles.grayButton]}>
          <Text style={styles.buttonText}>del</Text>
        </View>
        <View style={[styles.button, styles.orangeButton]}>
          <Text style={styles.buttonText}>÷</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </View>
        <View style={[styles.button, styles.orangeButton]}>
          <Text style={styles.buttonText}>×</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </View>
        <View style={[styles.button, styles.orangeButton]}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </View>
        <View style={[styles.button, styles.orangeButton]}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={[styles.button, styles.largeButton]}>
          <Text style={styles.buttonText}>0</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>.</Text>
        </View>
        <View style={[styles.button, styles.orangeButton]}>
          <Text style={styles.buttonText}>=</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  resultText: {
    fontSize: 80,
    color: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333333',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  grayButton: {
    backgroundColor: '#A5A5A5',
  },
  orangeButton: {
    backgroundColor: '#FF9500',
  },
  largeButton: {
    width: 170,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});


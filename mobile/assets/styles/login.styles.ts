
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center',

  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // covers entire ImageBackground
    backgroundColor: 'rgba(0,0,0,0.5)', // black with 50% opacity (adjust as needed)
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",

  },
  illustration: {
    width: 300,
    height: 310,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: 'rgb(230, 230, 230)',
    marginVertical: 15,
    textAlign: "center",
  },
  input: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgb(230, 230, 230)',
    fontSize: 20,
    color: 'white',
  },

  button: {
    backgroundColor: 'green',
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: 'rgb(230, 230, 230)'
  },
  // 🔴 Error styles
  errorBox: {
    backgroundColor: "#FFE5E5",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  errorText: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
});

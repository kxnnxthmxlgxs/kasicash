import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LogSaleScreen() {
  const router = useRouter();
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");

  const save = () => {
    if (!product.trim() || !amount.trim()) {
      Alert.alert("Missing info", "Enter a product and amount.");
      return;
    }
    Alert.alert("Sale logged", `${product} — R${amount}`, [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log a sale</Text>
      <Text style={styles.sub}>Takes 5 seconds</Text>

      <TextInput
        style={styles.input}
        placeholder="Product (e.g. Bread)"
        placeholderTextColor="#888"
        value={product}
        onChangeText={setProduct}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount in R (e.g. 15)"
        placeholderTextColor="#888"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Save sale</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F6",
    padding: 24,
    justifyContent: "center",
  },
  title: { fontSize: 28, fontWeight: "800", color: "#0B3D2E" },
  sub: { color: "#666", marginBottom: 24 },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    color: "#000",
  },
  button: {
    backgroundColor: "#0B3D2E",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  back: { color: "#0B3D2E", textAlign: "center", marginTop: 16 },
});

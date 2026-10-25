import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing info", "Please enter email and password.");
      return;
    }
    // Demo login — any credentials work
    router.replace("/dashboard");
  };

  const useDemo = () => {
    setEmail("demo@kasicash.app");
    setPassword("demo1234");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.logo}>KasiCash</Text>
        <Text style={styles.tagline}>Your shop's brain</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={useDemo}>
          <Text style={styles.demoText}>Use demo account</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>Demo: demo@kasicash.app / demo1234</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B3D2E",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0B3D2E",
    textAlign: "center",
  },
  tagline: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    color: "#000",
  },
  button: {
    backgroundColor: "#0B3D2E",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  demoText: {
    color: "#0B3D2E",
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
  },
  hint: {
    color: "#999",
    textAlign: "center",
    fontSize: 12,
    marginTop: 8,
  },
});

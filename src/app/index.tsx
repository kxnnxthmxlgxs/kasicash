import { useRouter } from "expo-router";
import { useState } from "react";
import {
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
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }
    setError("");
    router.replace("/dashboard");
  };

  const useDemo = () => {
    setEmail("demo@kasicash.app");
    setPassword("demo1234");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>KasiCash</Text>
        <Text style={styles.tagline}>Your shop's brain</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(t) => {
            setEmail(t);
            setError("");
          }}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={(t) => {
            setPassword(t);
            setError("");
          }}
          secureTextEntry
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={useDemo}>
          <Text style={styles.demoText}>Use demo account</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>Demo: demo@kasicash.app / demo1234</Text>
      </View>
    </View>
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
  error: { color: "#c00", fontSize: 13, marginBottom: 8 },
  button: {
    backgroundColor: "#0B3D2E",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  demoText: {
    color: "#0B3D2E",
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
  },
  hint: { color: "#999", textAlign: "center", fontSize: 12, marginTop: 8 },
});

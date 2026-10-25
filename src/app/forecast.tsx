import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const PRODUCTS = [
  { name: "Bread", avg: 45, forecast: 52 },
  { name: "Milk", avg: 38, forecast: 41 },
  { name: "Airtime", avg: 22, forecast: 26 },
  { name: "Cold drink", avg: 31, forecast: 35 },
];

export default function ForecastScreen() {
  const router = useRouter();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={styles.title}>AI Forecast</Text>
      <Text style={styles.sub}>Next week's predicted sales</Text>

      {PRODUCTS.map((p) => (
        <View key={p.name} style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.detail}>Avg {p.avg}/week</Text>
          </View>
          <Text style={styles.forecast}>{p.forecast}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back to dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7F6" },
  title: { fontSize: 28, fontWeight: "800", color: "#0B3D2E" },
  sub: { color: "#666", marginBottom: 20 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "700", color: "#0B3D2E" },
  detail: { fontSize: 12, color: "#666" },
  forecast: { fontSize: 20, fontWeight: "800", color: "#0B3D2E" },
  button: {
    backgroundColor: "#0B3D2E",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});

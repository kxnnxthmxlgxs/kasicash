import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SALES = [120, 85, 210, 150, 95, 180, 230];

export default function DashboardScreen() {
  const router = useRouter();
  const total = SALES.reduce((a, b) => a + b, 0);
  const forecast = Math.round((total / 7) * 7 * 1.1);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.sub}>Your shop at a glance</Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Today</Text>
          <Text style={styles.cardValue}>R{SALES[SALES.length - 1]}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>This week</Text>
          <Text style={styles.cardValue}>R{total}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>AI Forecast</Text>
          <Text style={styles.cardValue}>R{forecast}</Text>
        </View>
      </View>

      <Text style={styles.section}>Quick actions</Text>
      <TouchableOpacity style={styles.action} onPress={() => router.push("/log-sale")}>
        <Text style={styles.actionText}>+ Log a sale</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.action} onPress={() => router.push("/forecast")}>
        <Text style={styles.actionText}>View AI forecast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.action} onPress={() => router.replace("/")}>
        <Text style={styles.actionText}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7F6" },
  title: { fontSize: 28, fontWeight: "800", color: "#0B3D2E" },
  sub: { color: "#666", marginBottom: 20 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 24 },
  card: {
    flex: 1, minWidth: 100, backgroundColor: "#fff",
    borderRadius: 12, padding: 16,
  },
  cardLabel: { fontSize: 12, color: "#666", marginBottom: 6 },
  cardValue: { fontSize: 20, fontWeight: "800", color: "#0B3D2E" },
  section: { fontSize: 16, fontWeight: "700", color: "#0B3D2E", marginBottom: 12 },
  action: {
    backgroundColor: "#fff", padding: 16, borderRadius: 12,
    marginBottom: 10, borderLeftWidth: 4, borderLeftColor: "#0B3D2E",
  },
  actionText: { fontSize: 16, color: "#0B3D2E", fontWeight: "600" },
});
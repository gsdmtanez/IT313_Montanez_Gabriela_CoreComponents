import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photoUrl }} style={styles.photo} />

      <View style={styles.studentInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flaggedButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={[styles.flagText, flagged && styles.flaggedText]}>
          {flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E8E2",
  },
  photo: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#DDEBE3",
  },
  studentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#173A34",
  },
  year: {
    fontSize: 13,
    color: "#75877F",
    marginTop: 4,
  },
  flagButton: {
    borderWidth: 1,
    borderColor: "#9CB4A7",
    borderRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 11,
    backgroundColor: "#FFFFFF",
  },
  flaggedButton: {
    backgroundColor: "#B85C38",
    borderColor: "#B85C38",
  },
  pressedButton: {
    opacity: 0.65,
    transform: [{ scale: 0.97 }],
  },
  flagText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#315D4F",
  },
  flaggedText: {
    color: "#FFFFFF",
  },
});

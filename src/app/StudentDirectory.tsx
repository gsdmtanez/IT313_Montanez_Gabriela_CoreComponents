import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import StudentCard from "./StudentCard";

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

const initialStudents: Student[] = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
    flagged: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
    flagged: false,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
    flagged: false,
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
    flagged: false,
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  const toggleFlag = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>ACADEMIC ADVISING</Text>
        <Text style={styles.title}>Student Directory</Text>
        <Text style={styles.subtitle}>
          Your student records, all in one place.
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>
              {students.length.toString().padStart(2, "0")}
            </Text>
            <Text style={styles.statLabel}>Total students</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>
              {students
                .filter((student) => student.flagged)
                .length.toString()
                .padStart(2, "0")}
            </Text>
            <Text style={styles.statLabel}>Flagged</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchSection}>
        <Text style={styles.sectionLabel}>FIND A STUDENT</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by student name..."
          placeholderTextColor="#8A9891"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>

      <View style={styles.listHeading}>
        <Text style={styles.listTitle}>Student List</Text>
        <Text style={styles.resultCount}>
          {filteredStudents.length} students
        </Text>
      </View>

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={student.flagged}
              onToggleFlag={toggleFlag}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No students found</Text>
            <Text style={styles.emptyMessage}>
              Try searching with another name.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4EF",
  },
  header: {
    backgroundColor: "#143C3A",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  eyebrow: {
    color: "#B9D7C9",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    color: "#C5DCD4",
    fontSize: 13,
    marginTop: 6,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 22,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#2B5954",
    borderRadius: 14,
    padding: 12,
  },
  statNumber: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  statLabel: {
    color: "#D8E9E2",
    fontSize: 12,
    marginTop: 3,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 16,
  },
  sectionLabel: {
    color: "#66817A",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE5DE",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: "#173A34",
  },
  listHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#173A34",
  },
  resultCount: {
    fontSize: 12,
    color: "#66817A",
  },
  scrollArea: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  emptyState: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginTop: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#173A34",
  },
  emptyMessage: {
    fontSize: 13,
    color: "#75877F",
    marginTop: 6,
    textAlign: "center",
  },
});

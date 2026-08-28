//(Withfra.me, 2022)
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import StatsCard from "@/components/ticket/StatsCard";
import { Colors } from '@/constants/theme';

const faqOptions = [
  "What time is the parking usually full?",
  "Which day is usually the busiest?",
  "What are the parking rules?",
  "How do I find my parked car?",
  "How does parking availability work?",
  "Report a parking problem",
];

export default function ChatbotScreen() {
  const [message, setMessage] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(
    null
  );

  const handleQuestion = (question: string) => {
    setSelectedQuestion(question);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
      
        <StatsCard/>

        {/*Chat Bot Message (need to put byte bot pic later) */}
        <View style={styles.botMessage}>
          <Text style={styles.botMessageText}>
            Hi! I'm Parkitects' helper. Choose a question
            below and I'll point you in the right direction.
          </Text>
        </View>

        {/* FAQ Buttons */}
        <View style={styles.questionsContainer}>
          {faqOptions.map((question) => (
            <TouchableOpacity
              key={question}
              style={styles.questionButton}
              onPress={() => handleQuestion(question)}
            >
              <Text style={styles.questionText}>
                {question}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Answer */}
        {selectedQuestion && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>
              {getAnswer(selectedQuestion)}
            </Text>
          </View>
        )}
      </ScrollView>

    
    </View>
  );
}

function getAnswer(question: string) {
  switch (question) {
    case "What time is the parking usually full?":
      return "Parking is usually busiest during peak arrival times. Check the live parking map for the current availability.";

    case "Which day is usually the busiest?":
      return "Mondays when everyone decides they have to do better.";

    case "What are the parking rules?":
      return "Park within the marked parking bay, When entering campus follow the speed limit of 20km, Do NOT park by the pick and drop area";

    case "How do I find my parked car?":
      return "Use our Find My Parking to locate your parked vehicle using the Bluetooth signal from the parking sensor.";

    case "How does parking availability work?":
      return "Parking sensors detect whether a bay is occupied and update the live parking map.";

    case "Report a parking problem":
      return "You can report a parking problem by creating a ticket and selecting the relevant parking bay.";

    default:
      return "Please select one of the questions above.";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: Colors.light.background,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 110,
  },

  

  /* Bot message */
  botMessage: {
    backgroundColor: "#EEF0F7",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 18,
    alignSelf: "flex-start",
    maxWidth: "90%",
  },

  botMessageText: {
    fontSize: 17,
    lineHeight: 27,
    color: "#354052",
  },

  /* FAQ buttons */
  questionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 18,
  },

  questionButton: {
    borderWidth: 1.5,
    borderColor: "#8C8D96",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },

  questionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#42555c",
  },

  /* Answer */
  answerContainer: {
    backgroundColor: "#eef7ef",
    borderRadius: 18,
    padding: 18,
    marginTop: 4,
    marginBottom: 10,
  },

  answerText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#354052",
  },

  

  input: {
    flex: 1,
    fontSize: 17,
    color: "#354052",
  },

  
});
/**
 * References
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */
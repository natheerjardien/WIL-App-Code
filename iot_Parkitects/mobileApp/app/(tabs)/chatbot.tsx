//(Withfra.me, 2022)
//Chatbot screen for the Parkitects mobile app, this screen allows users to interact with a chatbot that provides answers 
//to frequently asked questions about parking
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

//These are the frequently asked questions that the chatbot can answer,
//each question is a string in the faqOptions array
const faqOptions = [
  //The user can select one of these questions to get an answer from the chatbot
  "What time is the parking usually full?",
  "Which day is usually the busiest?",
  "What are the parking rules?",
  "How do I find my parked car?",
  "How does parking availability work?",
  "Report a parking problem",
];

export default function ChatbotScreen() {
  //This stores the question selected by the user
  const [message, setMessage] = useState("");
  //This is used to keep track of which question the user has selected from the array of questions
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(
    null
  );

  //This function runs when the user selects a question from the list of frequently asked questions, 
  //then it saves the selected question so that the answer can be displayed
  const handleQuestion = (question: string) => {
    setSelectedQuestion(question);
  };

  //This function takes the user back to the list of questions when they click the back button, it resets the selected question
  const handleBack = () => {
    setSelectedQuestion(null);
  }

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

        {/* Stack Overflow, 2018 */}
        {/* FAQ Buttons */}
        {!selectedQuestion && (
        <View style={styles.questionsContainer}>
          {faqOptions.map((question) => (
            <TouchableOpacity
              key={question}
              style={styles.questionButton}
              //When a button is pressed, the selected question is passed to the handleQuestion function
              onPress={() => handleQuestion(question)}
            >
              <Text style={styles.questionText}>
                {question}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        )}

        {/* Selected Question & Answer, only displays sfter the user selects on of the FAQ questions */}
        {selectedQuestion && (
          <>
          {/*Displays the question selected by the user */}
          <View style={styles.selectedQuestionContainer}>
            <Text style={styles.selectedQuestionText}>
              {selectedQuestion}
            </Text>
          </View>
          {/* Displays the answer to the selected question */}
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>
              {getAnswer(selectedQuestion)}
            </Text>
          </View>

          {/* Back Button, allows the user to return to the list of questions */}
          <TouchableOpacity
            style={styles.backButton}
            onPress = {handleBack}
            >
              <Text
              style={styles.backButtonText}>
                Back to Questions
              </Text>
            </TouchableOpacity>
            </>
        )}
      </ScrollView>

    
    </View>
  );
}

//The function getAnswer checks which question the user selected 
//and returns the corresponding answer to be displayed on the screen
function getAnswer(question: string) {
  //A switch statement is used to match the question and return the correct answer
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

//This is the styling section for the chatbot screen
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

  /* Selected Question */
  selectedQuestionContainer: {
    backgroundColor: "#eef7ef",
    borderWidth: 1.5,
    borderColor: "#8C8D96",
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 12,
    alignSelf: "flex-end",
    maxWidth: "90%",
  },

    selectedQuestionText: {
    fontSize: 16,
    lineHeight: 24,
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

  /* Back Button */
  backButton: {
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#eef7ef",
    marginTop: 10,
  },

  backButtonText: {
    color: "#354052",
    fontSize: 16,
    fontWeight: "600",
  },
  

  input: {
    flex: 1,
    fontSize: 17,
    color: "#354052",
  },

  
});
/**
 * References
 * Stack Overflow, 2018. React native: rendering conditional component based on state value change in Modal. (Version 2.0) [Source Code] Avaiable at: <https://stackoverflow.com/questions/53206388/react-native-rendering-conditional-component-based-on-state-value-change-in-mod> [Accessed 31 August 2026].
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */
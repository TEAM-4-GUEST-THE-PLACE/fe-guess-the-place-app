import {
  Avatar,
  AvatarImage,
  Box,
  Image,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import dataQuestion from "../../src/mocks/quizdata.json";
import userStore from "../store/user";
const bg1 = require("../../assets/background/bg1.jpg");

export default function QuestionScreen({ navigation }: any) {
  const allQuestion = dataQuestion;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setcurrentOptionSelected] = useState<
    null | string
  >(null);
  const [correctOption, setCorrectOption] = useState<null | string>(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showBtnNext, setShowBtnNext] = useState(false);
  const [showScorePage, setShowScorePage] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [timeLeft, setTimeLeft] = useState(5);
  const avatar = userStore((state: any) => state.user.avatar);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState<number | null>(
    null
  );
  const [answerStatus, setAnswerStatus] = useState<Array<{
    option: string;
    isCorrect: boolean;
  }> | null>(null);

  useEffect(() => {
    if (!timeLeft) {
      handleNext();
    }

    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const validateAnswer = (selectedOption: string) => {
    let correct_option = allQuestion[currentQuestionIndex]["correct_option"];
    console.log({
      selectedOption,
      correct_option,
    });
    if (selectedOption === correct_option) {
      //setTropi or score
      setScore(score + 100);
      // console.log("score after:", score);
    }
    setcurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionDisabled(true);

    // console.log("score:", score);
    //show next button
    setShowBtnNext(true);
  };

  const handleNext = () => {
    let answersStatus = allQuestion[currentQuestionIndex]["options"].map(
      (option) => ({
        option,
        isCorrect: option === correctOption,
      })
    );

    if (currentQuestionIndex == allQuestion.length - 1) {
      //last Question
      //show score modal
      setSelectAnswerIndex(null);
      setTimeout(() => {
        navigation.navigate("Congrats");
      }, 1000);
      setShowScorePage(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setcurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionDisabled(false);
      setShowBtnNext(false);
      setTimeLeft(5);
    }
    setAnswerStatus(answersStatus);
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestion.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgresBar = () => {
    return (
      <Box alignItems="center">
        <View
          style={{
            width: "95%",
            height: 15,
            borderRadius: 20,
            backgroundColor: "#00000060",
            marginTop: 150,
          }}
        >
          <Animated.View
            style={[
              {
                height: 15,
                borderRadius: 20,
                backgroundColor: "#0acf83",
              },
              {
                width: progressAnim,
              },
            ]}
          ></Animated.View>
        </View>
      </Box>
    );
  };
  const questionCounter = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          {currentQuestionIndex + 1}
        </Text>
        <Text style={{ color: "white", fontSize: 18, opacity: 0.8 }}>
          {" "}
          / {allQuestion.length} Questions
        </Text>
      </View>
    );
  };

  return (
    <ImageBackground source={bg1} style={styles.container}>
      <View bg="rgba(0,0,0,0.4)" w={"$5/6"} h={"$5/6"} borderRadius={20}>
        <Box
          mt={10}
          mr={10}
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          gap={5}
        >
          <Image
            source={require("../../assets/logo/Vector.png")}
            alt="trophy"
            w={25}
            h={25}
          />
          <Text color="white" size="lg">
            {score}
          </Text>
        </Box>
        <Text textAlign="center" fontSize={"$4xl"} color="#0acf83">
          00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
        </Text>

        {/* show image question */}
        <View
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={20}
        >
          <Image
            alt="place-image"
            source={allQuestion[currentQuestionIndex]?.image}
            objectFit="contain"
            w={280}
            h={200}
            borderRadius={20}
          />
        </View>
        <View
          gap={20}
          mt={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {allQuestion[currentQuestionIndex]?.options.map((option, i) => (
            <TouchableOpacity
              key={i}
              disabled={isOptionDisabled}
              style={{
                borderWidth: 2,
                borderColor:
                  option == currentOptionSelected ? "#06BCD3" : "white",
                borderRadius: 5,
                paddingVertical: 5,
                paddingHorizontal: 5,
                flexDirection: "row",
                backgroundColor:
                  option == currentOptionSelected ? "#fce4e3" : "white",
                width: "80%",
                height: 40,
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onPress={() => validateAnswer(option)}
            >
              {/* show options */}
              <Text style={{ fontSize: 20, color: "#000", paddingLeft: 10 }}>
                {option}
              </Text>

              {/* show avatar if the option is selected */}
              {currentOptionSelected === option && (
                <Avatar h={30} w={30} right={10} bg="transparent">
                  <AvatarImage
                    alt="avatar"
                    style={{ width: 30, height: 30 }}
                    source={avatar}
                  />
                </Avatar>
              )}

              {/* show check or cross based on correct answer */}
              {option == correctOption ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    borderColor:
                      option == correctOption
                        ? "lightgreen"
                        : option == currentOptionSelected
                          ? "red"
                          : "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></View>
              ) : option == currentOptionSelected ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>

        {/* show progres bar */}
        {renderProgresBar()}

        {/* show question counter */}
        {questionCounter()}
      </View>

      {/* <StatusBar translucent backgroundColor="transparent" /> */}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

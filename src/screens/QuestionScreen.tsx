import { Box, Button, ButtonText, Heading, Image, Text, View } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, StatusBar, ActivityIndicator, Alert, TouchableOpacity, Animated } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import dataQuestion from "../../src/mocks/quizdata.json";

const bg1 = require("../../assets/background/bg1.jpg");

const answer = ["Jakarta", "Bekasi", "Bogor", "Depok"];

export default function QuestionScreen({ navigation }: any) {
    const allQuestion = dataQuestion;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setcurrentOptionSelected] = useState<null | string>(null);
    const [correctOption, setCorrectOption] = useState<null | string>(null);
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showBtnNext, setShowBtnNext] = useState(false);
    const [showScorePage, setShowScorePage] = useState(false);
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [timeLeft, setTimeLeft] = useState(5);

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
            console.log("score after:", score);
        }
        setcurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionDisabled(true);

        console.log("score:", score);
        //show next button
        setShowBtnNext(true);
    };

    const handleNext = () => {
        if (currentQuestionIndex == allQuestion.length - 1) {
            //last Question
            //show score modal
            // navigation.navigate("Home" as never);
            setTimeout(() => {
                navigation.navigate("Home");
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
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    // if (!timeLeft) {
    //     handleNext();
    // }

    const renderNextButton = () => {
        if (showBtnNext) {
            return (
                <Box display="flex" alignItems="center" justifyContent="center" mt={20}>
                    <Button w={200} onPress={handleNext}>
                        <Text color={"white"}>Next</Text>
                    </Button>
                </Box>
            );
        } else {
            return null;
        }
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
                        marginTop: 20,
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
                <Text style={{ color: "white", fontSize: 20 }}>{currentQuestionIndex + 1}</Text>
                <Text style={{ color: "white", fontSize: 18, opacity: 0.8 }}> / {allQuestion.length} Questions</Text>
            </View>
        );
    };

    return (
        <ImageBackground source={bg1} style={styles.container}>
            <View bg="rgba(0,0,0,0.4)" w={"$5/6"} h={"$5/6"} borderRadius={20}>
                <Box mt={10} mr={10} display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center" gap={5}>
                    <Image source={require("../../assets/logo/Vector.png")} alt="trophy" w={25} h={25} />
                    <Text color="white" size="lg">
                        {score}
                    </Text>
                </Box>
                <Text textAlign="center" fontSize={"$4xl"} color="#0acf83">
                    00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </Text>

                {/* show image question */}
                <View display="flex" justifyContent="center" alignItems="center" mt={20}>
                    <Image alt="place-image" source={allQuestion[currentQuestionIndex]?.image} objectFit="contain" w={280} h={200} borderRadius={20} />
                </View>
                <View gap={20} mt={30} display="flex" justifyContent="center" alignItems="center">
                    {allQuestion[currentQuestionIndex]?.options.map((option, i) => (
                        <TouchableOpacity
                            key={i}
                            disabled={isOptionDisabled}
                            style={{
                                borderWidth: 2,
                                borderColor: option == correctOption ? "lightgreen" : option == currentOptionSelected ? "red" : "white",
                                borderRadius: 15,
                                paddingVertical: 5,
                                paddingHorizontal: 5,
                                flexDirection: "row",
                                backgroundColor: option == correctOption ? "#dffad9" : option == currentOptionSelected ? "#fce4e3" : "white",
                                width: "80%",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                            onPress={() => validateAnswer(option)}
                        >
                            {/* show options */}
                            <Text style={{ fontSize: 20, color: "#000", paddingLeft: 10 }}>{option}</Text>

                            {/* show check or cross based on correct answer */}
                            {option == correctOption ? (
                                <View
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 30 / 2,
                                        borderColor: option == correctOption ? "lightgreen" : option == currentOptionSelected ? "red" : "white",
                                        backgroundColor: "lightgreen",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Icon name="check" size={20} color={"white"} />
                                </View>
                            ) : option == currentOptionSelected ? (
                                <View
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 30 / 2,
                                        backgroundColor: "red",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Icon name="close" size={20} color={"white"} />
                                </View>
                            ) : null}
                        </TouchableOpacity>
                    ))}
                </View>
                {/* show next question */}
                {renderNextButton()}

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

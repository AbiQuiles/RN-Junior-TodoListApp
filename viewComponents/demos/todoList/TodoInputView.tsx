import {Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {GetDeviceViewStyling} from "../../DeviceStyleManager";
import {AddItemString, AddTodoItemString} from "./TodoListStringResources";
import {AddIcon} from "../../Resources/IconResources";
import {MainBlueColor, MainDarkBlueColor, MainGreyColor, MainWhiteColor} from "../../Resources/ColorResources";
import {TodoDemoImage} from "../../Resources/ImagesResources";

interface TodoInputViewProps {
    onChangeListener?: (newItem: string) => void
    setNewItem?: () => void
}

export default function TodoInputView({onChangeListener, setNewItem}: TodoInputViewProps) {
    return (
        <View style={GetDeviceViewStyling(
            stylesIOS.container,
            undefined
        )}>
            <View style={styles.imageContainer}>
                <Image style={styles.mainImageStyling}
                    source={TodoDemoImage}>
                </Image>
            </View>
            <View style={GetDeviceViewStyling(
                stylesIOS.inputTextView,
                stylesAndroid.inputTextView
            )}>
                <TextInput
                    style={GetDeviceViewStyling(
                        stylesIOS.inputText,
                        stylesAndroid.inputText
                    )}
                    placeholder= {AddTodoItemString}
                    onChangeText={onChangeListener}
                />
                <Pressable style={styles.addItemContainer}
                    onPress={setNewItem}>
                    <Image style={styles.addImageStyling}
                        source={AddIcon}>
                    </Image>
                    <Text style={styles.addTextStyling}>
                        {AddItemString}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center",
    },
    addItemContainer: {
        flexDirection: "row"
    },
    mainImageStyling : {
        width: 120,
        height: 140,
        margin: 5
    },
    addTextStyling: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 29,
        letterSpacing: 0.25,
        color: MainDarkBlueColor,
    },
    addImageStyling : {
        width: 20,
        height: 20,
        margin: 5,
        borderRadius: 10,
        backgroundColor: MainBlueColor
    }
})

const stylesIOS = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
    },
    inputTextView: {
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 20,
        borderBottomColor: MainGreyColor,
        borderBottomWidth: 2,
    },
    inputText: {
        marginRight: 4,
        width: '70%',
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderColor: MainGreyColor,
        backgroundColor: MainWhiteColor
    }
});

const stylesAndroid = StyleSheet.create({
    inputTextView: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: '10%',
        paddingTop: 15,
        paddingBottom: 20,
        borderBottomColor: MainGreyColor,
        borderBottomWidth: 2,
    },
    inputText: {
        marginRight: 6,
        width: '70%',
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderColor: MainGreyColor,
        backgroundColor: MainWhiteColor
    },
});

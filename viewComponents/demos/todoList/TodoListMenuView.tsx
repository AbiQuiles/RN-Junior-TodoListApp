import React, {useState} from "react";
import {View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import DemosMenuItem from "../menuViewComponents/DemosMenuItem";
import DemosModalViewHandler from "../menuViewComponents/DemosModalsHandler";
import {TodoDemoImage} from "../../Resources/ImagesResources";
import {DemosType} from "../menuViewComponents/DemosType";

export default function TodoListMenuView() {
    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const modalVisibilityHandler = () => {
        if (!modalVisibility) {
            return setModalVisibility(true)
        } else {
            return setModalVisibility(false)
        }
    }

    return (
        <View>
            <DemosMenuItem
                title={TodoListString}
                image={TodoDemoImage}
                pressEvent={modalVisibilityHandler}>
            </DemosMenuItem>
            <DemosModalViewHandler
                type={DemosType.TodoItems}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>
        </View>
    )
}

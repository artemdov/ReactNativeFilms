
import {MainScreen} from './Screen/MainScreen';
import {SECOND_SCREEN_VIEW, MAIN_SCREEN_VIEW} from './routes';
import {SecondScreen} from "./Screen/SecondScreen";
import {createStackNavigator} from "react-navigation";

export default createStackNavigator(
    {
        [MAIN_SCREEN_VIEW]: MainScreen,
        [SECOND_SCREEN_VIEW]: SecondScreen
    },
    {
        headerMode: 'none'
    }
)
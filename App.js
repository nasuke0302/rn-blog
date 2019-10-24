import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';

const RootStack = createStackNavigator({
    Index: {
        screen: IndexScreen
    },

}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

const AppContainer = createAppContainer(RootStack);

export default () => {
    return (
        <Provider>
            <AppContainer />
        </Provider>
    )
}
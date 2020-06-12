import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Main from '../pages/Main';
import Books from '../pages/Books';
import BooksDetails from '../pages/BooksDetails';

Icon.loadFont();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RouteTab = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        switch (route.name) {
          case 'HOME':
            iconName = 'home';
            break;
          case 'FAVORITOS':
            iconName = 'like2';
            break;
          case 'LOJA':
            iconName = 'shoppingcart';
            break;
          case 'DOWNLOAD':
            iconName = 'download';
            break;
          default:
            break;
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'rgb(247, 171, 33)',
      style: {
        backgroundColor: '#000',
      },
    }}>
    <Tab.Screen name="HOME" component={Main} />
    <Tab.Screen name="FAVORITOS" component={Main} />
    <Tab.Screen name="LOJA" component={Books} />
    <Tab.Screen name="DOWNLOAD" component={Main} />
  </Tab.Navigator>
);

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name="APP BOOKS" component={RouteTab} />
    <Stack.Screen name="Detalhes" component={BooksDetails} />
  </Stack.Navigator>
);

export default Routes;

/* eslint react/prop-types: 0 */
import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import {Text} from "react-native";
import I18n from "../I18n";
import ChatsTab from '../Containers/ChatsTabNavigator';
import SearchTab from '../Containers/MainTabs/SearchTab';
import ChannelsTab from '../Containers/MainTabs/ChannelsTab';
//import LocationTab from '../Containers/MainTabs/LocationTab'; // need to install mapbox for this
import SettingsTab from '../Containers/MainTabs/SettingsTab';
import Fonts from "../Themes/Fonts";
import { primaryColor} from '../Themes/Colors';

const commonNavigationOptions = ({navigation}) => ({
  header: null,
  title: navigation.state.routeName,
});

const ChatsRouteOptions = {
  screen: ChatsTab,
  navigationOptions: commonNavigationOptions,
};
const SearchRouteOptions = {
  screen: SearchTab,
  navigationOptions: commonNavigationOptions,
};
const ChannelsRouteOptions = {
  screen: ChannelsTab,
  navigationOptions: commonNavigationOptions,
};
// const LocationRouteOptions = {
//   screen: LocationTab,
//   navigationOptions: commonNavigationOptions,
// };
const SettingsRouteOptions = {
  screen: SettingsTab,
  navigationOptions: commonNavigationOptions,
};

const order = (isRtl) => isRtl ?

  {
    [I18n.t('settings')]: SettingsRouteOptions,
    [I18n.t('search')]: SearchRouteOptions,
  //  [I18n.t('location')]: LocationRouteOptions,
    [I18n.t('channels')]: ChannelsRouteOptions,
    [I18n.t('chats')]: ChatsRouteOptions
  } : {
    [I18n.t('chats')]: ChatsRouteOptions,
    [I18n.t('channels')]: ChannelsRouteOptions,
   // [I18n.t('location')]: LocationRouteOptions,
    [I18n.t('search')]: SearchRouteOptions,
    [I18n.t('settings')]: SettingsRouteOptions

  };

// different routes for all, active and completed todos
export default (props) => React.createElement(
  createMaterialBottomTabNavigator(
    order(props.isRtl),
    {
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused}) => {
          const {routeName} = navigation.state;
          let iconName;
          switch (routeName) {
            case I18n.t('chats'):
              iconName = 'chat';
              break;
            case I18n.t('search'):
              iconName = 'search';
              break;
            case I18n.t('channels'):
              iconName = 'volume-mute';
              break;
            case I18n.t('location'):
              iconName = 'place';
              break;
            case  I18n.t('settings'):
              iconName = 'menu'
          }
          return (
            <MaterialIcons
              name={iconName}
              size={28}
              style={{marginBottom: 0}}
              color={focused ?
                primaryColor :
                //  props.colorScheme.fullToneText
                props.colorScheme.fullToneText
              }
            />
          );
        },tabBarLabel: <Text
              style={{
                  fontSize: 12,
                  fontFamily: Fonts.type.base,
                  color: props.colorScheme.fullToneText
              }}
          >
              {navigation.state.routeName}
          </Text>
      }),
      shifting: true,
      tabBarComponent: BottomNavigation,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
      tabBarOptions: {
        style: {
          backgroundColor: props.colorScheme.tabBarBackground
        },
      },
      initialRouteName: I18n.t('chats'),
      barStyle: {
        backgroundColor: props.colorScheme.tabBarBackground
      },
    },
  )
);
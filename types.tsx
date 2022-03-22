/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Post } from './models/Post';
import { Profile } from './models/Profile';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type TabParamList = {
  Home: undefined;
  Chat: undefined;
  Profile: undefined;
}

export type ChatParamList = {
  ChatList: undefined;
}

export type ProfileParamList = {
  UserProfile: undefined;
}


export type HomeParamList = {
  Feed: undefined;
  ItemList: undefined;
  ItemDetail: {
    post: Post;
  };
  CollectionHome: undefined;
}


export type CollectionParamList = {
  Collection: {
    profile: Profile;
  };
}

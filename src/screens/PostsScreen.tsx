import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { colors } from "../../styles/global";
import { RouteProp } from "@react-navigation/native";
import Post, { PostProps } from "../components/Post";
import { selectUser } from "../redux/user/userSelectors";
import { selectPosts } from "../redux/posts/postsSelectors";
import { postsActions } from "../redux/posts/postsSlice";

type PostsScreenRouteProp = RouteProp<
  { params: { post?: PostProps; userComment?: string } },
  "params"
>;

const PostsScreen = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: PostsScreenRouteProp;
}) => {
  const dispatch = useDispatch();

  const getPosts = useSelector(selectPosts);

  const getUser = useSelector(selectUser);

  const navigateToComments = (item: PostProps) => {
    navigation.navigate("Comments", { item });
  };
  const navigateToMap = (item: PostProps) => {
    navigation.navigate("Map", { item });
  };

  useEffect(() => {
    if (route.params?.post) {
      dispatch(postsActions.onAddPost(route.params.post!));
    }

    if (route.params?.userComment) {
      dispatch(postsActions.onAddComment(route.params.userComment));
    }
  }, [route.params?.post, route.params?.userComment]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={
              getUser.photoURL && {
                uri: getUser.photoURL,
              }
            }
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 13, fontWeight: 500 }}>
            {getUser.displayName && getUser.displayName}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: 400 }}>
            {getUser.email && getUser.email}
          </Text>
        </View>
      </View>
      <FlatList
        data={getPosts}
        renderItem={({ item }) => {
          return (
            <Post
              pictureUrl={item.pictureUrl}
              pictureName={item.pictureName}
              comments={item.comments}
              locality={item.locality}
              geoLocation={item.geoLocation}
              navigateToComments={() => navigateToComments(item)}
              navigateToMap={() => navigateToMap(item)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    gap: 32,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.light_gray,
    backgroundColor: colors.light_gray,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});

export default PostsScreen;

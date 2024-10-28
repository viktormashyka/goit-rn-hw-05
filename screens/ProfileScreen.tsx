import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { colors } from "../styles/global";
import Post, { PostProps } from "../components/Post";
import LogoutButton from "../components/LogoutButton";
import { authActions } from "../redux/auth/authSlice";
import { selectUser } from "../redux/auth/authSelectors";
import { selectPosts } from "../redux/posts/postsSelectors";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");
const avatarUrl =
  "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTQLAYuVQWqel0kgAaEdwxF9HrW8HHkoyKN7ci2UHo2VysK5vmXdB8mHzkslGUkLj7LXSkTfUQk86INSxUXqf5WGaw89We-iE7s8x2247acFwKjN73Gv2bB5t0-yY0aBMzWVHHZkcPXpz~F8puuejlZSRbZBRSG6jsL8ealNV7AZt--I-62LFcKQbi6ORl7aDaylwzcWn1~VwBBQh69OgnhvByIGxIg-17xF5KqNlRt2ibm-UZVqoaiWE3asFXNo17NE-6KpKx0Izh1SLsUkIlb9GjUeWd8hrnuxXwgba40Y-48ZBNZ0gHcta~YyVAvzcTry1w3eY1mwQ-9sF-uSbw__";

const ProfileScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const dispatch = useDispatch();

  const getUser = useSelector(selectUser);

  const getPosts = useSelector(selectPosts);

  const navigateToComments = (item: PostProps) => {
    navigation.navigate("Comments", { item });
  };
  const navigateToMap = (item: PostProps) => {
    navigation.navigate("Map", { item });
  };

  const handleLogOut = () => {
    dispatch(authActions.onLogOut()); // TODO: add modal for confirmation
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/images/backgroundImage.png")}
          resizeMode="cover"
        />
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={
                avatarUrl && {
                  uri: avatarUrl,
                }
              }
            />
            {avatarUrl ? (
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: colors.white },
                ]}
              >
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color={colors.border_gray}
                  onPress={() => {
                    console.log("TODO: add functionality for removing avatar");
                  }}
                />
              </View>
            ) : (
              <View style={styles.iconContainer}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={colors.orange}
                  onPress={() => {
                    console.log("TODO: add functionality for adding avatar");
                  }}
                />
              </View>
            )}
          </View>
          <View style={styles.logoutIconContainer}>
            <LogoutButton onPress={handleLogOut} />
          </View>
          <Text style={[styles.title, { marginBottom: 32 }]}>
            {getUser.nickname && getUser.nickname}
          </Text>
          <FlatList
            data={getPosts}
            renderItem={({ item }) => {
              return (
                // TODO: update Post with prop "likes"
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.white,
    width: SCREEN_WIDTH,
    height: "82%",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    left: SCREEN_WIDTH / 2 - 60,
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
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35.16,
    letterSpacing: 0.01,
  },
  iconContainer: {
    position: "absolute",
    bottom: 26,
    right: -12,
    borderRadius: 100,
    overflow: "hidden",
  },
  logoutIconContainer: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});

export default ProfileScreen;

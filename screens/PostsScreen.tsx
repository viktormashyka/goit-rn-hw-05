import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { colors } from "../styles/global";
import { RouteProp } from "@react-navigation/native";
import Post, { PostProps } from "../components/Post";

const data = [
  {
    id: "1",
    pictureUrl:
      "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtHVPTuQB2H3rFOE7XWaC-UpOHFHPtGobXLWgjCZkGnv38OwOtuZksAAt4O0c2e4mgipUcqb~vTWB7cKDdlAGQ4xZA~gJrBaCn7ZEuv6d0oqMbWVMpVGmw29YRZKhhAuHecwcnOmNpCdN4aL5MggbUPVQuB4~YpPgLQUBCaet4K4rZqSCVSTGjydvpRnzErE9SI-bSaYnH17T81foyjbpPlCnOCUekmgzWEsgMyZw-WrpfgYEFxOLnYvICU64wKKQC5cB6YLLDuEz9NyLtxnY23gudoSLAZDGeugJYvcNORusfoShaoasR6bCka3-MFRrz8krBxYac3jAJVoDRRjVQ__",
    pictureName: "Назва 1",
    comments: [
      {
        id: "1",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
    ],
    locality: "Місцевість 1",
  },
  {
    id: "2",
    pictureUrl:
      "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtHVPTuQB2H3rFOE7XWaC-UpOHFHPtGobXLWgjCZkGnv38OwOtuZksAAt4O0c2e4mgipUcqb~vTWB7cKDdlAGQ4xZA~gJrBaCn7ZEuv6d0oqMbWVMpVGmw29YRZKhhAuHecwcnOmNpCdN4aL5MggbUPVQuB4~YpPgLQUBCaet4K4rZqSCVSTGjydvpRnzErE9SI-bSaYnH17T81foyjbpPlCnOCUekmgzWEsgMyZw-WrpfgYEFxOLnYvICU64wKKQC5cB6YLLDuEz9NyLtxnY23gudoSLAZDGeugJYvcNORusfoShaoasR6bCka3-MFRrz8krBxYac3jAJVoDRRjVQ__",
    pictureName: "Назва 2",
    comments: [
      {
        id: "1",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
      {
        id: "2",
        author: "Nick",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        dateTime: "09 червня, 2020 | 09:14",
      },
    ],
    locality: "Місцевість 2",
  },
  {
    id: "3",
    pictureUrl:
      "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtHVPTuQB2H3rFOE7XWaC-UpOHFHPtGobXLWgjCZkGnv38OwOtuZksAAt4O0c2e4mgipUcqb~vTWB7cKDdlAGQ4xZA~gJrBaCn7ZEuv6d0oqMbWVMpVGmw29YRZKhhAuHecwcnOmNpCdN4aL5MggbUPVQuB4~YpPgLQUBCaet4K4rZqSCVSTGjydvpRnzErE9SI-bSaYnH17T81foyjbpPlCnOCUekmgzWEsgMyZw-WrpfgYEFxOLnYvICU64wKKQC5cB6YLLDuEz9NyLtxnY23gudoSLAZDGeugJYvcNORusfoShaoasR6bCka3-MFRrz8krBxYac3jAJVoDRRjVQ__",
    pictureName: "Назва 3",
    comments: [
      {
        id: "1",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
      {
        id: "2",
        author: "Nick",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        dateTime: "09 червня, 2020 | 09:14",
      },
      {
        id: "3",
        author: "Mike",
        comment: "Thank you! That was very helpful!",
        dateTime: "09 червня, 2020 | 09:20",
      },
      {
        id: "4",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
      {
        id: "5",
        author: "Nick",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        dateTime: "09 червня, 2020 | 09:14",
      },
      {
        id: "6",
        author: "Mike",
        comment: "Thank you! That was very helpful!",
        dateTime: "09 червня, 2020 | 09:20",
      },
    ],
    locality: "Місцевість 3",
  },
];

const avatarUrl =
  "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtHVPTuQB2H3rFOE7XWaC-UpOHFHPtGobXLWgjCZkGnv38OwOtuZksAAt4O0c2e4mgipUcqb~vTWB7cKDdlAGQ4xZA~gJrBaCn7ZEuv6d0oqMbWVMpVGmw29YRZKhhAuHecwcnOmNpCdN4aL5MggbUPVQuB4~YpPgLQUBCaet4K4rZqSCVSTGjydvpRnzErE9SI-bSaYnH17T81foyjbpPlCnOCUekmgzWEsgMyZw-WrpfgYEFxOLnYvICU64wKKQC5cB6YLLDuEz9NyLtxnY23gudoSLAZDGeugJYvcNORusfoShaoasR6bCka3-MFRrz8krBxYac3jAJVoDRRjVQ__";

type PostsScreenRouteProp = RouteProp<
  { params: { user?: { email: string }; post?: PostProps } },
  "params"
>;

const PostsScreen = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: PostsScreenRouteProp;
}) => {
  const [posts, setPosts] = useState<PostProps[]>(data);

  const navigateToComments = (item: PostProps) => {
    navigation.navigate("Comments", { item });
  };
  const navigateToMap = (item: PostProps) => {
    navigation.navigate("Map", { item });
  };

  useEffect(() => {
    if (route.params?.user) {
      console.log({ user: route.params.user });
    }
    if (route.params?.post) {
      setPosts((prev) => {
        return [...prev, route.params.post!];
      });
    }
  }, [route.params?.post, route.params?.user]);

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
              avatarUrl && {
                uri: avatarUrl,
              }
            }
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 13, fontWeight: 500 }}>NickName</Text>
          {/* TODO: Add nickname from user data */}
          <Text style={{ fontSize: 11, fontWeight: 400 }}>
            {route?.params?.user && route.params.user.email}
          </Text>
        </View>
      </View>
      <FlatList
        data={posts}
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

import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const Map = ({ item }) => {
  return (
    <MapView
      style={styles.mapStyle}
      region={{
        latitude: item?.geoLocation?.latitude ?? 0,
        longitude: item?.geoLocation?.longitude ?? 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      mapType="standard"
      minZoomLevel={15}
      provider={PROVIDER_GOOGLE}
    >
      <Marker
        title={item?.pictureName}
        coordinate={{
          latitude: item?.geoLocation?.latitude ?? 0,
          longitude: item?.geoLocation?.longitude ?? 0,
        }}
        description={item?.locality}
        draggable
        onDragEnd={
          (e) => console.log("New coordinates", e.nativeEvent.coordinate) //TODO: add functionality to update the coordinates
        }
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export default Map;
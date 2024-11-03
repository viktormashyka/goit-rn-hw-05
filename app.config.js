import "dotenv/config";
import path from "path";

export default {
  expo: {
    name: "goit-socials-app",
    slug: "goit-socials-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: path.resolve(__dirname, "assets/images/icon.png"),
    userInterfaceStyle: "light",
    splash: {
      image: path.resolve(__dirname, "assets/images/splash.png"),
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["assets/fonts/*"],
    ios: {
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      bundleIdentifier: "com.goit-socials-app",
      supportsTablet: true,
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      adaptiveIcon: {
        foregroundImage: path.resolve(
          __dirname,
          "assets/images/adaptive-icon.png"
        ),
        backgroundColor: "#ffffff",
      },
      package: "com.goitsocialsapp",
    },
    web: {
      favicon: "./assets/images/favicon.png",
    },
    extra: {
      eas: {
        projectId: "311384ad-d951-4026-8a18-569b84381732",
      },
    },
    plugins: [
      "expo-font",
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
          microphonePermission:
            "Allow $(PRODUCT_NAME) to access your microphone",
          recordAudioAndroid: true,
        },
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow $(PRODUCT_NAME) to use your location.",
        },
      ],
      [
        "expo-media-library",
        {
          isAccessMediaLocationEnabled: true,
        },
      ],
    ],
  },
};

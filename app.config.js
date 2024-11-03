import "dotenv/config";

export default {
  expo: {
    name: "goit-socials-app",
    slug: "goit-socials-app",
    version: "1.0.0",
    ios: {
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      bundleIdentifier: "com.goit-socials-app",
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      package: "com.goitsocialsapp",
    },
    extra: {
      eas: {
        projectId: "311384ad-d951-4026-8a18-569b84381732",
      },
    },
  },
};

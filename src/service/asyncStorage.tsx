import AsyncStorage from "@react-native-async-storage/async-storage";

class DeviceStorage {
  async getItem(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error: any) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }

  async saveItem(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error: any) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }
}

export default DeviceStorage;

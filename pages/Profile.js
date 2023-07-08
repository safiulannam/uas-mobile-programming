import React from "react";
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ProfileScreen = ({navigation, route}) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/icon.png")} style={styles.avatar} />
        <Text style={styles.name}>{route.params.username}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{route.params.phoneNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{route.params.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>{route.params.latitude}° N, {route.params.longitude}° W</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Password:</Text>
            <Text style={styles.infoValue}>Jangan Khawatir, kami tidak akan merilis Kata Sandi Anda</Text>
          </View>
          <View style={styles.infoRow}>
          <Text style={{ textAlign: 'auto' }}>Kami membutuhkan izin Anda untuk menunjukkan kamera</Text>
          </View>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      </View>
    </View>
  );
}

function toggleCameraType() {
  setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
}

return (
  <View style={styles.container}>
    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF2F8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoContainer: {
    width: "100%",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  infoLabel: {
    width: "30%",
    fontSize: 16,
    color: "#555",
    fontWeight: "bold",
  },
  infoValue: {
    width: "70%",
    fontSize: 16,
    color: "#333",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

export default ProfileScreen;

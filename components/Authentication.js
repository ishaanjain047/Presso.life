import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
import { initializeApp, getApp, get } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
// import { AsyncStorage } from "react-native-aysnc-storage/async-storage";
import { MyApp } from "../fbconfig.js";
import { db } from "../fbconfig.js";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import Search from "./Search.js";

// console.log(MyApp);

const FIREBASE_CONFIG = MyApp ? MyApp.options : undefined;
const app = getApp();
const auth = getAuth(app);

export default function PhoneAuthScreen({ navigation }) {
  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState("");
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState("");
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={FIREBASE_CONFIG}
          attemptInvisibleVerification={true}
        />
        <Text style={styles.title}>Welcome to Presso.life</Text>
        <Text style={styles.subtitle}>We are here to help !</Text>
        <Text style={styles.text}>Enter phone number</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={isConfigValid}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          placeholder="Enter your phone number"
          editable={!verificationId}
          onChangeText={(phoneNumber: string) => setPhoneNumber(phoneNumber)}
        />
        <Button
          title={`${verificationId ? "Resend" : "Send"} Verification Code`}
          disabled={!phoneNumber}
          onPress={async () => {
            const phoneProvider = new PhoneAuthProvider(auth);
            try {
              setVerifyError(undefined);
              setVerifyInProgress(true);
              setVerificationId("");
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                // @ts-ignore
                recaptchaVerifier.current
              );
              setVerifyInProgress(false);
              setVerificationId(verificationId);
              // console.log(verificationId);
              verificationCodeTextInput.current?.focus();
              // console.log(verificationCodeTextInput.current);
            } catch (err) {
              setVerifyError(err);
              setVerifyInProgress(false);
            }
          }}
        />
        {/* console.log(verifyError); */}
        {verifyError && (
          <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
        )}
        {verifyInProgress && <ActivityIndicator style={styles.loader} />}
        {verificationId ? (
          <Text style={styles.success}>
            A verification code has been sent to your phone
          </Text>
        ) : undefined}
        <Text style={styles.text}>Enter verification code</Text>
        <TextInput
          ref={verificationCodeTextInput}
          style={styles.textInput}
          // editable={!!verificationId}
          placeholder="Enter OTP"
          onChangeText={(verificationCode: string) =>
            setVerificationCode(verificationCode)
          }
        />

        <Button
          title="Confirm Verification Code"
          disabled={!verificationCode}
          onPress={async () => {
            try {
              setConfirmError(undefined);
              setConfirmInProgress(true);
              const credential = PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              );
              // console.log(credential);
              const authResult = await signInWithCredential(auth, credential);
              setConfirmInProgress(false);
              setVerificationId("");
              setVerificationCode("");
              verificationCodeTextInput.current?.clear();
              const docRef = doc(db, "phonenums", phoneNumber);
              const docSnap = await getDoc(docRef);

              if (docSnap.exists()) {
                navigation.navigate("Home");
              } else {
                // doc.data() will be undefined in this case
                navigation.navigate("EnterDetail", { phoneNumber });
              }
            } catch (err) {
              setConfirmError(err);
              setConfirmInProgress(false);
            }
          }}
        />
        {confirmError && (
          <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
        )}
        {confirmInProgress && <ActivityIndicator style={styles.loader} />}
      </View>
      {!isConfigValid && (
        <View style={styles.overlay} pointerEvents="none">
          <Text style={styles.overlayText}>
            To get started, set a valid FIREBASE_CONFIG in App.tsx.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    marginTop: 50,
  },
  title: {
    marginBottom: 2,
    fontSize: 29,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 10,
    opacity: 0.35,
    fontWeight: "bold",
  },
  text: {
    marginTop: 30,
    marginBottom: 4,
  },
  textInput: {
    marginBottom: 8,
    fontSize: 17,
    fontWeight: "bold",
  },
  error: {
    marginTop: 10,
    fontWeight: "bold",
    color: "red",
  },
  success: {
    marginTop: 10,
    fontWeight: "bold",
    color: "blue",
  },
  loader: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFFC0",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontWeight: "bold",
  },
});

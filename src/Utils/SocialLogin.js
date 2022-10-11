// import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
// import {Platform} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// export const facebookLogin = async () => {
//   try {
//     LoginManager.logOut();
//     if (Platform.OS === 'android') {
//       LoginManager.setLoginBehavior('native_with_fallback');
//     }
//     const result = await LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//       'user_friends'
//     ]);
//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }
//     const data = await AccessToken.getCurrentAccessToken();
//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }
//     const credential = auth.FacebookAuthProvider.credential(data.accessToken);
//     const firebaseUserCredential = await auth().signInWithCredential(
//       credential,
//     );
//     if (!firebaseUserCredential.user) {
//       alert('Something went wrong. Please try again!');
//     }

//     const userData = firebaseUserCredential.user.toJSON().providerData[0];
//     return {
//       name: userData?.displayName,
//       email: userData?.email,
//       provider: userData?.providerId,
//       uid: userData?.uid,
//       profile_picture: userData?.photoURL,
//     };
//   } catch (e) {
//     if (e instanceof Error) {
//       if (e.message.includes("Login attempt failed")) {
//         alert("Login attempt failed. Please try again!");
//         return
//       }
//     }
//     if (e.toString().includes('Error:')) {
//       let error = e.toString().replace('Error:', '');
//       throw error;
//     }
//     throw e;
//   }
// };

// export const googleSignin = async () => {
//   try {
//     await GoogleSignin.configure({
//     // Put your project's webclientid here 
//       webClientId: "DEMO",
//     });

//     GoogleSignin.signOut();

//     const data = await GoogleSignin.signIn();
//     const credential = auth.GoogleAuthProvider.credential(
//       data.idToken,
//       data.accessToken,
//     );
//     const googleUser = await auth().signInWithCredential(credential);
//     const userData = googleUser.user.toJSON().providerData[0];
//     return {
//       email: userData.email,
//       name: userData.displayName,
//       uid: userData.uid,
//       provider: 'google',
//       profile_picture: userData.photoURL,
//     };
//   } catch (e) {
//     if (e.toString().indexOf('NETWORK_ERROR') != -1) {
//       alert(
//         'Something went wrong. Please check your internet connectivity.',
//       );
//     }
//     if (!e.code === statusCodes.SIGN_IN_CANCELLED) {
//       if (e.toString().startsWith('Error: RNGoogleSignInError')) {
//       } else {
//         throw e;
//       }
//     }
//   }
// };

// File generated by FlutterFire CLI.
// ignore_for_file: type=lint
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        return windows;
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyBjdmTygD50m0B-ks6kBikcoNcZXiVzVHg',
    appId: '1:268539466155:web:be611d5d3190a70d00c2ee',
    messagingSenderId: '268539466155',
    projectId: 'portfolio-bd7da',
    authDomain: 'portfolio-bd7da.firebaseapp.com',
    storageBucket: 'portfolio-bd7da.appspot.com',
    measurementId: 'G-944H1J413F',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyAqEe-STIf4fbHOFKKrZw_ndPSbKJ1iktk',
    appId: '1:268539466155:android:4562ebd04201de9100c2ee',
    messagingSenderId: '268539466155',
    projectId: 'portfolio-bd7da',
    storageBucket: 'portfolio-bd7da.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyC1i8NqZv13TOSPVcddWrF6wMM0Ur4RL60',
    appId: '1:268539466155:ios:a50ed31c7965c37c00c2ee',
    messagingSenderId: '268539466155',
    projectId: 'portfolio-bd7da',
    storageBucket: 'portfolio-bd7da.appspot.com',
    iosBundleId: 'com.example.portfolio',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyC1i8NqZv13TOSPVcddWrF6wMM0Ur4RL60',
    appId: '1:268539466155:ios:a50ed31c7965c37c00c2ee',
    messagingSenderId: '268539466155',
    projectId: 'portfolio-bd7da',
    storageBucket: 'portfolio-bd7da.appspot.com',
    iosBundleId: 'com.example.portfolio',
  );

  static const FirebaseOptions windows = FirebaseOptions(
    apiKey: 'AIzaSyBjdmTygD50m0B-ks6kBikcoNcZXiVzVHg',
    appId: '1:268539466155:web:0ff7ede210134d8a00c2ee',
    messagingSenderId: '268539466155',
    projectId: 'portfolio-bd7da',
    authDomain: 'portfolio-bd7da.firebaseapp.com',
    storageBucket: 'portfolio-bd7da.appspot.com',
    measurementId: 'G-H5L1MH1417',
  );
}

# Catechism In A Year - Android Installation Guide

This guide explains how to run this application on your Android device. Since this is built with Expo, the simplest way to get it on your phone is using **Expo Go**.

## 🚀 Simple Way (Using Expo Go)

This is the fastest way to run the app without needing to build a standalone package.

1. **Install Expo Go**: Download the [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) app from the Google Play Store on your Android device.
2. **Clone and Setup**: On your computer, navigate to this directory and run:
   ```bash
   npm install
   ```
3. **Start the Development Server**:
   ```bash
   npx expo start
   ```
4. **Scan the QR Code**: 
   - Open the **Expo Go** app on your phone.
   - Tap "Scan QR Code" and scan the code displayed in your terminal.
   - The app will load automatically!

---

## 📦 Standalone App (Downloadable APK)

If you want a downloadable file that you can install directly on your phone as a standalone app, you can use **EAS Build**.

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```
2. **Build the APK**:
   ```bash
   npx eas build -p android --profile preview
   ```
3. **Download and Install**: Once the build is finished, EAS will provide a link to download the `.apk` file. Open this link on your Android device to install it.

> [!NOTE]
> For the APK method, you will need to enable "Install from Unknown Sources" in your Android settings.

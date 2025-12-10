
## 📋 Overview

This is an N322 course final project that demonstrates a mobile application with:
- User authentication (sign in/sign out)
- Tab-based navigation for different app sections
- Firebase integration for backend services
- Firestore database for data persistence
- TypeScript support for enhanced development experience

## 🏗️ Project Structure

```
N322FinalAppNODE/
├── app/
│   ├── _layout.tsx              # Root layout
│   ├── (app)/
│   │   └── (tabs)/
│   │       ├── _layout.tsx      # Tab navigation layout
│   │       ├── index.js         # Home/main tab
│   │       └── settings.tsx     # Settings tab
│   └── (auth)/
│       ├── _layout.tsx          # Auth layout
│       ├── sign-in.tsx          # Sign in page
│       └── sign-out.tsx         # Sign out page
├── src/
│   ├── auth/
│   │   └── AuthContext.js       # Authentication context and logic
│   ├── firebase/
│   │   ├── firebaseConfig.js    # Firebase configuration
│   │   └── firestoreService.js  # Firestore database service
│   └── tabs/
│       └── WordsList.tsx        # Words list component
├── assets/
│   ├── info.txt                 # Asset information
│   └── misc/
│       └── READ ME.txt
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── app.json                     # Expo configuration
├── App.js                       # App entry point
└── index.js                     # Root index file
```

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd N322FinalAppNODE
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Update `src/firebase/firebaseConfig.js` with your Firebase project credentials
   - Ensure Firestore is enabled in your Firebase project

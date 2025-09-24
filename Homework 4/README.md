
# Learning Outcomes 
    Set up React Navigation in an Expo app.

    Implement bottom tab navigation.

    Add a stack screen for details.

    Pass props between screens.

# Instructions

    Create a new Expo project: Named Student-hub

    Install React Navigation dependencies:

    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    npm install @react-navigation/native-stack
    npm install @react-navigation/bottom-tabs
    expo install react-native-gesture-handler react-native-reanimated

    Create a bottom tab navigator with three tabs:

        Home

        Resources

        Profile
    In Home screen, add a button to navigate to a Details screen (stack navigation).
    Pass some data (e.g., resource name) from Resources → Details screen.

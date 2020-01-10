# Kotlin MPP - Kotlin Multi Platform with Ktor

###### Base app for my Kotlin Multi Platform work. My next step is to update to later versions.

* Kotlin Multi Platorm/Ktor application:
  * [Android](app) &mdash; Android App.
  * [iOS](native/KotlinMpp) &mdash; iPhone App.
  * [backend](backend/KotlinMpp) &mdash; Ktor Server App.
eployment).

* Versions.
    * IntelliJ Ultimate 2019.3
    * Android Studio 3.5.1
    * Gradle 5.4.1
    * Kotlin 1.3.61
    * Kotlin Coroutines 1.3.2
    * Kotlin Serialization 0.14.0
    * Ktor 1.2.6
    
    * XCode 11.3
    * macOS 10.14.6

* JavaScript 
    * Static Web App
        * [Task; copyToStaticWeb](SharedCode/build.gradle.kts) copies js includes to KotlinMppStaticWebApp

* Setup
    * Endpoint
        * [SharedCode](SharedCode/src/commonMain/kotlin/ConstantsShared.kt) - Change IP & Port

* Build 
    * Run Gradle SharedCode Task 'build'

* Testing
    * Start backend project in inteliJ
    * Run Android and/or iOS app

* Issues: [Problems.txt](app/src/main/assets/Problems.txt)
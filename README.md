# Kotlin MPP - Kotlin Multi Platform with Ktor

###### Base app for my Kotlin Multi Platform work.



* Kotlin Multi Platorm/Ktor application:
  * [Android](app) &mdash; Android App.
  * [iOS](native/KotlinMpp) &mdash; iPhone App.
  * [backend](backend/KotlinMppKtor) &mdash; Ktor Server App.
  * [js static web](js/KotlinMppStaticWeb)
  * [js React](js/KotlinMppReact)
eployment).

* Versions.
    * IntelliJ Ultimate 2020.1.3
    * Android Studio 4.0.1
    * Gradle 6.1.1
    
    
    
    * Kotlin 1.3.61
    * Kotlin Coroutines 1.3.2
    * Kotlin Serialization 0.14.0
    * Ktor 1.2.6
    
    * XCode 11.6
    * macOS 10.15.5

* JavaScript 
    * Static Web App
        * [Task; copyToStaticWeb](SharedCode/build.gradle.kts) copies js includes to KotlinMppStaticWebApp
    * React
        * Execute tasks: publishJsPublicationToMavenLocal in project KotlinMpp/SharedCode
        * Execute task browserDevelopmentWebpack in [KotlinMppReact](js/KotlinMppReact)
            * copy js/KotlinMppReact/build/distributions
                    KotlinMppReact.js & index.html]() for deployment
            

* Setup
    * Endpoint
        * [SharedCode](SharedCode/src/commonMain/kotlin/ConstantsShared.kt) - Change IP & Port

* Build 
    * Run Gradle SharedCode Task 'build'
    * ktor war file. Open Terminal at [backend/KotlinMppKtor](backend/KotlinMppKtor) ./gradlew war

* Testing
    * Start backend project in inteliJ
    * Run Android and/or iOS app
    * or run [ReactApp](js/KotlinMppReact) with ./gradlew run --continuous
    * or KotlinMppStaticWeb
        * Right click index.html > Run index.html
    
* Deployment
    * Check Endpoint in [ConstantsShared](SharedCode/src/commonMain/kotlin/ConstantsShared.kt)
    * Run Gradle Task SharedCode build
    * Run Gradle Task SharedCode publishing publicJsPublicationToMavenLocal
    * KotlinMppKtor ./gradlew war
    * Rename backend/KotlinMppKtor/build/libs kotlinmppktor.1.0.0.war to kotlinmppktor.war
    * copy kotlinmppktor.war to deployment directory
    * KotolinMppReact gradle task clean
    * KotlinMppReact gradle task browserDevelopmentWebpack
        * copy build/distributions to deployment diretory
    
    

* Resources
    * React 
        * [christian-draeger/kotlin-react-gradle-example](https://github.com/christian-draeger/kotlin-react-gradle-example)
        * [snrostov/kotlin-full-stack-application-demo](https://github.com/snrostov/kotlin-full-stack-application-demo)
        * [war](https://ktor.io/servers/deploy/packing/war.html)
        * [Building Web Applications with React and Kotlin/JS](https://play.kotlinlang.org/hands-on/Building%20Web%20Applications%20with%20React%20and%20Kotlin%20JS/03_A_First_Static_Page)
        * others
    * [KampKit](https://github.com/touchlab/KaMPKit)
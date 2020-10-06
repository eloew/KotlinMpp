plugins {
    id("org.jetbrains.kotlin.js") version "1.4.0"
}

group = "com.erl"
version = "1.0"

repositories {
    maven { setUrl("https://dl.bintray.com/kotlin/kotlin-eap") }
    maven("https://kotlin.bintray.com/kotlin-js-wrappers/")
    mavenCentral()
    jcenter()

    mavenLocal()
}
//get versions from
//https://github.com/kotlin-hands-on/web-app-react-kotlin-js-gradle/blob/master/build.gradle.kts

dependencies {
    implementation(kotlin("stdlib-js"))

    implementation("org.jetbrains:kotlin-react:16.13.1-pre.110-kotlin-1.4.0")
    implementation("org.jetbrains:kotlin-react-dom:16.13.1-pre.110-kotlin-1.4.0")
    implementation(npm("react", "16.13.1"))
    implementation(npm("react-dom", "16.13.1"))

    implementation("org.jetbrains:kotlin-styled:1.0.0-pre.110-kotlin-1.4.0")
    implementation(npm("styled-components", "~5.1.1"))
    implementation(npm("inline-style-prefixer", "~6.0.0"))

    //Share Buttons (chapter 7)
    //implementation(npm("react-share", "~4.2.1"))

    //Coroutines (chapter 8)
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-common:1.3.3")

    implementation("com.erl:SharedCode-js:1.0.0")
    //implementation("io.ktor:ktor-client-js:$ktorVersion")
    //implementation("io.ktor:ktor-client-serialization-js:$serializationVersion")

    implementation(npm("text-encoding","~0.7.0"))

}

kotlin.target.browser { }

val copyToDocker = tasks.register<Copy>("copyToDocker") {
    from("$rootDir/build/distributions/KotlinMppReact.js",
        "$rootDir/build/processedResources/js/main/"
    )
    into(file("$rootDir/docker/tmp"))
}

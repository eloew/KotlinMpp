plugins {
    //id("org.jetbrains.kotlin.js") version "1.3.61"
    kotlin("js") version "1.3.70-eap-42"
    id("org.jetbrains.kotlin.plugin.serialization") version "1.3.70-eap-42"
}

group = "com.erl"
version = "1.0"

repositories {
    mavenCentral()
    jcenter()
    maven { url = uri("http://dl.bintray.com/kotlin/kotlin-js-wrappers") }
    maven { url = uri("https://dl.bintray.com/kotlin/kotlinx") }
    mavenLocal()

    maven { url = uri("https://dl.bintray.com/kotlin/kotlin-eap") }
    maven(url = "https://dl.bintray.com/kotlin/kotlinx.html") //necessary for kotlinx-html
}
/*
dependencies {
    implementation(kotlin("stdlib-js"))
    implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.6.12")
    implementation("org.jetbrains:kotlin-react:16.9.0-pre.88-kotlin-1.3.60")
    implementation("org.jetbrains:kotlin-react-dom:16.9.0-pre.88-kotlin-1.3.60")
}
*/
kotlin {

    sourceSets {
        main {
            dependencies {
                /*
                implementation(kotlin("test-js"))
                implementation(kotlin("stdlib-js"))

                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.2.0")
                implementation(npm("core-js", "^2.0.0"))
                implementation(npm("kotlinx-html", "0.6.12"))
                implementation(npm("@jetbrains/kotlin-react", "16.9.0-pre.83"))
                implementation(npm("@jetbrains/kotlin-react-dom", "16.9.0-pre.83"))
                implementation(npm("@jetbrains/kotlin-extensions", "1.0.1-pre.67"))
                implementation(npm("react", "16.9.0"))
                implementation(npm("react-dom", "16.9.0"))
                //Error: Can't resolve 'text-encoding' in kotlinx-io
                implementation(npm("text-encoding", "0.7.0"))


                //implementation(kotlin("com.erl:SharedCode-js", "1.0.0"))
                implementation("com.erl:SharedCode-js:1.0.0")
                */

                 implementation(kotlin("test-js"))
                 implementation(kotlin("stdlib-js"))

                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.3.3-1.3.70-eap-42")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-runtime-js:0.14.0-1.3.70-eap-42")
                implementation(npm("core-js", "^2.0.0"))
                 implementation(npm("kotlinx-html", "0.6.12"))
                 implementation(npm("@jetbrains/kotlin-react", "16.9.0-pre.83"))
                 implementation(npm("@jetbrains/kotlin-react-dom", "16.9.0-pre.83"))
                 implementation(npm("@jetbrains/kotlin-extensions", "1.0.1-pre.67"))
                 implementation(npm("react", "16.12.0"))
                 implementation(npm("react-dom", "16.12.0"))
                 //Error: Can't resolve 'text-encoding' in kotlinx-io
                 implementation(npm("text-encoding", "0.7.0"))


                 //implementation(kotlin("com.erl:SharedCode-js", "1.0.0"))
                 implementation("com.erl:SharedCode-js:1.0.0")



            }
        }
        test {
            dependencies {
                implementation(npm("enzyme", "3.9.0"))
                implementation(npm("enzyme-adapter-react-16", "1.12.1"))
            }
        }
    }

    target {
        browser {

        }
    }
}

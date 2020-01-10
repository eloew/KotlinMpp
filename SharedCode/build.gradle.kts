plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
}

kotlin {

    jvm("android") {
        val main by compilations.getting {
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }
    }
    /* Device
    iosArm64("ios") {
        binaries {
            framework {
                baseName = "SharedCode"
            }
        }
    }
     */
    /*  Emulator    */
    iosX64("ios") {
        binaries {
            framework {
                baseName = "SharedCode"
            }
        }
    }

    js {
        browser()
        //nodejs()
    }
    sourceSets {
        val ktorVersion = "1.2.6"
        val coroutinesVersion = "1.3.2"
        val serializationVersion = "0.14.0"
        // Shortcuts
        fun kotlinx(module: String, version: String) = "org.jetbrains.kotlinx:kotlinx-$module:$version"
        fun coroutines(module: String = "") = kotlinx("coroutines-core$module", coroutinesVersion)
        fun serialization(module: String = "") = kotlinx("serialization-runtime$module", serializationVersion)
        fun ktorClient(module: String, version: String = ktorVersion) = "io.ktor:ktor-client-$module:$version"


        val commonMain by getting {
            dependencies {
                // Kotlin
                implementation(kotlin("stdlib-common"))
                // Kotlinx
                implementation(coroutines("-common"))
                implementation(serialization("-common"))
                // Ktor client
                implementation(ktorClient("core"))
                implementation(ktorClient("json"))
                implementation(ktorClient("serialization"))

            }
        }

        val androidMain by getting {
            dependencies {
                // Kotlin
                implementation(kotlin("stdlib"))
                // Kotlinx
                implementation(coroutines())
                implementation(serialization())
                // Ktor client
                implementation(ktorClient("core-jvm"))
                implementation(ktorClient("json-jvm"))
                implementation(ktorClient("serialization-jvm"))
                implementation(ktorClient("okhttp"))
            }
        }

        val iosMain by getting {
            dependencies {
                // Kotlinx
                implementation(coroutines("-native"))
                implementation(serialization("-native"))
                // Ktor client
                implementation(ktorClient("core-native"))
                implementation(ktorClient("json-native"))
                implementation(ktorClient("serialization-native"))
                implementation(ktorClient("ios"))
            }
        }
/**/
        val jsMain by getting {
            dependencies {
                // Kotlin
                implementation(kotlin("stdlib-js"))
                // Kotlinx
                implementation(coroutines("-js"))
                implementation(serialization("-js"))
                // Ktor client
                implementation(ktorClient("core-js"))
                implementation(ktorClient("json-js"))
                implementation(ktorClient("serialization-js"))
                implementation(ktorClient("js"))
            }
        }

    }
}

val packForXcode by tasks.creating(Sync::class) {
    val mode = System.getenv("CONFIGURATION") ?: "DEBUG"
    val framework = kotlin.targets
        .getByName<org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget>("ios")
        .binaries.getFramework(mode)
    inputs.property("mode", mode)

    dependsOn(framework.linkTask)

    val targetDir = File(buildDir, "xcode-frameworks")
    from({ framework.outputDirectory })
    into(targetDir)

    doLast {
        val gradlew = File(targetDir, "gradlew")
        gradlew.writeText("#!/bin/bash\n"
                + "export 'JAVA_HOME=${System.getProperty("java.home")}'\n"
                + "cd '${rootProject.rootDir}'\n"
                + "./gradlew \$@\n")
        gradlew.setExecutable(true)
    }
}


val copyToStaticWeb = tasks.register<Copy>("copyToStaticWeb") {
    from("$rootDir/build/js/packages_imported/kotlin/1.3.61/kotlin.js"
        , "$rootDir/build/js/packages_imported/kotlinx-io/0.1.16/kotlinx-io.js"
        , "$rootDir/build/js/packages_imported/kotlinx-coroutines-core/1.3.2-1.3.60/kotlinx-coroutines-core.js"
        , "$rootDir/build/js/packages_imported/kotlinx-io-kotlinx-coroutines-io/0.1.16/kotlinx-io-kotlinx-coroutines-io.js"
        , "$rootDir/build/js/packages_imported/ktor-ktor-utils/1.2.6/ktor-ktor-utils.js"
        , "$rootDir/build/js/packages_imported/ktor-ktor-http/1.2.6/ktor-ktor-http.js"
        , "$rootDir/build/js/packages_imported/ktor-ktor-http-cio/1.2.6/ktor-ktor-http-cio.js"
        , "$rootDir/build/js/packages_imported/ktor-ktor-client-core/1.2.6/ktor-ktor-client-core.js"
        , "$rootDir/build/js/packages_imported/ktor-ktor-client-json/1.2.6/ktor-ktor-client-json.js"
        , "$rootDir/build/js/packages_imported/kotlinx-serialization-kotlinx-serialization-runtime/0.14.0/kotlinx-serialization-kotlinx-serialization-runtime.js"
        , "$rootDir/build/js/packages_imported/ktor-ktor-client-serialization/1.2.6/ktor-ktor-client-serialization.js"
        , "$rootDir/build/js/packages/KotlinMpp-SharedCode/kotlin/KotlinMpp-SharedCode.js"
    )
          into(file("$rootDir/js/KotlinMppStaticWeb/libraries"))
}


tasks.getByName("assemble").dependsOn(packForXcode)
tasks.getByName("assemble").dependsOn(copyToStaticWeb)

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

    iosX64("ios") {
        binaries {
            framework {
                baseName = "AddressBookCommon"
            }
        }
    }

    sourceSets {
        val ktorVersion = "1.2.5"
        val coroutinesVersion = "1.3.2"
        val serializationVersion = "0.13.0"
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
}

tasks.getByName("assemble").dependsOn(packForXcode)
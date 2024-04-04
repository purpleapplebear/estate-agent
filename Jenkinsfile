// pipeline {
// 	agent any
// 	stages {
// 		stage('Build') {
// 			steps {
// 				bat 'npm install'
// 			}
// 		}
//         stage('Deploy') {
//             steps {
//                 parallel(
//                     a: {
//                         bat 'npx json-server --watch db.json'
//                     },
//                     b: {
//                         bat 'npm run dev'
//                         bat 'o'
//                     }
//                 )
//             }
//         }


// 		}
// 	}

pipeline {
    agent any
    stages {
        stage ('Build React') {
            steps {
                // This is the URL of the your repository holding you react project
                // If your React and Java Project is in the same repository then you will need to add a step to "cd" into the react project folder
                
                git url: 'https://github.com/purpleapplebear/estate-agent'
                
                bat 'npm install'
                bat 'npm run dev'
                bat 'o'
            }
        }
        // This stage will fail until you have completed Project 3 (Java Springboot)
        stage ('Build Maven') {
            steps {
                // This is the URL of the your repository holding you Java/SpringBoot project
                // If your React and Java Project is in the same repository then you don't need to clone the reporistory again BUT
                // you will need to "cd" into the Java folder
                
                git url: 'https://github.com/AGQA2024/estate-agent-springboot',
                    branch: 'master'

                withMaven {

                // Run the maven build
                bat 'cd project'
                bat 'mvn clean package' // deploy also runs all phases prior to deploy

                } // Maven will discover the generated Maven artifacts, JUnit Surefire & FailSafe & FindBugs & SpotBugs reports...
            }
        }
    }
    // post {
    //     always {
    //         mail to: you@example.com,
    //              subject: "Jenkins build ${env.BUILD_NUMBER}",
    //              body: "Build no. ${env.BUILD_NUMBER} finished with status: ${currentBuild.currentResult}."
    //     }
    // }
}

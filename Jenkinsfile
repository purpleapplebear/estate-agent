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
                git url: 'https://github.com/purpleapplebear/estate-agent.git'
                bat 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                parallel(
                    a: {
                        bat 'npm run dev'
                        bat 'o'
                    },
                    b: {
                        git (url: 'https://github.com/AGQA2024/estate-agent-springboot', branch: 'master')

                        // bat 'cd project'
                        bat 'cd'

                        // withMaven {

                        // // Run the maven build
                        // bat 'mvn clean package' // deploy also runs all phases prior to deploy
                        //     }
                    }
                )
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

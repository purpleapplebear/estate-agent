
pipeline {
    agent any
    stages {
        stage ('Build React') {
            steps {
                // This is the URL of the your repository holding you react project
                // If your React and Java Project is in the same repository then you will need to add a step to "cd" into the react project folder
                git url: 'https://github.com/purpleapplebear/estate-agent.git'
                bat 'dir'
                dir('EstateProjectFrontEnd'){
                    git (url: 'https://github.com/purpleapplebear/estate-agent.git', branch: 'main')
                    bat 'dir'
                }
                dir('EstateProjectBackEnd'){
                    git (url: 'https://github.com/AGQA2024/estate-agent-springboot', branch: 'master')
                    bat 'dir'
                }
                // bat 'npm install'
            }
        }

        // stage('Deploy') {
        //     steps {
        //         parallel(
        //             a: {
        //                 bat 'npm run dev'
        //                 bat 'o'
        //             },
        //             b: {
        //                 git (url: 'https://github.com/AGQA2024/estate-agent-springboot', branch: 'master')

        //                 bat 'dir'
                        
        //                 //bat 'cd'

        //                 // withMaven {

        //                 // // Run the maven build
        //                 // bat 'mvn clean package' // deploy also runs all phases prior to deploy
        //                 //     }
        //             }
        //         )
        //     }
        // }
    }

}

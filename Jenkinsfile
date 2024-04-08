
pipeline {
    agent any
    stages {
        stage ('Build Frontend') {
            steps {

                dir('EstateProjectFrontEnd'){
                    git (url: 'https://github.com/purpleapplebear/estate-agent.git', branch: 'main')
                    bat 'dir'
                }
                // dir('EstateProjectBackEnd'){
                //     git (url: 'https://github.com/AGQA2024/estate-agent-springboot', branch: 'master')
                //     bat 'dir'
                // }
                // bat 'npm install'
            }
        }

        stage ('Build Backend') {
            steps {

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


pipeline {
    agent any
    stages {
        stage ('Build Frontend') {
            steps {

                dir('EstateProjectFrontEnd'){
                    git (url: 'https://github.com/purpleapplebear/estate-agent.git', branch: 'main')
                    // bat 'dir'

                    bat 'npm install'
                    
                }
            }
        }

        stage ('Build Backend') {
            steps {

                dir('EstateProjectBackEnd'){
                    git (url: 'https://github.com/AGQA2024/estate-agent-springboot', branch: 'master')
                    
                    cd project
                    bat 'dir'

                    //Add in build steps?
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         parallel(
        //             a: {
        //                 bat 'dir'
        //                 // bat 'cd EstateProjectFrontEnd'
        //                 // bat 'dir'
        //                 // bat 'npm run dev'
        //                 // bat 'o'
        //             }
        //             // b: {
        //             //     bat 'dir'
                        
        //             //     //bat 'cd'

        //             //     // withMaven {

        //             //     // // Run the maven build
        //             //     // bat 'mvn clean package' // deploy also runs all phases prior to deploy
        //             //     //     }
        //             // }
        //         )
        //     }
        // }
    }

}

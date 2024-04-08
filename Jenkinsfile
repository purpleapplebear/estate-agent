
pipeline {
    agent any
    stages {
        stage ('Build React') {
            steps {
                // This is the URL of the your repository holding you react project
                // If your React and Java Project is in the same repository then you will need to add a step to "cd" into the react project folder
                git url: 'https://github.com/purpleapplebear/estate-agent.git'
                bat 'dir'
                dir('EstateProject@script'){
                    bat 'dir'
                    bat 'cd .'
                    bat 'dir'
                    // bat 'cd 32d66d632db62f0d756a3479d20a574e6245f5f008697b7d7a093754527f4c5d'
                    // bat 'dir'
                }
                // bat 'npm install'
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
                        bat 'dir'
                        
                        //bat 'cd'

                        // withMaven {

                        // // Run the maven build
                        // bat 'mvn clean package' // deploy also runs all phases prior to deploy
                        //     }
                    }
                )
            }
        }
    }

}

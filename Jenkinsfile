
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
                    // bat 'dir'
                    dir('project'){
                        //Switches us into our backend project folder.
                        bat 'dir'
                    }
                
                    //Add in build steps?
                }
            }
        }

        stage('Deploy') {
            steps {
                parallel(
                    a: {
                        // bat 'dir'

                        dir('EstateProjectFrontEnd'){
                            // bat 'dir'
                            bat 'npm run dev'
                            bat 'o'
                        }
                    },
                    b: {
                        // bat 'dir'
                        dir('EstateProjectBackEnd'){
                   
                            dir('project'){
                                //Switches us into our backend project folder.
                                bat 'dir'

                                // bat 'mvn clean package'
                                
                                withMaven {
                                // Run the maven build
                                bat 'mvn clean package' // deploy also runs all phases prior to deploy
                                }
                            }
                        }
                    }
                )
            }
        }
    }

}

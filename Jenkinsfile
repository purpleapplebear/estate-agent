pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				bat 'npm install'
			}
		}
        stage('Deploy') {
            steps {
                parallel(
                    a: {
                        bat 'npx json-server --watch db.json'
                    },
                    b: {
                        bat 'npm run dev'
                        bat 'o'
                    }
                )
            }
        }


		}
	}
pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				bat 'npm install'
			}
		}
		parallel('Deploy') {
            steps {
                bat 'npx json.server db.json'
			}
			steps {
                bat 'npm run dev'
                bat 'o'
			}
		}
	}
}
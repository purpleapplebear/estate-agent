pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				bat 'npm install'
                bat 'npx json-server db.json'
			}
		}
		stage('Deploy') {
			steps {
				bat 'npm run dev'
                bat 'o'
			}
		}
	}
}
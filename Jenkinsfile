pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh 'npm install'
                sh 'npx json-server db.json'
			}
		}
		stage('Deploy') {
			steps {
				sh 'npm run dev'
                sh 'o'
			}
		}
	}
}
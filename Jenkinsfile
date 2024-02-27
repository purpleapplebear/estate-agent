pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				bat 'npm install'
                bat 'npm install pm2 -g'
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
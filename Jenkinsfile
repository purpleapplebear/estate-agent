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
                bat 'pm2 start npm --start'
			}
		}
	}
}
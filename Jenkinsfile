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
                bat 'pm2 start src\\node_modules\.bin\pm2 start src\\index.js --name estate-agent'
			}
		}
	}
}
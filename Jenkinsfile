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
                bat 'npm install pm2 -g'
                bat 'pm2 start npm --name "estate-agent" --run "db.json"'
			}
		}
	}
}
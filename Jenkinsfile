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
                bat 'pm2 start npm --name "estate-agent" --run "db.json"'
			}
		}
	}
}
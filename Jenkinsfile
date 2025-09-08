pipeline {
  agent any
 

  tools {
    nodejs "24.7.0"  // matches the name configured in Jenkin
  }

 stages {
      stage('Install Dependencies') {
          steps {
              bat 'npm ci'
          }
      }
      stage('Run Cypress Tests') {
          steps {
              //bat 'npx cypress run'
              bat 'npx cypress run -- browser --force'
          }
      }
  
  }
  post {
        always {
             archiveArtifacts artifacts: 'cypress/videos/**'
        }
    }
}

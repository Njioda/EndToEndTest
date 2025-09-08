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
              bat 'npx cypress run --headless --browser chrome'
          }
      }
   stage('Publish HTML Report') {
            steps {
                //archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**', allowEmptyArchive: true
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'C:\\Projekt_Cypress\\Cypress_Test\\cypress\\reports\\html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
  
  }
   }
 }
  post {
        always {
             archiveArtifacts artifacts: 'cypress/**'
        }
    }
}

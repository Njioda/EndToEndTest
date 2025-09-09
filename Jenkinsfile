pipeline {
  agent any

  parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "enter the scripts path that you wanrt to execue ")
        choice(name: 'BROWSER', choices: ['chrome', 'edge','firefox'], description: "Choise the browser you want to execute")
    
    }
 

  tools {
    nodejs "24.7.0"  // matches the name configured in Jenkin
  }
  

 stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Njioda/EndToEndTest.git' // Replace with your repo
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci' // or 'npm install'
            }
        }
      stage('Run Cypress Tests') {
          steps {
              //bat 'npx cypress run'
              bat 'npx cypress run --headless --browser firefox'
              //bat 'npx cypress run --headless ${BROWSER} -- spec ${SPEC}'
          }
      }
   stage('Publish HTML Report') {
            steps {
                //archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**', allowEmptyArchive: true
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'C:\\Projekt_Cypress\\Cypress_Test\\cypress\\reports\\html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
  
  }
   }
   stage('Allure Report') {
            steps {
                //allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
 }
  post {
        always {
             archiveArtifacts artifacts: 'cypress/**'
        }
    }
}

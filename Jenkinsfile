#!groovy
@Library("ace") _

properties([
  [$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5']],
])

Boolean isMaster = "${env.BRANCH_NAME}" == 'master'

opts = [
  buildAgent: 'jenkins-docker-3',
]

// Hack to prevent ace function from being overloaded during test-deploy
def ace = ace

ace(opts) {

  def nodeImage = 'node:carbon'

  def args = [
    "-v ${pwd()}:/src",
    "-w /src",
    "-e npm_config_cache=.npm"
  ].join(" ")


  stage('Install libraries') {
    docker.image(nodeImage).inside(args) {
      sh 'npm ci'
    }
  }

  stage('Build client') {
    milestone()
    docker.image(nodeImage).inside(args) {
      sh 'npm run build'
      sh 'npm run citest'
    }
  }

  stage('Build docker') {
    milestone()
    dockerBuild()
  }

  stage('Push docker') {
    milestone()
    if (isMaster) {
      dockerPush("dev")
    }
  }

  stage('Deploy to dev'+ (isMaster == false ? ': dry-run': '')) {
    milestone()
    deploy('dev', [dryrun: isMaster == false])

    if (isMaster) {
      slack.notifyDeploy('dev')
    } else {
      slack.notifySuccessful()
    }
  }

  stage('Deploy to test'+ (isMaster == false ? ': dry-run': '')) {
    milestone()
    deploy('test', [dryrun: isMaster == false])

    if (isMaster) {
      slack.notifyDeploy('dev')
    } else {
      slack.notifySuccessful()
    }
  }

}

if (isMaster) {
  milestone()
  waitForInput("Deploy to prod?")
  milestone()

  ace(opts) {
    stage('Deploy to prod') {
      deploy("prod")
      slack.notifyDeploy('prod')
    }
  }
}

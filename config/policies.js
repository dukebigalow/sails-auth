module.exports.policies = {
  AuthController: {
    '*': [ 'passport' ]
  },
  InfoController: {
    'index': 'oauthBearer'
  }
};

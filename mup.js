module.exports = {

  servers: {
    one: {
      "host": "139.59.11.152",
      "username": "deploy",
      "password": "k3CPG6sdNXeBL6",
      // or pem file (ssh based authentication)
      //"pem": "~/.ssh/id_rsa",
      // Also, for non-standard ssh port use this
      //"sshOptions": { "port" : 49154 },
      // server specific environment variables
      "env": {}
    }
  },

  meteor: {
    name: 'politicl',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      "ROOT_URL": "http://localhost",
      "MONGO_URL": "mongodb://139.59.11.152:27017/telescope"
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};

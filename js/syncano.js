var Syncano = require('syncano');
// Create empty connection
var connection = Syncano();

// Create a connection with an account key
var connection = Syncano({ accountKey: 'MY_ACCOUNT_KEY'});

// Create a connection with a user key
var connection = Syncano({ userKey: 'USER_KEY'});

// Create a connection with a social token
var connection = Syncano({ userKey: 'SOCIAL_TOKEN'});

var success = function(instances) {
  console.log(instances);
};
var error = function(error) {
  console.log(error);
};

connection.Instance.please().list().then(success).catch(error);

var instance = connection.Instance({
  name: 'INSTANCE_NAME', 
  description: 'INSTANCE_DESCRIPTION'
});

instance.save().then(function(instance) {
  console.log('instance', instance);
});

connection.Instance.please().list().then(function(instances) {
  console.log('instances', instances);
});

connection.Instance({name: 'peerme'}).classes().list().then(function(classes) {
  console.log('classes', classes);
});
import { Meteor } from 'meteor/meteor';

Meteor.publish('userList', function (){
  return Meteor.users.find({});
});

Meteor.users.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

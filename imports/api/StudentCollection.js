import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const StudentCollection = new Mongo.Collection('students');

StudentCollection.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
if( Meteor.isServer )
{
  Meteor.methods({
    'students.insert'(firstName, name) {
      check(firstName, String);
      check(name, String);
      
      StudentCollection.insert({
        firstName,
        name,
        createdAt: new Date(),
      });
    },
    'students.remove'(studentId) { 
      check(studentId, String);       
   
       StudentCollection.remove(studentId);
     },
    'students.update'(studentId, firstName, name ) {
      check(studentId, String);
      check(name, String);
      check(firstName, String);
   
      StudentCollection.update(studentId, { $set: { name: name, firstName: firstName } });
    },
  });

  Meteor.publish(
                  "students.all"
                  ,() =>
                  {
                    return StudentCollection.find();
                  }
                );
}

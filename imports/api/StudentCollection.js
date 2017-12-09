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
    'students.insert'(firstName, name, classe) {
      check(firstName, String);
      check(name, String);
      check(classe, String);
      
      StudentCollection.insert({
        firstName,
        name,
        classe,
        createdAt: new Date(),
      });
    },
    'students.remove'(studentId) { 
      check(studentId, String);       
   
       StudentCollection.remove(studentId);
     },
    'students.update'(studentId, firstName, name, classe ) {
      check(studentId, String);
      check(name, String);
      check(firstName, String);
      check(classe, String);
   
      StudentCollection.update(studentId, { $set: { name: name, firstName: firstName, classe: classe } });
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

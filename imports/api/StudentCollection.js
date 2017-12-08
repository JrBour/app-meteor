import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const StudentCollection = new Mongo.Collection('students');

StudentCollection.allow({
  insert() { return true; },
  // update() { return true; },
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
    // 'tasks.setChecked'(taskId, setChecked) {
    //   check(taskId, String);
    //   check(setChecked, Boolean);
   
    //   StudentCollection.update(taskId, { $set: { checked: setChecked } });
    // },
  });

  Meteor.publish(
                  "students.all"
                  ,() =>
                  {
                    return StudentCollection.find();
                  }
                );
}

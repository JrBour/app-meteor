import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const CourseCollection = new Mongo.Collection('courses');

CourseCollection.allow({
  insert() { return true; },
  // update() { return true; },
   remove() { return true; },
});

if( Meteor.isServer )
{
  Meteor.methods({
    'courses.insert'(name) {
      check(name, String);
      
      CourseCollection.insert({
        name,
        createdAt: new Date(),
      });
    },
    'courses.remove'(studentId) {
       check(studentId, String);
   
       CourseCollection.remove(studentId);
     },
    // 'tasks.setChecked'(taskId, setChecked) {
    //   check(taskId, String);
    //   check(setChecked, Boolean);
   
    //   StudentCollection.update(taskId, { $set: { checked: setChecked } });
    // },
  });

  Meteor.publish(
    "courses.all"
    ,() =>
    {
      return CourseCollection.find();
    }
  );
}

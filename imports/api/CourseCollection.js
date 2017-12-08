import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const CourseCollection = new Mongo.Collection('courses');

CourseCollection.allow({
  insert() { return true; },
  update() { return true; },
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
    'courses.remove'(courseId) {
       check(courseId, String);
   
       CourseCollection.remove(courseId);
     },
    'courses.update'(courseId, name) {
      check(courseId, String);
      check(name, String);
   
      CourseCollection.update(courseId, { $set: { name: name } });
    },
  });

  Meteor.publish(
    "courses.all"
    ,() =>
    {
      return CourseCollection.find();
    }
  );
}

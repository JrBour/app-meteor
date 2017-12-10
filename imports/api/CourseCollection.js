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
    'courses.insert'(name, description) {
      check(name, String);
      check(description, String);

      CourseCollection.insert({
        name,
        description,
        createdAt: new Date(),
      });
    },
    'courses.remove'(courseId) {
       check(courseId, String);

       CourseCollection.remove(courseId);
     },
    'courses.update'(courseId, name, description) {
      check(courseId, String);
      check(name, String);
      check(description, String);

      CourseCollection.update(courseId, { $set: { name: name, description: description } });
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

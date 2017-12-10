import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ClasseCollection = new Mongo.Collection('classes');

ClasseCollection.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

if( Meteor.isServer )
{
  Meteor.methods({
    'classes.insert'(name) {
      check(name, String);
      ClasseCollection.insert({
        name,
        createdAt: new Date(),
      });
    },
    'classes.remove'(classeId) {
       check(classeId, String);
   
       ClasseCollection.remove(classeId);
     },
    'classes.update'(classeId, name) {
      check(classeId, String);
      check(name, String);
   
      ClasseCollection.update(classeId, { $set: { name: name } });
    },
  });

  Meteor.publish(
    "classes.all"
    ,() =>
    {
      return ClasseCollection.find();
    }
  );
}

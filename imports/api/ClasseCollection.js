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
    'classes.insert'(name, group) {
      check(name, String);
      check(group, String);
      
      ClasseCollection.insert({
        name,
        group,
        createdAt: new Date(),
      });
    },
    'classes.remove'(classeId) {
       check(classeId, String);
   
       ClasseCollection.remove(classeId);
     },
    'classes.update'(classeId, name, groupe) {
      check(classeId, String);
      check(name, String);
      check(group, String);
   
      ClasseCollection.update(classeId, { $set: { name: name, group: group } });
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

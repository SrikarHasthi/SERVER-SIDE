const mongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017/';
const dbname='conFusion';

mongoClient.connect(url,(err,client)=>{
   assert.strictEqual(err,null);

    console.log('connected sucessfully');
    const db=client.db(dbname);

    const collection=db.collection('dishes');

    collection.insertOne({"name":"burger","description":"TEst"},(err,result)=>{
        assert.strictEqual(err,null);
        console.log('after insert');
        console.log(result.ops);
        collection.find({}).toArray((err,docs)=>{
           assert.strictEqual(err,null);
            console.log(docs);

            db.dropCollection('dishes',(err,drop)=>{
               assert.strictEqual(err,null);
                client.close(); 
            });
        });
    });
});
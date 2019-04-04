var AWS = require('aws-sdk');
AWS.config.loadFromPath('../config.json');

var s3 = new AWS.S3();

//Now we need to create a bucket that will hold the images. An Amazon S3 bucket is just a container for all your objects
//We create the bucket by calling the createBucket method and passing in an object that sets the bucket name as an argument:

var bucketParams = {Bucket: 'myBucket'};

s3.createBucket(bucketParams);
// Now you've created a bucket on S3! Let's get to putting an image into that bucket.


// You can now connect directly to that bucket when instantiating an AWS.S3 object by passing in the bucket name as a paramter like so:
var s3Bucket = new AWS.S3( { params: {Bucket: 'myBucket'} } )


/* In order to upload an image, you can use the putObject method that takes a data and callback function as arguments. The data should contain a Key and Body property. The Key should contain the name of the image, and the Body should contain the image file itself. The callback function takes an error and data as arguments that you can use to check the status of the uploaded file. */

var data = {Key: imageName, Body: imageFile};
s3Bucket.putObject(data, function(err, data){
  if (err)
    { console.log('Error uploading data: ', data);
    } else {
      console.log('succesfully uploaded the image!';
    }
});

/* In order to retrieve the image we can use the getObject function or a better way is to just get a temporary url pointing to that image. This way, we can easily display images onto a web application by simply using an img tag that points to the url of the image on the S3 storage server. So in order to do that, we call the getSignedUrl method on our bucket: */

var urlParams = {Bucket: 'myBucket', Key: 'imageName'};
s3Bucket.getSignedUrl('getObject', urlParams, function(err, url){
  console.log('the url of the image is', url);
})

/* The getSignedUrl method takes an operations, a params, and a callback function as arguments. The operation argument is a string that specifies the name of the operation to call, in this case 'getObject'. The urlParams are parameters that take the Bucket name and the name of the key, in this case the image name. The callback function takes two arguments, error and url. The url is the string we would want to place in our img tag to point to the image.

Awesome, we can now get a url to an image; but chances are that we have more than one image in our bucket. The way we can get multiple images from our bucket is by using the listObject method. This gives back an array of all the objects in our bucket. Once we have that, we can loop through the array of objects and use the getSignedUrl method again to get a temporary url to that image:

 */

var params = {Bucket: 'myBucket'};
s3.listObjects(params, function(err, data){
  var bucketContents = data.Contents;
    for (var i = 0; i < bucketContents.length; i++){
      var urlParams = {Bucket: 'myBucket', Key: bucketContents[i].Key};
        s3.getSignedUrl('getObject',urlParams, function(err, url){
          console.log('the url of the image is', url);
        });
    }
});
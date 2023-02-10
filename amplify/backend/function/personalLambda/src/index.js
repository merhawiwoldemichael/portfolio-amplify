const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const tableName = "personalTable";

exports.handler = async (event) => {
    const sns = new AWS.SNS();
   let content = JSON.parse(event.body);

    const saveParams = {
        TableName: tableName,
        Item: {
            "name": {
                S: content.name
            }, "email": {
                S: content.email
            }, "message": {
                S: content.message
            }
        }
    }; 
    const params = {
        TopicArn: 'arn:aws:sns:us-east-1:365073596724:personal-sns', 
        Message: JSON.stringify(content) 
    };
    await sns.publish(params).promise();
    await dynamodb.putItem(saveParams).promise();
    
    const response = { 
        statusCode: 200, 
        body: JSON.stringify(content),
     };
    return response;
};
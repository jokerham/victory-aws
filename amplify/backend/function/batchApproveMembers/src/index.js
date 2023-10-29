/* Amplify Params - DO NOT EDIT
	API_VICTORYAWS_GRAPHQLAPIENDPOINTOUTPUT
	API_VICTORYAWS_GRAPHQLAPIIDOUTPUT
	API_VICTORYAWS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const environment = process.env.ENV;
const region = process.env.REGION;
const apiGraphQLAPIIdOutput = process.env.API_VICTORYAWS_GRAPHQLAPIIDOUTPUT;
const membersTableName = `Members-${apiGraphQLAPIIdOutput}-${environment}`;
AWS.config.update({region: region});
const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const memberIds = event.arguments.input.membersIds;

    const updatePromises = memberIds.map(async (id) => {
        const params = {
            TableName: membersTableName,
            Key: {
                id: id
            },
            UpdateExpression: 'SET approved = :approved',
            ExpressionAttributeValues: {
                ':approved': 'true'
            }
        };

        await documentClient.update(params).promise();
    });

    await Promise.all(updatePromises);

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify({
            message: 'Approved field updated successfully for the specified member IDs.',
            updatedMemberIds: memberIds
        }),
    };
};

// Reference : 
// - https://alexkorep.com/amplify/amplify-function-dynamodb-access/
// - https://docs.amplify.aws/guides/api-graphql/lambda-resolvers/q/platform/js/
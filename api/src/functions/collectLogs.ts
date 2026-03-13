import { app, HttpRequest, HttpResponseInit, InvocationContext, output } from "@azure/functions";

const blobOutput = output.storageBlob({
    path: 'logs/{runguid}.log',
    connection: 'LOGSTORAGE_CONNECTION_STRING',
});

export async function collectLogs(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log("log uploaded for run id $request.query.runguid");
     const runguid = request.query.get('runguid');
    
     if (!runguid) {
        return {
            status: 400,
            body: "Please pass a runguid on the query string."
        };
    }
    context.extraOutputs.set(blobOutput, request.body);
    return {
        status: 200,
    };
};

app.http('collectLogs', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: collectLogs,
    extraOutputs: [blobOutput]
});

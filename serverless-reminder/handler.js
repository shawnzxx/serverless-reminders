'use strict';

module.exports.sendEmailReminderByRate = (event, context, callback) => {

    let AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    let ses = new AWS.SES();
    let fs = require('fs');

    let emailHtml = fs.readFileSync('./emailReminderByRate.html', 'utf-8');

    let toAndFromAddress = 'shawn.zhang@razer.com';
    let params = {
        Destination: {
            ToAddresses: [toAndFromAddress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is the message body in text format."
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "zVault Rate Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAddress],
        Source: toAndFromAddress,
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};

module.exports.sendEmailReminderOnWeekend = (event, context, callback) => {

    let AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    let ses = new AWS.SES();
    let fs = require('fs');

    let emailHtml = fs.readFileSync('./emailReminderOnWeekend.html', 'utf-8');

    let toAndFromAddress = 'shawn.zhang@razer.com';
    let params = {
        Destination: {
            ToAddresses: [toAndFromAddress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is the message body in text format."
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "zVault Weekend Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAddress],
        Source: toAndFromAddress,
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};
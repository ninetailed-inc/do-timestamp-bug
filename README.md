# Durable Object Timestamp Bug Report

Steps to reporduce: 

- Deploy the DO & Worker
- Send a lot of requests in a short amount of time - it's enough to hammer the send button on postman
- Somewhen the timestamp of the incoming fetch of the Durable Object will be before the timstamp of sending the request in the worker

You'll see something like this (look at the last element in the array): 

```json
{
  "doCreatedAt": 1666683760786,
  "timestamps": [
    {
      "durableObjectTimestamp": 1666683760786,
      "workerTimestamp": 1666683760760,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683762938,
      "workerTimestamp": 1666683762927,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683763581,
      "workerTimestamp": 1666683763571,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683763892,
      "workerTimestamp": 1666683763882,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683765225,
      "workerTimestamp": 1666683765217,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683765543,
      "workerTimestamp": 1666683765536,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683766977,
      "workerTimestamp": 1666683766970,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683769796,
      "workerTimestamp": 1666683769789,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683770411,
      "workerTimestamp": 1666683770405,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683770818,
      "workerTimestamp": 1666683770813,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683772332,
      "workerTimestamp": 1666683772327,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683772641,
      "workerTimestamp": 1666683772637,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683773714,
      "workerTimestamp": 1666683773710,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683775503,
      "workerTimestamp": 1666683775493,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683776075,
      "workerTimestamp": 1666683776072,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683777907,
      "workerTimestamp": 1666683777905,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683778466,
      "workerTimestamp": 1666683778464,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683779381,
      "workerTimestamp": 1666683779380,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683779996,
      "workerTimestamp": 1666683779995,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683781933,
      "workerTimestamp": 1666683781929,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683782638,
      "workerTimestamp": 1666683782638,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666683782958,
      "workerTimestamp": 1666683782959,
      "isDoTimestampBeforeWorkerTimestamp": true
    }
  ]
}
```

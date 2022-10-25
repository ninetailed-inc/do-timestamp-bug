# Durable Object Timestamp Bug Report

Steps to reporduce: 

- Deploy the DO & Worker
- Send a lot of requests in a short amount of time - it's enough to hammer the send button on postman
- Somewhen the timestamp of the incoming fetch of the Durable Object will be before the timstamp of sending the request in the worker

You'll see something like this (look at the last element in the array): 

```json
{
  "doCreatedAt": 1666685847645,
  "timestamps": [
    {
      "durableObjectTimestamp": 1666685847645,
      "workerTimestamp": 1666685847623,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685847877,
      "workerTimestamp": 1666685847847,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685848226,
      "workerTimestamp": 1666685848210,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685848558,
      "workerTimestamp": 1666685848540,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685848937,
      "workerTimestamp": 1666685848901,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685849353,
      "workerTimestamp": 1666685849323,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685850200,
      "workerTimestamp": 1666685850184,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685850658,
      "workerTimestamp": 1666685850630,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685851328,
      "workerTimestamp": 1666685851314,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685851786,
      "workerTimestamp": 1666685851770,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685852114,
      "workerTimestamp": 1666685852087,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685852743,
      "workerTimestamp": 1666685852720,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685853150,
      "workerTimestamp": 1666685853137,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685853479,
      "workerTimestamp": 1666685853461,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685853874,
      "workerTimestamp": 1666685853860,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685855546,
      "workerTimestamp": 1666685855531,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685855982,
      "workerTimestamp": 1666685855966,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685856308,
      "workerTimestamp": 1666685856297,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685856801,
      "workerTimestamp": 1666685856790,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685857097,
      "workerTimestamp": 1666685857087,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685857481,
      "workerTimestamp": 1666685857470,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685857842,
      "workerTimestamp": 1666685857823,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685858170,
      "workerTimestamp": 1666685858159,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685858484,
      "workerTimestamp": 1666685858476,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685858856,
      "workerTimestamp": 1666685858839,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685859179,
      "workerTimestamp": 1666685859165,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685859510,
      "workerTimestamp": 1666685859505,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685859894,
      "workerTimestamp": 1666685859886,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685860196,
      "workerTimestamp": 1666685860192,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685860572,
      "workerTimestamp": 1666685860567,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685860914,
      "workerTimestamp": 1666685860906,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685861276,
      "workerTimestamp": 1666685861271,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685861587,
      "workerTimestamp": 1666685861581,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685861897,
      "workerTimestamp": 1666685861891,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685862235,
      "workerTimestamp": 1666685862233,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685862943,
      "workerTimestamp": 1666685862932,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685863179,
      "workerTimestamp": 1666685863176,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685863552,
      "workerTimestamp": 1666685863548,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685863886,
      "workerTimestamp": 1666685863873,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685866765,
      "workerTimestamp": 1666685866768,
      "isDoTimestampBeforeWorkerTimestamp": true
    },
    {
      "durableObjectTimestamp": 1666685867273,
      "workerTimestamp": 1666685867277,
      "isDoTimestampBeforeWorkerTimestamp": true
    },
    {
      "durableObjectTimestamp": 1666685867839,
      "workerTimestamp": 1666685867835,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685871429,
      "workerTimestamp": 1666685871425,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685871923,
      "workerTimestamp": 1666685871923,
      "isDoTimestampBeforeWorkerTimestamp": false
    },
    {
      "durableObjectTimestamp": 1666685872167,
      "workerTimestamp": 1666685872170,
      "isDoTimestampBeforeWorkerTimestamp": true
    },
    {
      "durableObjectTimestamp": 1666685872617,
      "workerTimestamp": 1666685872624,
      "isDoTimestampBeforeWorkerTimestamp": true
    }
  ]
}
```

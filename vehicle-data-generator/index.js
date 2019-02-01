
/*

In this file you will find how we send raw data to other services via nats
There are 2 question points for you to tell us the answer on your presentation
If you're up for it

*/
const _     = require("underscore")
const async = require("async")

// NATS Server is a simple, high performance open source messaging system
// for cloud native applications, IoT messaging, and microservices architectures.
// https://nats.io/
// It acts as our pub-sub (https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
// mechanism for other service that needs raw data
const NATS = require("nats")

// At this point, do not forget to run NATS server!

// NATS connection happens here
// After a connection is made you can start broadcasting messages (take a look at nats.publish())
const nats = NATS.connect({ json: true })

const mockData = {
	odometer: require("../meta/odometer.json"),
	current:  require("../meta/current.json"),
	voltage:  require("../meta/voltage.json"),
	speed:    require("../meta/speed.json")
}

// This function will start reading out json data from file and publish it on nats
const readOutLoud = (vehicleName, cb) => {
	async.forEachOf(mockData, (data, type, cb) => {
		async.eachSeries(data, (datum, cb) => {
			setTimeout(() => {
				nats.publish(`vehicle:${vehicleName}:${type}`, datum)
				cb()
			}, _.random(900, 1500))
		}, cb)
	}, cb)
}

// This next few lines simulate Henk's (our favorite driver) shift
console.log("Henk checks in on test-bus-1 starting his shift...")
async.forever((cb) => {
	readOutLoud("test-bus-1", cb)
})
// To make your presentation interesting maybe you can make henk drive again in reverse
const mqtt = require('mqtt')

const url = process.env.EXPO_PUBLIC_MQTT_BROKER_API + 
            ':' + process.env.EXPO_PUBLIC_MQTT_BROKER_TCP_PORT
            '/mqtt'
/***
    * Node.js
    * This document explains how to use MQTT over TCP with both mqtt and mqtts protocols.
    * EMQX's default port for mqtt connections is 1883, while for mqtts it is 8883.
    */

// Create an MQTT client instance
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Authentication
  clientId: 'Next_Gen_Home_Client',
  username: 'NGHTest',
  password: 'NGHTest',
}

const client  = mqtt.connect(url, options)

const topics = ["test"]
client.on('connect', function () {
  console.log('Connected')
  // Subscribe to a topic
  topics.forEach(feed => {
    client.subscribe(topic, function (err) {
      if (!err) {
        // Publish a message to a topic
        client.publish('test', 'Hello mqtt')
      }
    })
  });
})

client.on('reconnect', function () {
    console.log('Reconnecting...')
  })

client.on('close', function () {
    console.log('Disconnected')
})
// Receive messages
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})

export default function publish(topic, message){
  client.publish(topic, message)
}
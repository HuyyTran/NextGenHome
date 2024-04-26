const mqtt = require('mqtt')

const url = process.env.EXPO_PUBLIC_MQTT_BROKER_API 

const AIO_USERNAME = 'huynguyenducbao2003';
const AIO_KEY = process.env.EXPO_PUBLIC_ADA_API_KEY;

// Create an MQTT client instance
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Authentication
  clientId: 'Next_Gen_Home_Front_End_Client',
  username: AIO_USERNAME,
  password: AIO_KEY,
}

const client  = mqtt.connect(url, options)

const topics =  
[
  'aiot-led',
  'aiot-temp',
  'aiot-humi', 
  'aiot-light', 
  'aiot-supporter', 
  'aiot-ai',
  'aiot-fan',
  'aiot-ledcolor'
];
client.on('connect', function () {
  console.log('Connected')
  // Subscribe to a topic
  topics.forEach(feed => {
    client.subscribe(topic, function (err) {
      if (!err) {
        // Publish a message to a topic
        console.log("Connected and subscribed to all topics");
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
  console.log('Received data:', message.toString(), 'from [feed] <-', topic);
})
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here
    port: 50541 // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: HMH');
    setTimeout(() => {
      conn.write('Move: up');
    }, 250);
    setInterval(() => {
      conn.write('Move: up');
    }, 50);
  });

  return conn;
};

module.exports = { connect };
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here
    port: 50541 // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // handle successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: HMH');
  });

  return conn;
};

module.exports = { connect };
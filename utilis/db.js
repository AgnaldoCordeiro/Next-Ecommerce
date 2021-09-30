import mongoose from 'mongoose';

const connection = {};

 function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
     mongoose.disconnect();
  }
  const db =  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

 function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
       mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

function convertDocObj(doc){
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocObj };
export default db; 
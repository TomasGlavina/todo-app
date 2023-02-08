const mongoose = require('mongoose');
const app = require('./app');

const mongoUSR = process.env.MONGO_USR;
const mongoPASS = process.env.MONGO_PASS;

const uri = `mongodb+srv://${mongoUSR}:${mongoPASS}@todolistdb.cyltuzv.mongodb.net/?retryWrites=true&w=majority`;
const port = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

connect()
  .then(() => app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  }))
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));

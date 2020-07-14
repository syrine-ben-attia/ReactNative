let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

const imageRouter = require('../backend/routes/user.routes')
const articleRouter = require('../backend/routes/article.route')

// MongoDB Configuration
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://chaima:bookrecsys123@cluster0-z4urb.gcp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected')
},
    error => {
        console.log('Database could not be connected: ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//app.use(cors());

app.use('/public', express.static('public'));

app.use('/imageRouter', imageRouter)
app.use('/articleRouter', articleRouter)



const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// app.use((req, res, next) => {
//     // Error goes via `next()` method
//     setImmediate(() => {
//         next(new Error('Something went wrong'));
//     });
// });

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
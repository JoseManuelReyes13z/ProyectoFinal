const express = require("express");
const app = express();
const PORT = 3000;
const publicRoutes = require('./src/routes/public.routes');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use('/', publicRoutes);

app.get('/', (req, res) => {

    res.render('public/index');

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

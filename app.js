const express = require("express");
require('./src/config/db'); // Asegúrate de que la conexión a la base de datos se establezca al iniciar la aplicación
const app = express();
const PORT = 3000;
const publicRoutes = require('./src/routes/public.routes');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use('/', publicRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

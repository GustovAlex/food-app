const express = require("express")
const fileUpload = require("express-fileupload")
const mongoose = require("mongoose")
const config = require("config")
const cors = require("cors");
const adminRoutes = require("./routes/admin-routes");
const categoryRoutes = require("./routes/category-routes");
const productRoutes = require("./routes/product-routes");
const orderRoutes = require("./routes/order-routes")
const fileRoutes = require("./routes/file-routes")

const app = express()
const PORT = config.get("serverPort")

app.use(express.json());

app.use(cors());
app.use(fileUpload())
app.use("/api", adminRoutes, categoryRoutes, productRoutes, orderRoutes, fileRoutes);

async function start() {
	try {
		await mongoose.connect(
			config.get("uriDataBase"),
			{ useNewUrlParser: true, useUnifiedTopology: true },
			(err) => {
			  if (err) console.error(err);
			  else console.log("Connected to the mongodb");
			}
		  );
		app.listen(PORT, () => {
			console.log("SERVER has started on port:", PORT)
		})
	} catch (e) {
		console.log(e);

	}
}

start()
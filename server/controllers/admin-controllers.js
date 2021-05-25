const bcrypt = require("bcryptjs");
const config = require("config");
const Admin = require("../models/Admin-model");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

const addAdmin = async (req, res) => {
  try {
    const { adminEmail, password, category, product} = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      adminEmail: adminEmail,
      password: hashPassword,
      categoty: category || [],
      order: order || [],
    });

    await admin.save();
    return res.json({ admin });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { adminEmail, password } = req.body;

    const admin = await Admin.findOne({ adminEmail });

    if (!admin) {
      return res.status(401).json({ message: "Wrong email" });
    }

    const isPassValid = bcrypt.compareSync(password, admin.password);
    if (!isPassValid) {
      return res.status(401).json({ message: "Uncorrect password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      config.get("secretKey", { expiresIn: "1h" })
    );
    return res.json({
      token,
    });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const getData = async (req, res) => {
  try {
    const admin = await Admin.findById({_id: req.user._id})
    .populate({
      path: 'category', 
      model: 'Сategory',
      populate: {
        path: 'product',
        model: 'Product',
      }, 
  })
  .populate({
    path: 'order', 
    model: 'Order',
    populate: {
      path: 'product',
      model: 'Product',
    }, 
  })
      
    const adminData = {
      categories: admin.category,
      orders: admin.order,
    };

    return res.json({
      adminData,
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
};

module.exports = { addAdmin, loginAdmin, getData };
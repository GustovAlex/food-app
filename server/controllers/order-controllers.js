const Order = require("../models/Order-model");
const Admin = require("../models/Admin-model");

const addOrder = async (req, res) => {
  try {
    const {
		сlientName,
		сlientPhone,
		clientComment,
		product
    } = req.body;
    
    const order = await new Order({
		сlientName,
		сlientPhone,
		clientComment,
		product
    });
	console.log("order", order)

    await order.save();

    const admin = await Admin.findById(req.user._id);
    admin.order.push(order._id);
    await admin.save();

    return res.json({ order, message: "order was added" });
  } catch (e) {
    console.log(e);
    res.json({ e: e, message: "something wrong" });
  }
};

// const getCategory = async (req, res) => {
// 	try {
// 	  const categoriesList = await Category.find();
// 	  return res.json({ categoriesList });
// 	} catch (e) {
// 	  console.log(e);
// 	  res.json({ message: "something wrong" });
// 	}
//   };

//   const deleteCategory = async (req, res) => {
// 	try {
// 	  await Category.findByIdAndDelete(req.params.id);

// 	  const admin = await Admin.findById(req.user._id);
//     	await admin.category.splice(
// 		admin.category.indexOf(req.params.id),
//       1
//     );
//     await admin.save();
  
// 	  return res.json({ message: "Category was deleted" });
// 	} catch (e) {
// 	  console.log(e);
// 	  res.json({ message: "something wrong" });
// 	}
//   };

module.exports = {
	addOrder,
  };
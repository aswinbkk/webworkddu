import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const readUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success:true,
      message: "Users fetched successfully",
      data: users,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const editUser = async (req, res) =>{
   try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,
      { returnDocument: 'after', runValidators: true})

      if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Updated successfully",
      data: user,
    });

   } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
   }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });

  } catch (error) {
    res.ststus(500).json({
      success: false,
      message: error.message,
    });
  }
}
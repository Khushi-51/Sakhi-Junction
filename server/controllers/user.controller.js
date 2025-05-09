import User from "../models/user.model.js";

class UserController {
  static async profile(req, res) {
    const userId = req.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  }
  
  static async updateUser(req, res) {
    try {
      const { firstName, lastName, selectedColor, avatar } = req.body;
      const userId = req.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.set({
        firstName,
        lastName,
        avatar,
        color: selectedColor,
        profileSetup: true,
      });
      await user.save();

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error updating user:", error); // Log the error for debugging
      return res
        .status(500)
        .json({ message: "Something went wrong, please try again later" });
    }
  }
}

export default UserController;
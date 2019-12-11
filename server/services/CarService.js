import mongoose from "mongoose";
import Car from "../models/Car";
import ApiError from "../utils/ApiError";
import User from "../models/User";
import usersService from "./UsersService";

const _repository = mongoose.model("Car", Car);

class CarService {
  async getAll() {
    return await _repository.find({}).populate("creator");
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async create(username, rawData) {
    let user = await usersService.getByName(username);
    rawData.creator = user._id;
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const carService = new CarService();
export default carService;

const banksModel = require("../models/banksModel");

const getBanks = async (request, response) => {
  try {
    const banks = await banksModel.find();
    response.send(banks);
  } catch (error) {
    console.log(error);
  }
};

const getSingleBank = async (request, response) => {
  try {
    const id = request.params.id;

    const bank = await banksModel.findOne({ _id: id });
    response.send(bank);
  } catch (error) {
    console.log(error);
  }
};

const addBank = async (request, response) => {
  try {
    let bank = request.body;
    let newBank = new banksModel(bank);

    response.send({ message: "Bank added", data: await newBank.save() });
  } catch (error) {
    console.log(error);
  }
};

const updateBank = async (request, response) => {
  try {
    let newBankInfo = request.body;
    let bankId = request.query.id;

    await banksModel.findByIdAndUpdate(bankId, newBankInfo);
    response.send("Bank updated");
  } catch (error) {
    console.log(error);
  }
};

const deleteBank = async (request, response) => {
  try {
    let bankId = request.query.id;
    await banksModel.findOneAndDelete(bankId);

    response.send("Bank deleted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBanks, addBank, updateBank, deleteBank, getSingleBank };

//Banks Database
let banks = [
  { name: "Fidelity", branch: "Kaneshie", id: 1 },
  { name: "ADB", branch: "Circle", id: 2 },
  { name: "ABSA", branch: "Dansoman", id: 3 },
];

const getBanks = (request, response) => {
  response.send(banks);
};

const addBank = (request, response) => {
  let newBank = request.body;
  banks.push(newBank);

  response.send({ message: "Bank added", bank: newBank });
};

const updateBank = (request, response) => {
  let newBankInfo = request.body;
  let bankId = request.query.id;

  const updatedBanksArr = banks.map((bank) => {
    if (bank.id == bankId) return newBankInfo;
    else return bank;
  });

  banks = updatedBanksArr;

  response.send(banks);
};

const deleteBank = (request, response) => {
  let bankId = request.query.id;

  const filteredBanks = banks.filter((bank) => {
    if (bank.id != bankId) return bank;
  });

  banks = filteredBanks;
  response.send(banks);
};

module.exports = { getBanks, addBank, updateBank, deleteBank };

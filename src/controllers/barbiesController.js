import dados from "../models/dados.js";
const { barbies } = dados;

const getAllBarbies = (req, res) => {
  const resultado = barbies;

  res.status(200).json({
    total: resultado.length,
    barbies: resultado,
  });
};

const getBarbiesById = (req, res) => {
  let id = parseInt(req.params.id);

  const barbie = barbies.find((b) => b.id === id);

  res.status(200).json({
    sucess: true,
    barbie: barbie,
  });
};

const createBarbies = (req, res) => {
  const { nome, profissao, anoLancamento } = req.body;

  if (!nome || !profissao) {
    return res.status(400).json({
      sucess: false,
      message: "Nome e profissão são obrigatórios!",
    });
  }
  const novaBarbie = {
    id: barbies.length + 1,
    nome: nome,
    profissao: profissao,
    anoLancamento: anoLancamento,
  };
  barbies.push(novaBarbie);

  res.status(201).json({
    sucess: true,
    messagem: "Barbie cadastrada com sucesso!",
    barbie: novaBarbie,
  });
};

const deleteBarbies = (req, res) => {
  let id = parseInt(req.params.id);

  const barbieParaRemover = barbies.find((b) => b.id === id);

  if (!barbieParaRemover) {
    return res.status(404).json({
      sucess: false,
      message: `Essa barbie não existe, ${id}`,
    });
  }

  const barbiesFiltradas = barbies.filter((barbie) => barbie.id !== id);

  barbies.splice(0, barbies.length, ...barbiesFiltradas);

  res.status(200).json({
    sucess: true,
    message: "A barbie foi removida com sucesso",
    barbieRemovida: barbieParaRemover,
  });
};
export { getAllBarbies, getBarbiesById, createBarbies, deleteBarbies };

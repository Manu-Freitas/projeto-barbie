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

const updateBarbie = (req, res) => {

  const id = parseInt(req.params.id);
  const {nome, profissao, anoLancamento} = req.body;
  const idParaEditar = id;

  if(isNaN(idParaEditar)){
    return res.status(400).json({
      sucess: false,
      message: "O id deve ser um número válido!"
    })
  }

const barbieExistente = barbies.find(barbie => barbie.id === idParaEditar);

if(!barbieExiste) {
  return res.status(404).json({
    sucess: false,
    message: `Barbie com Id: ${id} não existe.`
  })
}

const barbiesAtualizadas = barbies.map(barbie => barbie.id === idParaEditar ? {
  ...barbie,
  ...(nome && {nome}),
  ...(profissao && {profissao}),
  ...(anoLancamento && {anoLancamento: parseInt (anoLancamento)})
} : barbie)

barbies.splice(0, barbies.length, ...barbiesAtualizadas);

const barbieNova = barbies.find(barbie => barbie.id === idParaEditar);

res.status(200).json({
  sucess: true,
  message: `Dados da Barbie ID ${idParaEditar}atualizado com sucesso!`,
  barbie: barbieNova
})
}
export { getAllBarbies, getBarbiesById, createBarbies, deleteBarbies, updateBarbie };

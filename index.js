const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const mecanicoRoutes = require('./routes/mecanico');
const clienteRoutes = require('./routes/cliente');
const carroRoutes = require('./routes/carro');
const servicoRoutes = require('./routes/servico');
const manutencaoRoutes = require('./routes/manutencao');
const orcamentoRoutes = require('./routes/orcamento');

const app = express();
app.use(express.json());

// Rotas
app.use('/mecanico', mecanicoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/carro', carroRoutes);
app.use('/servico', servicoRoutes);
app.use('/manutencao', manutencaoRoutes);
app.use('/orcamento', orcamentoRoutes);

// Swagger
const swaggerFile = path.join(__dirname, 'resources', 'swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

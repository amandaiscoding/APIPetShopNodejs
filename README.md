# Avaliação Jovem Programador - Senac (20/10/2023)

Crie uma API para um PetShop.

Nessa API deverá ser possível:
Criar, Ler, Alterar, Deletar(CRUD) um Cliente;
Criar, Ler, Alterar, Deletar(CRUD) um Cachorro;
Criar, Ler, Alterar, Deletar(CRUD) um Atendimento;
Criar, Ler, Alterar, Deletar(CRUD) um Funcionário(Atendente);

O banco de dados será composto por:
Tabela Usuários - Colunas: id, e-mail, senha, permissão
Tabela Clientes - Colunas: id, nome, telefone (único).
Tabela Cachorros - Colunas: id, nome, 
Tabela Atendimentos  - Colunas: Dia, Hora, Valor, Concluído.

Relações:
Um usuário pode ser ou não um cliente. Um cliente tem um usuário;
Um cliente pode ter nenhum ou vários cachorros. Um cachorro é de um cliente;
Um atendimento é de um cachorro. Um cachorro pode ter nenhum ou vários atendimentos;
Observações:
Usuário permissão 0 = Administrador, 1 = Cliente, 2 = funcionário(atendente)

Apenas Administradores podem cadastrar Funcionários.
Apenas Funcionários podem cadastrar Clientes.
Todos podem cadastrar atendimento.

Faça um método de login, para gerar um JWT e através dele realize as demais autenticações para poder realizar corretamente os demais cadastros.

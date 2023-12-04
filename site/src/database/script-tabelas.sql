-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE mementoMori;

USE mementoMori;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	dtNasc date,
    fkEstoico int
);

create table estoicos (
	id int primary key auto_increment,
    nome varchar(50),
    titulo varchar(50),
    descricao varchar(1500)
    );
    
insert into estoicos(nome, titulo, descricao) values 
('Zenão', 'O pai de todos os estoicos', 
'fundador da ideologia, conhecido como pai de todos os estoicos
 Zenão de Cítio (333 a.C., 263 a.C. (70 anos)), em uma das anedotas 
 sobre sua vida Zenão é retratado como um rico mercador da cidade de Cítio, 
 no Chipre. Que após sobreviver a um naufrágio em que perdeu tudo o que tinha, 
 diante desta uma catástrofe que destruiu todos seus bens materiais e matou seus 
 colegas e funcionários invés de se render a revolta e tristeza buscando conforto
 em prazeres efêmeros como a bebida ou se colocando em uma posição de vítima o 
 induzindo a depressão Zenão buscou abrigo na racionalidade para entender como 
 agir diante da imprevisibilidade da vida'),
 ('Epicteto', 'O mais estoico entre os estoicos',
 'Epicteto foi um filósofo estoico nascido em Hierápolis, 
 50 d.C. filho provavelmente de escravos,
 ele mesmo era escravo sendo vendido em Roma a um funcionário de Nero:
 Epafrodito. Epafrodito autorizava Epicteto a assistir às conferências 
 do estóico Musônio Rufo, grande figura do estoicismo. 
 Pouco depois da morte de Nero em 68, Epicteto foi liberto sob condições que permanecem desconhecidas.
 Ele então se dedicou a praticar e ensinar filosofia estóica.
 Sua vida é relativamente pouco conhecida e ele não deixou nenhum trabalho escrito de sua autoria.'),
 ('Marco Aurélio','O último bom imperador',
 'Marco Aurélio foi o último de uma sequência chamada de cinco bons imperadores de Roma 
 cada um trazendo uma grande contribuição para o império romano,
 Marco Aurélio foi o imperador regente durante uma época marcada por guerras 
 e conflitos além da peste antonina que matou milhões, mesmo cometendo erros durante 
 seu reinado Marco Aurélio era um exemplo de humildade e bondade além de pregar igualdade 
 ao povo e se afastar dos luxos da vida focando mais em seu trabalho e servir a população romana, 
 durante seu tempo como imperador Marco Aurélio enterrou 8 filhos e lidou com conflitos tanto internos quanto externos, 
 mas mesmo assim não era uma pessoa amargurada tampouco depressivo ou estressado, era retratado com uma figura de 
 liderança com forte tomada de decisão e intelecto avançado, não demonstrava fraqueza ou nervosismo diante de 
 seus deveres e vivia sempre em função de trazer soluções para seu império'),
 ('Sêneca ','O jovem',
 'Lucius Annaeus Sêneca Conhecido como Sêneca, o Jovem ou simplesmente Sêneca, nasceu por volta de 4 a.C. na atual Espanha, 
em Córdoba, sendo criado em Roma. Ele morreu em 65 d.C. Era de uma família muito rica,
que foi para Roma quando ele e seus dois irmãos, Novato e Mela, eram crianças,
Sêneca foi um dramaturgo de sucesso, uma das pessoas mais ricas de Roma, estadista famoso e conselheiro do imperador. Na escrita, 
foi prolífico, escrevendo cartas, tratados, poemas e peças de teatro. Com todas essas frentes e interesses, 
o filósofo buscava a razão e a harmonia entre o que aprendia e como agia.
 Ele não estudava filosofia de uma maneira desconectada da realidade. Muito pelo contrário, 
 como uma marca da escola estoica, Sêneca participava da vida pública, testando o Estoicismo no seu dia a dia. 
 Além disso, teve que enfrentar o exílio, problemas de saúde e pôr fim a condenação por Nero à morte por suicídio. 
 Filosofia e vida assim eram uma coisa só, como deve ser, e ele a seguiu com seus erros e acertos,
 mas de toda forma tornando-se referências e autores mais fortes do Estoicismo. ');
 
 
 
select * from estoicos;

select estoicos.nome, count(fkEstoico) from estoicos 
	left join usuario on usuario.fkEstoico = estoicos.id
		group by estoicos.nome;
		 

select count(pontuacao.id) tentativas from usuario
	join pontuacao on usuario.id = fkUsuario
        where usuario.id = 5;
	select max(round((pontuacao / 15) * 100)) porcentagem,
    min(round(100 - (pontuacao / 15) * 100))porcentagemRestante,
    max(pontuacao) pontuacaoMax from pontuacao
		where fkUsuario = 5;
select * from pontuacao;



select * from usuario;

create table pontuacao (
	id int auto_increment,
	pontuacao int,
	tempo varchar(10),
    dtTentativa datetime,
	fkUsuario int,
    constraint fkUsuario
    foreign key (fkUsuario) references
    usuario(id),
    PRIMARY KEY(id,fkUsuario)
);
create view vw_analyticsEstoicos 
as
select count(fkEstoico) Seneca,
(select count(fkEstoico) from usuario where fkEstoico = 3) as Epicteto,
(select count(fkEstoico) from usuario where fkEstoico = 2) as MarcoAurelio,
(select round(avg(timestampdiff(year,dtNasc, now())),0)from usuario where fkEstoico = 4) idade4,
(select round(avg(timestampdiff(year,dtNasc, now())),0) from usuario where fkEstoico = 3) as idade3,
(select round(avg(timestampdiff(year,dtNasc, now())),0) from usuario where fkEstoico = 2) as idade2
 from usuario
	where fkEstoico = 4;
 
 select * from vw_analyticsEstoicos;
    

select
	pontuacao as acertos,
            tempo
        from pontuacao
        where fkUsuario = 5
        order by id desc limit 7;

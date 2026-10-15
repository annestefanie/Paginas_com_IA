/* Acervo: [título, ano, diretor, gênero, sinopse, dias até voltar (0 = disponível)] */
const FILMS = [
  ['Casablanca',1942,'Michael Curtiz','Romance','Um bar no Marrocos, um amor do passado e uma escolha impossível.',0],
  ['Cidadão Kane',1941,'Orson Welles','Drama','A última palavra de um magnata abre a investigação de uma vida.',4],
  ['Janela Indiscreta',1954,'Alfred Hitchcock','Suspense','Preso em casa, um fotógrafo suspeita do vizinho.',0],
  ['Um Corpo que Cai',1958,'Alfred Hitchcock','Suspense','Um detetive com medo de altura persegue uma obsessão.',0],
  ['Psicose',1960,'Alfred Hitchcock','Terror','Uma parada num motel isolado muda tudo.',2],
  ['Cantando na Chuva',1952,'Gene Kelly','Musical','Hollywood vive a transição do cinema mudo para o falado.',0],
  ['Os Sete Samurais',1954,'Akira Kurosawa','Aventura','Aldeões contratam samurais sem mestre para enfrentar bandidos.',0],
  ['Era Uma Vez em Tóquio',1953,'Yasujiro Ozu','Drama','Pais idosos visitam os filhos adultos, ocupados demais.',6],
  ['Acossado',1960,'Jean-Luc Godard','Nouvelle Vague','Um ladrão em fuga e uma jovem americana em Paris.',0],
  ['Os Incompreendidos',1959,'François Truffaut','Nouvelle Vague','Um garoto parisiense descobre a rua como refúgio.',0],
  ['A Doce Vida',1960,'Federico Fellini','Drama','Uma semana de excessos e vazio na Roma noturna.',3],
  ['Metrópolis',1927,'Fritz Lang','Ficção','Uma cidade-futuro dividida entre quem pensa e quem opera.',0],
  ['O Gabinete do Dr. Caligari',1920,'Robert Wiene','Terror','Um sonâmbulo, um médico e cenários que parecem pesadelo.',0],
  ['Nosferatu',1922,'F. W. Murnau','Terror','O conde Orlok viaja em busca de uma nova casa e de uma noiva.',0],
  ['Rashomon',1950,'Akira Kurosawa','Drama','Quatro testemunhas, quatro versões do mesmo crime.',0],
  ['Deus e o Diabo na Terra do Sol',1964,'Glauber Rocha','Cinema Novo','Sertão, fé e violência num marco do cinema brasileiro.',0],
  ['Dias Selvagens',1990,'Wong Kar-wai','Romance','Hong Kong, 1960: amores que nunca se encontram na hora certa.',0],
  ['Amores Expressos',1994,'Wong Kar-wai','Romance','Dois policiais solitários e duas noites de chuva neon.',5],
  ['O Poderoso Chefão',1972,'Francis F. Coppola','Crime','Um filho relutante assume o negócio da família.',0],
  ['Se Meu Apartamento Falasse',1960,'Billy Wilder','Comédia','Um funcionário empresta o apartamento aos chefes e se complica.',0]
].map((f,i)=>({id:i,title:f[0],year:f[1],dir:f[2],genre:f[3],syn:f[4],out:f[5],rent:9+(i*7)%7+(f[1]<1950?2:0),buy:49+(i*13)%35,p:'p'+(i%4)}));

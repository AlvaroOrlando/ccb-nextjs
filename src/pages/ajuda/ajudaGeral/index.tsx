import styles from '@/styles/ajudaGeral.module.scss'
import Crumb from '@/components/Crumb'
import { MainContainerStyles } from '@/components/Containers/MainContainer/styles'


export default function AjudaGeral(){
    return (
      <>
        <Crumb />
        <MainContainerStyles>

            <div className={`${styles.accordion} accordion`} id="accordionExample">
              {/* Geral */}
              <div className={`alert alert-info mb-0 rounded-0`} role="alert">
                  GERAL
              </div>

              {/* Principal */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingOne">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Principal
                  </button>
                </h2>
                <div id="collapseOne" className={`accordion-collapse collapse`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Ajuda CCB</h4>
                      <p>Para dar maior produtividade a nosso site, devido ao intenso movimento, antes de solicitar ajuda a um atendente online, <b>clique nos tópicos abaixo</b> para tirar as dúvidas mais frequentes. Obrigado.</p>
                  </div>
                </div>
              </div>

              {/* Como me associar */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwo">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Como me associar?
                  </button>
                </h2>
                <div id="collapseTwo" className={`accordion-collapse collapse`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Como me associar ao CCB?</h4>
                      <ol>
                        <li> Entre em nosso site <p style={{fontSize:'0.8rem'}}> (www.clubedoscompositores.com.br)</p> e clique em <strong>&quot;Associar ao CCB&quot;</strong>.</li>
                        <li> Preencha o cadastro com seus dados.</li>
                        <li> Escolha a forma de pagamento da mensalidade. Pode ser por boleto, crédito automático ou cartão de crédito.</li>
                        <li> Ao terminar, sua página no Portal CCB já estará automaticamente no ar por dois dias, para você ver como vai ficar.</li>
                        <li> Pegue sua senha, entre na Área Vip e atualize sua página na mesma hora, enviando fotos, músicas, releases, agenda, etc.</li>
                        <li id="matriculaAjuda"> Pague a Matrícula para a página ficar definitivamente no ar com suas músicas tocando para o mundo.</li>
                      </ol>
                      <p className={`alert alert-danger py-0`} role="alert">Para se desfiliar, envie uma carta com sua assinatura pedindo sua desfiliação, juntamente com a carteirinha cortada ao meio, para: CCB - Caixa Postal 2063 - CEP 11060-970 SP. Para sua segurança, Não serão aceitos pedidos de desfiliação por email.</p>
                      <p>
                        Caso não ache o que procura, envie um e-mail para 
                      </p>
                      <p style={{fontSize:'0.8rem'}}>
                        <b>webmaster@clubedoscompositores.com.br</b>
                      </p>
                  </div>
                </div>
              </div>

              {/* Quanto vou gastar para me associar ao CCB?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingThree">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Quanto vou gastar para me associar ao CCB?
                  </button>
                </h2>
                <div id="collapseThree" className={`accordion-collapse collapse`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Quanto vou gastar
                      para me associar ao CCB?</h4>
                    <p>Preços para se associar ao CCB:</p>
                    <p>- Matrícula - R$ 84,00 (já inclusos a primeira mensalidade, a Carteira de Compositor e a taxa do correio)</p>
        
                    <p> - Mensalidade - R$39,00 por mes. (Com direito a diversos benefícios, inclusive a rodízio ilimitado de músicas
                          com duas músicas online tocando permanentemente em sua página, na Radionline e no CCB Player, além de serem
                          colocadas à venda na vitrine da loja virtual Music Box, dois registros grátis por mes - SÃO 24 REGISTROS GRÁTIS POR ANO,
                          só isso já paga os custos de mensalidade.
                    </p>
                  </div>
                </div>
              </div>

                {/* Quem pode se associar?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingFour">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Quem pode se associar?
                  </button>
                </h2>
                <div id="collapseFour" className={`accordion-collapse collapse`} aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Quem pode se associar ao CCB?</h4>
                    <p>Qualquer pessoa que desenvolva alguma atividade, mesmo amadora, relacionada à música ou poesia.
                      Se você fizer qualquer tipo de música, poesia, ou apenas letra para música; se for músico, cantor,
                      fizer parte de dupla, grupo ou banda. Ou até mesmo divulgar a própria banda.
                    </p>
                  </div>
                </div>
              </div>

                {/* Quais documentos preciso para me associar?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingFive">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Quais documentos preciso para me associar?
                  </button>
                </h2>
                <div id="collapseFive" className={`accordion-collapse collapse`} aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Quais documentos
                      preciso para me associar ao CCB?</h4>
                    <p>Apenas o número do CPF e seus dados pessoais (nome, endereço, email, etc.).</p>
                    <p> Se for menor de idade e não tiver CPF, pode usar o do pai ou responsável.</p>
                  </div>
                </div>
              </div>

                {/* Acabei de me associar. O que faço agora?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingSix">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Acabei de me associar. O que faço agora?
                    </button>
                  </h2>
                  <div id="collapseSix" className={`accordion-collapse collapse`} aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Primeiros Passos: Acabei
                        de me associar, o que devo fazer agora?</h4>
                      <ol>
                        <li> Ao terminar de se associar você recebe imediatamente em seu e-mail uma senha.</li>
                        <li> Com a senha e seu e-mail antigo, faça o Login (canto superior direito) e, no menu principal, acesse a Sala VIP (canto superior esquerdo).</li>
                        <li> Na Área vip, você encontra diversos links com tudo o que precisa para ver sua página e suas músicas tocando.</li>
                      </ol>
                      <h4>Por exemplo:</h4>
                      <p>Enviar músicas - clique no link enviar músicas para tocar suas músicas na mesma hora na Radionline e em sua página CCB.</p>
                      <p>Enviar fotos - clique no link para colocar novas fotos em sua página.</p>
                      <p>Enviar Letras- clique no link para enviar letras e poesias para sua página CCB e receber avaliações e estrelas.</p>
                    </div>
                  </div>
              </div>

                {/* Como o CCB divulga meu trabalho?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingSeven">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      Como o CCB divulga meu trabalho?
                    </button>
                  </h2>
                  <div id="collapseSeven" className={`accordion-collapse collapse`} aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Como o CCB
                        divulga meu trabalho?</h4>
                      <p>O CCB tem diversos métodos de divulgação:</p>
                      <p>- O CCB divulga você através da criação de página exclusiva sua contendo músicas, releases, fotos, agenda, etc. no Portal CCB, acessada milhares de vezes por dia, inclusive por produtores, cantores, empresários, gravadoras, editoras, etc. Ali, você pode ver o numero de pedidos para sua música, atualizado instantaneamente. Isto significa o número de vezes que alguém entrou em sua página ou na Radionline e ouviu sua música.</p>
                      <p>- O CCB tem um sistema exclusivo pelo qual você pode enviar e disponibilizar automaticamente sua página e suas músicas para dezenas de fãs e amigos com um simples clique.</p>
                      <p>- O CCB divulga você disponibilizando arquivos digitais de músicas e CDs selecionados por estilo, para produtores, artistas e gravadores, a pedido, por ocasião da montagem de repertório para discos.</p>
                      <p>- O CCB divulga você disponibilizando material para rádios de todo o Brasil. São os próprios programadores que nos pedem material, valorizando seu produto.</p>
                      <p>- O CCB divulga você tocando suas músicas, no mínimo 4 vezes ao dia e disponibilizando para pedidos 24hs. por dia na www.radionline.com.br, um sucesso de rádio internet.</p>
                      <p>- O CCB divulga você colocando-o lado a lado com os maiores nomes da música brasileira na sua exclusiva Sala dos Artistas.</p>
                      <p>- O CCB divulga você através de sua gravadora e editora Dallas Music e do selo Dallas Music, com suas lançamentos exclusivos e coletâneas de sucesso.</p>
                      <p>- O CCB divulga você disponibilizando suas Músicas, Cds ou DVDs na Loja Virtual Music Box, onde você poderá vende-las com as melhores porcentagens do mercado e acompanhar a contabilidade através de programas em tempo real.</p>
                    </div>
                  </div>
              </div>

              {/* Quais os principais benefícios de me associar ao CCB?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingEight">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      Quais os principais benefícios de me associar ao CCB?
                    </button>
                  </h2>
                  <div id="collapseEight" className={`accordion-collapse collapse`} aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Quais são os principais
                        benefícios de me associar ao CCB?</h4>
                      <p>- Divulgação – Qualquer pessoa pode ter um site grátis na Internet. Você provavelmente tem ou já teve um. Acontece que pouquíssima gente entra em sites individuais e seu trabalho acaba ficando esquecido. O Portal do CCB, ao contrário, é visitado por milhares de pessoas diariamente, inclusive pelos maiores produtores, artistas, empresários e responsáveis por gravadoras e editoras do País e do mundo. Funciona como uma grande vitrine onde você expõe permanentemente seu trabalho, lado a lado com os ícones da música brasileira.</p>
                      <p>- Registro de música – Como associado, você tem direito a vinte e quatro registros grátis por ano, sendo dois por mês! E com direito a Edição grátis na Editora Dallas Music, que edita músicas de cantores famosos como Alexandre Pires. Somente este benefício já pagaria com sobras o valor da mensalidade, uma vez que apenas um registro de música custa em torno de 20,00.</p>
                      <p>- Radionline – sua música tocará 24 hs. por dia na Rádio CCB e na www.radionline.com.br, sucesso de audiência na Internet, ouvida em todo o mundo. E ainda participa da pesquisa das 10 mais ouvidas.</p>
                      <p>- MUSIC BOX - suas músicas ficarão à venda na Loja Virtual mais avançada da Internet. Você pode acompanhar seus rendimentos em tempo real.</p>
                      <p>- Carteira de compositor – Como associado, você recebe a sua carteira de compositor. Com ela, você pode ter facilidade de acessos a eventos musicais, shows e agendas culturais.</p>
                    </div>
                  </div>
              </div>

              {/* Como voltar minha pagina que está fora do ar? */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingNine">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      Como voltar minha pagina que está fora do ar?
                    </button>
                  </h2>
                  <div id="collapseNine" className={`accordion-collapse collapse`} aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Minha página está fora do ar.
                        O que se passa? Não encontrei meu nome
                        na sala dos artistas. O que acontece?</h4>
                      <p>Infelizmente o CCB tem compromissos junto a seu provedor Internet, a Embratel, e um acordo com ele. Se você atrasar o pagamento da mensalidade, não conseguimos manter no ar sua página. Após alguns dias, o Provedor tira automaticamentesu a página do ar. Mas basta pagar os atrasados, sem juros ou correção para restabelecer o serviço. E os preços do CCB são os melhores que se pode encontrar.</p>
                      <p>Atenção: Se pagou a mensalidade através de depósito bancário ou transferência eletrônica, você deve informar por email a data e hora do pagamento ou enviar copia do comprovante, para que possamos dar baixa.</p>
                    </div>
                  </div>
              </div>

              {/* Como acessar meu e-mail? */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingTen">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      Como acessar meu e-mail?
                    </button>
                  </h2>
                  <div id="collapseTen" className={`accordion-collapse collapse`} aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Como acessar meu e-mail?</h4>
                      <p>Todo associado CCB tem direito a um email grátis, cuja configuração é &quot;seu_nome@artistaccb.com.br&quot;. É um servidor super moderno e rápido que você pode utilizar à vontade.</p>
                      <h4>Como usar:</h4>
                      <ol>
                        <li>Acesse nosso site de qualquer computador, telefone celular ou tablet com acesso à Internet e, na Página Inicial, clique no link ACESSE AQUI SEU E-MAIL ARTISTACCB.</li>
                        <p>Opcionalmente você pode salvar o seguinte endereço entre seus favoritos e acessar o email direto:</p>
                        <p style={{fontSize:'0.8rem'}}>www.clubedoscompositores.com.br:6799/mewebmail</p>
                        <li>Faça Login utilizando apenas seu_nome que vai à esquerda do símbolo @ e sua senha CCB.</li>
                        <li>Com ele você lê ou envia emails de qualquer lugar do mundo e ainda conta com um utilísssimo Agendador de Tarefas.</li>
                      </ol>
                      <div className={`alert alert-warning`} role="alert">
                          Importante: Ao trocar a senha da Área VIP, a senha do email não muda. Para que fiquem iguais, você deve trocar também a senha do e-mail, fazendo login no email e escolhendo a opção de troca de senha.
                      </div>
                      <p className={`mb-5`}>Por ex.:Se seu email é jose@artistaccb.com.br, para dar login utilize:
                        Username: <b>jose</b> - Senha:<b>***** Sua senha escolhida.</b>
                      </p>
                      <h4>Configurar Email em Computadores ou celulares:</h4>
                      <p>Para configurar o email em seu PC ou celular(Outlook, Windows Live Mail, etc.) utilize o seguinte endereço de servidores SMTP E POP3 -</p>
                      <p>Servidor POP3 = clubedoscompositores.clubedoscompositores.com.br</p>
                      <p>Servidor SMTP = clubedoscompositores.clubedoscompositores.com.br</p>
                      <p>Clique também na opção - &quot;Meu servidor requer autenticação&quot;</p>
                      <p>Pronto, seu APP estará configurado e você poderá acessar seu email de qualquer lugar.</p>
                    </div>
                  </div>
              </div>

              {/* Como recuperar senha?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingEleven">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                      Como recuperar senha?
                    </button>
                  </h2>
                  <div id="collapseEleven" className={`accordion-collapse collapse`} aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Esqueci minha
                        senha. Como Recuperar?</h4>
                      <p>No canto superior esquerdo da página inicial, clique em &quot;Esqueci minha senha&quot;. Sua senha será enviada imediatamente para seu e-mail.</p>
                    </div>
                  </div>
              </div>

              {/* Como enviar letras?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingTwelve">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                      Como enviar letras?
                    </button>
                  </h2>
                  <div id="collapseTwelve" className={`accordion-collapse collapse`} aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Como enviar minhas
                        letras e poesias para serem
                        vistas e votadas pelos visitantes do CCB?</h4>
                      <ol>
                        <li> Acesse a Área VIP com seu email e senha.</li>
                        <li> Clique em &quot;Tela Azul - envio de letra&quot;</li>
                        <li> Digite ou copie sua poesia ou letra para o formulário e clique em Enviar.</li>
                        <li> Acesse CCB Player ou sua página e sua letra já estará aparecendo.</li>
                      </ol>
                    </div>
                  </div>
              </div>

              {/* Como enviar músicas?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingThirteen">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                      Como enviar músicas?
                    </button>
                  </h2>
                  <div id="collapseThirteen" className={`accordion-collapse collapse`} aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Como enviar músicas para Radionline, minha página e CCB Player?</h4>
                      <ol>
                        <li>Acesse a Área VIP com seu email e senha.</li>
                        <li> Clique em &quot;Enviar música&quot;</li>
                        <li> Clique no botão Pesquisar (ou Browser) e selecione uma música de seu computador. (Você já deve ter músicas gravadas em mp3 no seu PC).</li>
                        <li> Digite as informações pedidas (nome da música, autor, etc.) nos campos apropriados.</li>
                        <li> Se tiver um clipe da música e quiser mostra-lo, digite o endereço completo (URL) de Youtube ou de Myspace aonde se encontra seu vídeo, no campo apropriado. Exemplo: www.youtube.com/v=tru87frl. Caso contrário, deixe em branco.</li>
                        <li> Clique em Enviar e aguarde alguns minutos (dependendo da velocidade de conexão).</li>
                        <li> Acesse CCB Player, Radionline ou sua página e sua música e/ou vídeo já estará rodando. (depende da velocidade de acesso e disponibilidade dos provedores).</li>
                      </ol>
                    </div>
                  </div>
              </div>

              {/* Como enviar vídeos?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingFourtheen">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                      Como enviar vídeos?
                    </button>
                  </h2>
                  <div id="collapseFourteen" className={`accordion-collapse collapse`} aria-labelledby="headingFourtheen" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Como enviar vídeos para minha página e CCB Player?</h4>
                      <ol>
                        <li> Coloque seu vídeo ou clip em www.youtube.com ou www.myspace.com e veja se aparece ok.</li>
                        <li> Acesse a Área VIP com seu email e senha.</li>
                        <li> Clique em &quot;Enviar música &quot;</li>
                        <li> Clique em procurar música e selecione uma música de seu computador. (Você já deve ter músicas gravadas em mp3 no seu PC).</li>
                        <li> Digite as informações pedidas (nome da música, autor, etc.) nos campos apropriados.</li>
                        <li> Digite o endereço completo (URL) de youtube ou de myspace aonde se encontra seu vídeo. Exemplo: www.youtube.com/v=tru87frl</li>
                        <li> Clique em Enviar e aguarde alguns minutos (dependendo da velocidade de conexão).</li>
                        <li> Acesse CCB Player ou sua página e seu vídeo já estará rodando. (depende da velocidade de acesso e disponibilidade dos provedores).</li>
                      </ol>
                    </div>
                  </div>
              </div>

              {/* Como tocar minha música na Radionline?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingFiftheen">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifthteen " aria-expanded="false" aria-controls="collapseFifthteen ">
                      Como tocar minha música na Radionline?
                    </button>
                  </h2>
                  <div id="collapseFifthteen" className={`accordion-collapse collapse`} aria-labelledby="headingFiftheen" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Como tocar minhas músicas na Radionline.com.br e Rádio CCB?</h4>
                      <p>Radionline e Rádio CCB, as rádios das músicas inéditas mais ouvidas na Internet só tocam novidades, músicas inéditas e CDs independentes. Por isso, quem ouve a Radionline.com e a Rádio CCB fica conhecendo, com antecedência e antes de qualquer um, as músicas que vão fazer sucesso amanhã!</p>
                      <p>Existem 3 formas de tocar suas músicas na radionline.com.br e Rádio CCB:</p>
                      <p>Veja qual é o seu caso e clique na opção correspondente para preencher um cadastro. É bastante simples e totalmente online.</p>
                      <ol>
                        <li> <a href="http://www.clubedoscompositores.com.br/loja/matricula.asp">Divulgação para compositores</a> associados ao CCB.</li>
                        <li> <a href="http://www.clubedoscompositores.com.br/loja/matriculacantor.asp"> Divulgação para cantores e duplas</a> que tenham gravado CD independente ou demo.</li>
                        <li> <a href="http://www.clubedoscompositores.com.br/loja/matriculabanda.asp">Divulgação de Bandas e Grupos</a>  (Rock, Samba, Gospel, etc.)</li>
                        <p>Obs.: Se você já é sócio do CCB ou já tem cadastro para divulgação e quer colocar músicas para tocar, não deve preencher o cadastro novamente. Basta entrar em sua Área Vip e clicar em Enviar músicas. É bem fácil e as músicas tocam na hora.</p>
                      </ol>
                    </div>
                  </div>
              </div>
              
              {/* Qual o tamanho máximo do arquivo de música online?  */}
              <div className={`accordion-item`}>
                  <h2 className={`accordion-header`} id="headingSeventeen">
                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen " aria-expanded="false" aria-controls="collapseSeventeen ">
                      Qual o tamanho máximo do arquivo de música online?
                    </button>
                  </h2>
                  <div id="collapseSeventeen" className={`accordion-collapse collapse`} aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                    <div className={`accordion-body`}>
                      <h4>Qual o tamanho
                        máximo do arquivo de música
                        que pode ser enviado online?
                      </h4>
                      <p>A música deve estar em formato mp3 e pode ter até 6,0mb de tamanho, ou aproximadamente 5:30 min. de duração (em 128Kbps de qualidade).</p>
        
                    </div>
                  </div>
              </div>

              {/* REGISTRO  */}
              <div className={`alert alert-info mb-0 rounded-0`} role="alert">
                  REGISTRO
              </div>

              {/* O Registro de Músicas tem validade?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingEighteen">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen " aria-expanded="false" aria-controls="collapseEighteen ">
                    O Registro de Músicas tem validade?
                  </button>
                </h2>
                <div id="collapseEighteen" className={`accordion-collapse collapse`} aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>O Registro de
                      Músicas tem validade</h4>
                      <p>Conforme a nova Lei 9.610, de 19 de fevereiro de 1998, promulgada pelo Presidente Fernando Henrique Cardoso, a chamada Lei de Direitos Autorais, o registro de música não é obrigatório, sendo que qualquer autor está protegido pela Lei mesmo sem ele. Para que, então, o registro ou arquivamento?</p>
                      <p>A função primordial de um registro musical é provar a anterioridade da autoria, ou seja, que determinada pessoa detinha a posse de uma letra ou melodia em
                        determinada data. </p>
                      <p> Em casos de demanda jurídica, o juiz vai julgar, com base nas provas apresentadas, quem é o provável autor da música. Normalmente, quem tiver provas concretas indicando que na data mais antiga era detentor da documentação referente à música, é declarado autor.</p>
                      <p>O CCB recebe as músicas arquivando letras e partituras em seus banco de dados, com diversas cópias de segurança (backups). No exato instante do registro, sua música recebe uma numeração única, sequencial e exclusiva, e dentre os dados do número do registro constam a data, a hora, minutos e segundos do mesmo. </p>
                      <p>Esse processo é validado pelo sistema Comprova.Com, utilizado por grandes bancos e financeiras, com aval do Ministério da Ciência e Tecnologia através do Observatório Nacional. É emitido um Selo Hora Certa certificando o exato momento de seu registro, validando a data para efeito de anterioridade e um Email é enviado por Comprova.com para você. </p>
                      <p>Guarde cuidadosamente esse documento juntamente com o Certificado. Essa é uma prova válida para qualquer juiz julgar a anterioridade de uma composição. Este procedimento é independente da Biblioteca Nacional e da Escola de Música, que também podem ser feitos para maior garantia.</p>
                      <p>Agora, nenhum sistema de registro, nem da Biblioteca Nacional ou da Escola de Música, garante que você vai ganhar uma causa na Justiça. É tudo uma questão de apresentação de provas, testemunhas e do julgamento do Juiz. E a validade é para todo o território nacional.</p>
                  </div>
                </div>
              </div>

              {/* Como registrar a música (melodia)?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingNineteen">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen " aria-expanded="false" aria-controls="collapseNineteen ">
                    Como registrar a música (melodia)?
                  </button>
                </h2>
                <div id="collapseNineteen" className={`accordion-collapse collapse`} aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Como Registrar
                      a música, melodia ou partitura?</h4>
                      <p>Com o novo sistema de Registro por Equivalência Sonora, pode-se registrar no CCB uma música completa, com melodia e letra, sem precisar de partitura, bastando uma gravação MP3. Para isso, clique em Registro de Música e escolha a opção 1, Registro de Música.</p>
                      <p>Mas, além do Registro por Equivalência Sonora, os tradicionais registros de partitura e letra continuam vigorando, veja abaixo:</p>
                      <p>Para se registrar ou arquivar uma música, ela precisa estar escrita como partitura, que é o meio de se passar para o papel uma música, com sua melodia, harmonia, pausas, etc.
                      Se você já tiver a partitura, basta clicar em Registro de Música e escolher a opção 2 (Registrar partitura) e enviar a partitura para o CCB – online ou por correio.</p>
                      <p>Se não tiver a partitura e quiser fazer e registrar, escolha a opção 3 (Confeccionar e registrar partitura). Nesse caso, você envia um cd ou fita gravada com a melodia, mesmo assobiada ou cantarolada e o CCB faz a partitura eletronica e registra para você. Obs.: O CCB não fornece cópias das partituras eletrônicas.</p>
                  </div>
                </div>
              </div>

              {/* Posso registrar somente a letra (poema)?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwenty">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty " aria-expanded="false" aria-controls="collapseTwenty ">
                    Posso registrar somente a letra (poema)?
                  </button>
                </h2>
                <div id="collapseTwenty" className={`accordion-collapse collapse`} aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Posso registrar somente a letra?</h4>
                    <p>Sim, pode. Em casos de versões de músicas estrangeiras, também pode ser registrada apenas a letra. Para registrar a letra, clique em Registro de Músicas e escolha a opção 1. Para gravar versões comercialmente você vai precisar de autorização da editora.</p>
                  </div>
                </div>
              </div>

              {/* Para registrar preciso ser sócio do CCB?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwentyOne">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyOne " aria-expanded="false" aria-controls="collapseTwentyOne ">
                    Para registrar preciso ser sócio do CCB?
                  </button>
                </h2>
                <div id="collapseTwentyOne" className={`accordion-collapse collapse`} aria-labelledby="headingTwentyOne" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Preciso ser sócio para registrar músicas?</h4>
                    <p>Não, você pode registrar músicas, letras e partituras no CCB mesmo sem ser sócio. Basta entrar em nosso site (www.clubedoscompositores.com.br), clicar em Registro de músicas e preencher o cadastro na primeira vez. O sistema guarda seus dados e será bem fácil registrar nas próximas vezes. Veja lá mesmo a Tabela de Preços para registro. Ffique protegido e proteja seus Direitos Autorais utilizando o serviço de registro do Clube dos Compositores.</p>
                    <p>Mas lembre-se que os associados do CCB tem direito a registros grátis, saindo praticamente de graça a mensalidade, além da divulgação e de outros benefícios. Não seria bom pensar nisso?</p>
                  </div>
                </div>
              </div>

              {/* Não recebi meu Certificado de registro. É normal?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwantyTwo">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyTwo " aria-expanded="false" aria-controls="collapseTwentyTwo ">
                    Não recebi meu Certificado de registro. É normal?
                  </button>
                </h2>
                <div id="collapseTwentyTwo" className={`accordion-collapse collapse`} aria-labelledby="headingTwantyTwo" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4> Não recebi meu
                      certificado de Registro. É normal?</h4>
                      <p>O CCB não envia os certificados para seu endereço. No exato instante do registro, sua música recebe uma numeração única, sequencial e exclusiva, e dentre os dados do número do registro constam a data, a hora, minutos e segundos do mesmo. </p>
                      <p>Esse processo é validado pelo sistema Comprova.Com, utilizado por grandes bancos e financeiras, com aval do Ministério da Ciência e Tecnologia através do Observatório Nacional. É emitido um Selo Hora Certa certificando o exato momento de seu registro, validando a data para efeito de anterioridade.</p>
                      <p>Na comprovação ou baixa do pagamento, um Email com o Selo Hora Certa é enviado por Comprova.com para você e o certificado é liberado para impressão em nosso site. Guarde cuidadosamente esse documento juntamente com o Certificado.</p>
                      <p>Você deve imprimir seu certificado e consultar seu registro, suas letras e/ou imprimir quantas vias do certificado desejar, sem custos adicionais. Basta clicar em Registro de Músicas e entrar com seu CPF em Pesquisar.</p>
                  </div>
                </div>
              </div>

              {/* Para onde enviar a partitura ou a música gravada?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwantyThree">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwantyThree " aria-expanded="false" aria-controls="collapseTwantyThree ">
                    Para onde enviar a partitura ou a música gravada?
                  </button>
                </h2>
                <div id="collapseTwantyThree" className={`accordion-collapse collapse`} aria-labelledby="headingTwantyThree" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Para onde enviar a
                      partitura ou a música gravada?</h4>
                      <ol>
                        <li> Se você já tem a partitura, envie para partitura@clubedoscompositores.com.br.</li>
                        <li> Se mandou o CCB fazer a partitura, envie a gravação, mesmo cantarolada ou assobiada, para partitura@clubedoscompositores.com.br</li>
                      </ol>
                  </div>
                </div>
              </div>

              {/* O que é uma Editora? Preciso editar minha música?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwentyFour">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFour " aria-expanded="false" aria-controls="collapseTwentyFour ">
                    O que é uma Editora? Preciso editar minha música?
                  </button>
                </h2>
                <div id="collapseTwentyFour" className={`accordion-collapse collapse`} aria-labelledby="headingTwentyFour" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>O que é uma editora?
                      Preciso editar minha música?</h4>
                      <p>Originalmente, quando ainda não existiam gravações, as músicas eram disseminadas, conhecidas e comercializadas através de partituras.</p>
                      <p>As editoras eram (e ainda são) as encarregadas de mandar imprimir e comercializar as partituras das músicas, atuando como um administrador da obra do Autor. Ao invés de CDS, as pessoas compravam partituras para executar em casa, ao piano.</p>
                      <p>Assim, de acordo com a Lei de Direitos Autorais, e em referência à obra, o editor “ fica autorizado, em caráter de exclusividade, a publicá-la e a explorá-la ”
                      </p>
                      <h6>De acordo com o pactuado no Contrato de Edição.</h6>
                      <p>Com o advento da gravação, as editoras continuaram com o papel de administradores da obra do compositor ou Autor, difundindo seu trabalho e se responsabilizando pelo recebimento dos direitos autorais a que o Autor tem direito pela vendagem ou cessão de direitos, através de Cds ou outros meios.</p>
                      <p>Qualquer autorização para gravação ou utilização de obra editada, deve ter o aval da editora.</p>
                      <p>Dessa forma, todos os grandes cantores e bandas, nacionais e internacionais, tem suas músicas editadas através de editoras musicais especializadas.</p>
                      <p>As editoras cobram percentagens que variam de 25 a 34% sobre os direitos do Autor e se responsabilizam por negociar a obra junto a interessados (gravadoras, redes de TV, produtores de cinema, etc.), cobrar seus direitos autorais junto ao ECAD e entidades arrecadadoras e distribuir aos Autores.</p>
                      <p>O Clube dos Compositores do Brasil tem uma editora associada, a Dallas Music, que pode editar sua música, se houver mútuo interesse. Submeta seu trabalho à Dallas Music para apreciação.</p>
                  </div>
                </div>
              </div>

              {/* Sicam, Socinpro, UBC, etc.  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwentyFive">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFive " aria-expanded="false" aria-controls="collapseTwentyFive ">
                    Sicam, Socinpro, UBC, etc.
                  </button>
                </h2>
                <div id="collapseTwentyFive" className={`accordion-collapse collapse`} aria-labelledby="headingTwentyFive" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Já sou filiado a uma entidade arrecadadora de direitos autorais, tipo
                      Sicam, Socinpro, UBC / Já tenho carteira
                      da Ordem dos Músicos. Tem algum
                      problema em me associar ao CCB?</h4>
                      <p>Nenhum problema. Muito pelo contrário: O CCB é independente de qualquer entidade e seu trabalho é complementar e de interesse dessas entidades, ou seja, a função do CCB é divulgar o trabalho dos compositores e demais artistas.</p>
                      <p>Aliás, o CCB é filiado à Socinpro como produtor musical e autorizado a emitir o ISRC, o código válido internacionalmente em gravações de CDs para identificação de autores e participantes e garantia de direitos autorais.</p>
                  </div>
                </div>
              </div>

              {/* PAGAMENTOS  */}
              <div className={`alert alert-info mb-0 rounded-0`} role="alert">
                PAGAMENTOS
              </div>

              {/* Débito Automático  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwentySix">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentySix " aria-expanded="false" aria-controls="collapseTwentySix ">
                    Débito Automático
                  </button>
                </h2>
                <div id="collapseTwentySix" className={`accordion-collapse collapse`} aria-labelledby="headingTwentySix" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Débito Automático</h4>
                    <p>Você pode programar o pagamento das mensalidades CCB por Débito Automático, escolhendo o melhor dia do mes para você, evitando transtornos e esquecimentos. É fácil e prático.</p>
                    <h6>Existem duas maneiras:</h6>
                    <ol>
                      <li>Para portadores de Cartão de Crédito VISA, MASTERCARD OU DINERS:
                        <ol className={styles.olAbc}>
                          <li> Acesse a Área Vip com seu email e senha.</li>
                          <li> Clique no link Alterar Cadastro.</li>
                          <li> Escolha a opção Débito Automático VISA, MASTERCARD OU DINERS.</li>
                          <li> Escolha o melhor dia para seu débito.</li>
                        </ol>
                      </li>
                      <li>Para clientes Bradesco (conta corrente ou poupança):
                        <ol className={styles.olAbc}>
                          <li> Acesse a Área Vip com seu email e senha.</li>
                          <li> Clique no link Alterar Cadastro.</li>
                          <li> Escolha a opção Débito Automático BRADESCO.</li>
                          <li> Escolha o melhor dia para seu débito</li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Boleto: Segunda via / Cartão de Crédito...  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwentySeven">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentySeven " aria-expanded="false" aria-controls="collapseTwentySeven ">
                    Boleto: Segunda via / Cartão de Crédito...
                  </button>
                </h2>
                <div id="collapseTwentySeven" className={`accordion-collapse collapse`} aria-labelledby="headingTwentySeven" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Não consegui pagar nem imprimir o boleto bancário. Como faço para imprimir 2a via do boleto ou pagar por cartão de crédito?</h4>
                    <ol>
                      <li> Entre no site e clique em SECRETARIA.</li>
                      <li> Escolha a opção desejada (registro, matricula, mensalidade, estúdio ou reativação).</li>
                      <li> Escolha a opção desejada (registro, matricula, mensalidade, estúdio ou reativação).</li>
                      <li> Escolha a melhor forma de pagar - boleto ou cartão de crédito.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Posso pagar com cartão de crédito?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwentyEight">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyEight " aria-expanded="false" aria-controls="collapseTwentyEight ">
                    Posso pagar com cartão de crédito?
                  </button>
                </h2>
                <div id="collapseTwentyEight" className={`accordion-collapse collapse`} aria-labelledby="headingTwentyEight" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Posso pagar
                      com cartão de crédito?</h4>
                      <p>SIM. Você pode programar sua mensalidade para Débito Automático com cartão VISA, MASTERCARD OU DINERS. E pode escolher o melhor dia para débito. Fácil e prático. Basta entrar na Área Vip, clicar em Alterar cadastro e escolher a opção de Débito Automático VISA. A própria Visa pagará sua mensalidade, sem preocupações para você.</p>
                      <p>Você mesmo também pode pagar por cartão todos os serviços do CCB, bastando clicar em SECRETARIA, na página inicial e escolher o tipo de pagamento desejado.</p>
                  </div>
                </div>
              </div>

              {/* Não consigo imprimir boleto e não tenho cartão...  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingTwentyNine">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyNine " aria-expanded="false" aria-controls="collapseTwentyNine ">
                    Não consigo imprimir boleto e não tenho cartão...
                  </button>
                </h2>
                <div id="collapseTwentyNine" className={`accordion-collapse collapse`} aria-labelledby="headingTwentyNine" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Não consigo imprimir boleto
                      e não tenho cartão de crédito. Como pagar?</h4>
                      <p>Faça um depósito, DOC ou transferência bancária em nome de:</p>
                      <p>
                        <b>Locacenter Ltda.</b>
                        <br />
                        <b>CNPJ 06.237.080/0001-80</b>
                      </p>
                      <p>no Banco Bradesco agência 0525
                        conta corrente 0077108-2</p>
                        <p>e envie um email confirmando a data para:
                        </p>
                          <p style={{fontSize:'0.8rem'}}>
                            <b>contato@clubedoscompositores.com.br</b>
                          </p>
                  </div>
                </div>
              </div>

              {/* Moro no exterior, como pagar?  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingThirty">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirty " aria-expanded="false" aria-controls="collapseThirty ">
                    Moro no exterior, como pagar?
                  </button>
                </h2>
                <div id="collapseThirty" className={`accordion-collapse collapse`} aria-labelledby="headingThirty" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Moro no exterior, como pagar?</h4>
                    <p>Por cartão de crédito internacional ou Paypal, que é um sistema seguro da Ebay e trabalha com cartões de crédito internacionais. Acesse www.paypal.com para se cadastrar.</p>
                  </div>
                </div>
              </div>

              {/* Registrei música mas não paguei e está Pendente...  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingThirtyOne">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirtyOne " aria-expanded="false" aria-controls="collapseThirtyOne ">
                    Registrei música mas não paguei e está Pendente...
                  </button>
                </h2>
                <div id="collapseThirtyOne" className={`accordion-collapse collapse`} aria-labelledby="headingThirtyOne" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Registrei uma música mas não paguei e está pendente. Como faço para pagar?</h4>
                    <p>Clique em <a href="https://www.clubedoscompositores.com.br/supergeral_central_de_pagamentos_1.asp">Pagamentos</a> e entre com seu CPF na opção <b>Pagar Registro de Música</b>  para ver todas as pendências e imprimir boleto ou pagar com cartão de crédito.</p>
                  </div>
                </div>
              </div>

              {/* Me associei mas parei de pagar e quero voltar...  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingThirtyTwo">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirtyTwo " aria-expanded="false" aria-controls="collapseThirtyTwo ">
                    Me associei mas parei de pagar e quero voltar...
                  </button>
                </h2>
                <div id="collapseThirtyTwo" className={`accordion-collapse collapse`} aria-labelledby="headingThirtyTwo" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Me associei mas parei de
                      pagar e quero voltar a ser sócio. Como faço?
                    </h4>
                    <ol>
                      <li> Clique em <a  href="https://www.clubedoscompositores.com.br/supergeral_central_de_pagamentos_1.asp">PAGAMENTOS</a>.</li>
                      <li> Escolha a opção Reativar Conta CCB</li>
                      <li> Complete os dados e vá até a página de pagamentos.</li>
                      <li> Você deverá pagar o valor de 35,00 referentes à Reativação e à mensalidade do mes corrente.</li>
                      <li> Escolha a melhor forma de pagar - boleto ou cartão de crédito.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* OUTROS  */}
              <div className={`alert alert-info mb-0 rounded-0`} role="alert">
                OUTROS
              </div>

              {/* Termos de uso e ética  */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingThirtyThree">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirtyThree " aria-expanded="false" aria-controls="collapseThirtyThree ">
                    Termos de uso e ética
                  </button>
                </h2>
                <div id="collapseThirtyThree" className={`accordion-collapse collapse`} aria-labelledby="headingThirtyThree" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Termos de uso e ética
                    </h4>
                    <p>Contrato de adesão e Termos de Uso dos sites www.clubedoscompositores.com.br e www.radionline.com.br</p>
                    <ol>
                      {/* 1  */}
                      <li>
                        <h6>Aceitação dos Termos de Uso</h6>
                        <p>O clubedoscompositores.com.br fornece aos usuários cadastrados no site uma série de serviços, remunerados ou não, conforme claramente descrito em suas páginas e propagandas. Os usuários cadastrados declaram, ao ler este Termo, que estão  cientes e concordam com todos os seus termos, obrigando-se a acatá-lo. Tais termos podem ser modificados na medida do necessário ao desenvolvimento e constante aprimoramento do serviço e sem prévio aviso ao usuário.</p>
                        <p>O site clubedoscompositores.com.br bem como seus sites associados www.radionline.com.br são portais Internet prestadores de serviço que tem como objetivo divulgar e promover compositores, letristas, intérpretes, bandas e suas composições, sem discriminação de gênero, raça, credo ou qualquer outro tipo, produzidos dentro e fora do Brasil.</p>
                        <p>Através de recursos tecnológicos, possibilita aos artistas e músicos brasileiros e internacionais exporem suas músicas, letras, poesias, vídeos, fotos, agenda, release, blog, parcerias, e qualquer outro tipo de trabalho artístico.
                          A comunidade é aberta ao público brasileiro e internacional.
                          Para participar da comunidade clubedoscompositores.com.br basta que o novo usuário preencha o seu cadastro e permaneça em dia com as obrigações contratuais, éticas e financeiras.
                        </p>
                        <p>Constituem parte integrante dos Termos do Serviço os termos e condições
                          contidos neste documento, a Política de Privacidade do
                          clubedoscompositores.com.br e quaisquer regras ou políticas vigentes que
                          possam ser publicadas, sempre que necessário, pelo
                          clubedoscompositores.com.br, aplicáveis a cada um dos Serviços, além da
                          legislação aplicável.
                        </p>
                        <p>Ao clicar em &quot;Eu Aceito&quot; ao se cadastrar e ao utilizar qualquer Serviço, o Usuário indica que
                          leu e concordou com a versão mais recente dos Termos do Uso, vinculando
                          automaticamente o Usuário às regras ali contidas.
                        </p>
                      </li>

                      {/* 2  */}
                      <li>
                        <h6>Obrigações de Registro do Usuário</h6>
                        <p>O Usuário concorda em:</p>
                        <ol className={styles.olAbc}>
                          <li>fornecer informações verdadeiras, exatas, atuais e completas sobre si
                            mesmo quando do registro no &quot;Formulário de Registro&quot; para acesso ao Serviço;</li>
                          <li>conservar e atualizar imediatamente, sempre que necessário, tais
                            informações de Registro para mantê-las verdadeiras, exatas, atuais e
                            completas.
                          </li>
                          <p>Se qualquer informação fornecida pelo Usuário for falsa, incorreta,
                            desatualizada ou incompleta, ou caso o clubedoscompositores.com.br tenha
                            razões suficientes para suspeitar que tais informações sejam falsas,
                            incorretas, desatualizadas ou incompletas, o clubedoscompositores.com.br terá o direito de suspender ou cancelar imediatamente, independente de notificação a conta do Usuário e recusar toda e qualquer utilização, presente ou futura do Serviço, ou parte dele.
                          </p>
                        </ol>
                      </li>

                      {/* 3  */}
                      <li>
                        <h6>Política de Privacidade</h6>
                        <p>
                            O clubedoscompositores.com.br possui uma política expressa sobre a questão da privacidade online.
                            As Informações de Registro e algumas outras informações sobre o Usuário estão sujeitas ao tratamento referido em
                            tal política de privacidade.
                        </p>
                        <p>O clubedoscompositores.com.br se preocupa com a segurança e privacidade de todos os seus Usuários, especialmente
                            crianças ou adolescentes que eventualmente possam acessar o Serviço.
                        </p>
                        <p>
                          De acordo com a legislação aplicável à criança e ao adolescente, é
                          responsabilidade dos pais determinar se determinado Serviço e/ou Conteúdo é ou não apropriado.
                        </p>
                      </li>

                      {/* 4  */}
                      <li>
                        <h6>Conta do Usuário, senha e segurança</h6>
                        <p>Ao final do processo de registro, o Usuário receberá uma senha e
                          identificação, passando a ser integralmente responsável por manter a
                          confidencialidade da senha e desta identificação, bem como por todas as
                          atividades que ocorram sob sua senha e/ou identificação. O Usuário concorda em:
                        </p>
                        <ol className={styles.olAbc}>
                          <li> notificar imediatamente o clubedoscompositores.com.br sobre qualquer uso
                            não autorizado da sua senha ou conta ou qualquer outra quebra de segurança de que tome conhecimento;</li>
                          <li> sair de sua conta de Usuário ao final de cada acesso e assegurar que esta
                            não seja acessada por terceiros não autorizados. clubedoscompositores.com.br não será responsável por qualquer perda ou dano decorrente do descumprimento do disposto nesta cláusula por parte do Usuário.</li>
                        </ol>
                      </li>

                      {/* 5  */}
                      <li>
                        <h6>Conduta do Usuário</h6>
                        <p>O Usuário reconhece e concorda que qualquer informação, dado, texto, música, som, fotografia, gráfico, vídeo, mensagem ou qualquer outro material (o &quot;Conteúdo&quot;), seja ele veiculado publicamente ou transmitido privativamente através do Serviço, será de total responsabilidade da pessoa física ou jurídica que forneceu originariamente o Conteúdo.</p>
                        <p>Isto significa que cada Usuário, e nunca o clubedoscompositores.com.br , é
                          integralmente responsável por todo e qualquer Conteúdo que seja transmitido a um servidor, exibido, enviado por e-mail ou de qualquer outra forma disponibilizado através do Serviço.
                        </p>
                        <p>O clubedoscompositores.com.br não controla o Conteúdo disponibilizado através do Serviço e, como conseqüência, não garante a correção, integridade ou qualidade de tal Conteúdo, sendo os mesmos de responsabilidade do Usuário que os postou. </p>
                        <p>Usuário reconhece e concorda que poderá ficar exposto a Conteúdo ofensivo, imoral ou censurável. Sob nenhuma forma, o clubedoscompositores.com.br será responsável por qualquer Conteúdo, inclusive, sem limitação, por qualquer erro ou omissão em qualquer Conteúdo ou por qualquer perda e dano de qualquer
                          espécie resultante da utilização de qualquer Conteúdo que seja exibido,
                          enviado, transmitido ou de qualquer outra forma disponibilizado através do
                          Serviço.
                        </p>
                        <h6>É VEDADO ao Usuário utilizar o Serviço para:</h6>
                        <ol>
                          <li> transmitir, exibir, enviar, ou de qualquer outra forma, disponibilizar
                            qualquer Conteúdo que seja ilegal, incluindo, mas não se limitando, que seja
                            ofensivo à honra, que invada a privacidade de terceiros, ameaçador, que seja vulgar, obsceno, preconceituoso, racista ou de qualquer forma censurável, através do Serviço;
                          </li>
                          <li>
                            violar direitos das crianças e adolescentes;
                          </li>
                          <li> fazer propaganda comercial ou divulgar sites, concorrentes ou não, gratuitos ou não;</li>
                          <li> assumir a &quot;personalidade&quot; de outra pessoa, física ou jurídica ou ainda
                            declarar-se ou apresentar-se falsamente como membro de alguma entidade ou representante de terceiros;
                          </li>
                          <li>
                            forjar cabeçalhos, ou de qualquer outra forma manipular identificadores, a
                            fim de disfarçar a origem de qualquer Conteúdo transmitido através do
                            Serviço;
                          </li>
                          <li>
                            tornar disponível, divulgar, enviar, transmitir, ou de qualquer outra
                            forma, disponibilizar qualquer Conteúdo sem que tenha o pleno direito de
                            fazê-lo de acordo com a lei, por força de contrato ou de relação de
                            confiança;
                          </li>
                          <li>
                            tornar disponível, divulgar, enviar, transmitir ou de qualquer outra forma
                            disponibilizar qualquer Conteúdo que viole qualquer patente, marca, segredo
                            de negócio, direito autoral ou qualquer outro direito de terceiro
                            (&quot;Direitos&quot;);
                          </li>
                          <li>
                            tornar disponível, divulgar, enviar, transmitir ou de qualquer outra forma
                            disponibilizar qualquer tipo de propaganda ou material promocional não
                            solicitado ou não autorizado, tais como mensagens não solicitadas, correntes,
                            esquemas de pirâmide ou qualquer outra forma de solicitação, exceto em áreas que são designadas para tal fim e assim expressamente identificadas pelo clubedoscompositores.com.br;
                          </li>
                          <li>
                            tornar disponível, divulgar, enviar, transmitir ou de qualquer outra forma
                            disponibilizar qualquer Conteúdo que contenha vírus ou qualquer outro código, arquivo ou programa de computador com o propósito de interromper, destruir ou limitar a funcionalidade de qualquer software, hardware ou equipamento de telecomunicações;
                          </li>
                          <li>
                            interromper o fluxo normal de trocas de informações, interferir na
                            utilização e aproveitamento do Serviço por outros usuários, ou de qualquer
                            outra forma afetar a capacidade de outros Usuários efetuarem comunicações ou troca de mensagens em tempo real;
                          </li>
                          <li>
                            simular e/ou aumentar artificialmente, manualmente ou por intermédio de robôs, visitas à sua página, pedidos, audições de músicas ou votos.
                          </li>
                          <li>
                            interferir ou interromper o Serviço, as redes ou os servidores conectados
                            ao Serviço, obter ou tentar obter acesso não autorizado a outros sistemas ou redes de computadores conectados ao Serviço ou desobedecer qualquer regra, procedimento, política ou regulamento de redes ou sistemas conectados ao Serviço;
                          </li>
                          <li>
                            violar, seja intencionalmente ou não, qualquer norma legal municipal,
                            estadual, nacional ou internacional que seja integrada ao sistema brasileiro.
                          </li>
                          <li>
                            vigiar secretamente ou, de qualquer forma, assediar terceiros;
                          </li>
                          <li>
                            obter ou armazenar dados pessoais sobre outros Usuários;
                          </li>
                          <li>
                            <p>O Usuário reconhece que o clubedoscompositores.com.br não pré-seleciona o Conteúdo a ser disponibilizado através do Serviço, mas o
                              clubedoscompositores.com.br ou seus representantes, reservam-se o direito de (mas não se obrigam), a seu exclusivo critério, rejeitar ou modificar a
                              disponibilização de qualquer Conteúdo através do Serviço.
                            </p>
                            <p>Sem limitação ao
                              disposto acima, o clubedoscompositores.com.br e seus representantes terão o direito de retirar do Serviço qualquer Conteúdo que viole os Termos de Uso ou que seja censurável por qualquer motivo. O Usuário concorda que deverá pré-avaliar e assumir todos os riscos resultantes da utilização de qualquer Conteúdo, inclusive por confiar que qualquer Conteúdo seja correto, completo ou útil. Cabe ao Usuário decidir se irá ou não confiar em qualquer Conteúdo criado disponível no clubedoscompositores.com.br.
                            </p>
                            <h6>O Usuário reconhece e concorda que o clubedoscompositores.com.br poderá
                              preservar o Conteúdo do Usuário, mas também poderá divulgá-lo se desta forma determinar a Lei ou, de boa fé, acreditar que a preservação ou a revelação sejam necessárias para:
                            </h6>
                            <ol className={styles.olAbc}>
                              <li>cumprir com algum procedimento legal;</li>
                              <li>fazer cumprir os Termos de Uso;</li>
                              <li>para responder reclamações de que tal Conteúdo viole direitos de
                                terceiros;
                              </li>
                              <li>
                                para proteger direitos, propriedades, interesses ou manter a segurança do clubedoscompositores.com.br, dos Usuários e do público em geral.
                                O Usuário reconhece que o processamento técnico e as transmissões através do Serviço, inclusive de Conteúdo do próprio Usuário, podem implicar em:<br />
                                (a)transmissões através de várias redes de conexão; e,<br />
                                (b)modificações para cumprir ou promover a adaptação a requisitos técnicos de redes de conexão ou de dispositivos.
                                <p>
                                    Desta forma, o Usuário, neste ato, expressamente autoriza tal processamento técnico de transmissões, conforme seja necessário a fim de obedecer as normas legais aplicáveis.
                                </p>
                              </li>
                            </ol>
                          </li>
                            
                        </ol>
                      </li>

                      {/* 6  */}
                      <li>
                        <h6>Restrições Específicas para Uso Internacional</h6>
                        <p>Reconhecendo o alcance mundial da Internet, o Usuário concorda em cumprir qualquer legislação local que disponha sobre a conduta de Usuários na rede e sobre Conteúdos aceitáveis. Especificamente, o Usuário concorda em cumprir com todas as leis aplicáveis com relação à transmissão de dados técnicos a partir do Brasil ou do país no qual o Usuário resida.</p>
                      </li>

                      {/* 7  */}
                      <li>
                        <h6>Conteúdo Submetido ou Disponível para Inclusão no Serviço</h6>
                        <p>O clubedoscompositores.com.br não reclamará, em nenhuma hipótese, a
                          propriedade sobre qualquer Conteúdo que o Usuário submeta ou torne disponível para inclusão no Serviço.
                        </p>
                        <p> Entretanto, com respeito ao Conteúdo que o Usuário submeta ou torne disponível para inclusão em áreas publicamente acessíveis
                          do Serviço, o Usuário concede ao clubedoscompositores.com.br uma licença mundial, sem a incidência de royalties e não exclusiva
                            para:
                        </p>
                        <p>usar, distribuir, reproduzir, modificar, adaptar, executar e exibir
                          publicamente tal Conteúdo no Serviço. A licença ora garantida vigorará por
                          tempo indeterminado e terminará quando clubedoscompositores.com.br excluir tal Conteúdo do Serviço.
                        </p>
                      </li>

                      {/* 8  */}
                      <li>
                        <h6>Indenização</h6>
                        <p>O Usuário concorda em indenizar e isentar o clubedoscompositores.com.br,
                          diretores e empregados, parceiros e clientes que exibam suas marcas em
                          conjunto com o clubedoscompositores.com.br, de quaisquer perdas e danos que venham a ser demandados, incluindo despesas judiciais e honorários
                          advocatícios em razão do Conteúdo pelo Usuário submetido, exibido,
                          transmitido ou tornado disponível no Serviço, o uso pelo Usuário do Serviço,
                          a conexão com o Serviço, a violação dos Termos de Uso ou a violação de
                          qualquer Direito.</p>
                      </li>

                      {/* 9  */}
                      <li>
                        <h6>Proibição de Revenda do Conteúdo</h6>
                        <p>O Usuário concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar com finalidade comercial qualquer Conteúdo disponibilizado através do Serviço.</p>
                      </li>

                      {/* 10  */}
                      <li>
                        <h6>Práticas Gerais sobre Uso e Armazenamento</h6>
                        <p>O Usuário reconhece que o clubedoscompositores.com.br poderá estabelecer, ao seu exclusivo critério, práticas gerais e limites relativos à utilização do Serviço.</p>
                        <p>O canal de comunicação entre o usuário e o CCB para quaisquer assuntos é o email, disponibilizado em dois endereços - contato@clubedoscompositores.com.br e webmaster@clubedoscompositores.com.br.</p>
                        <p>O usuário não deverá em hipótese alguma utilizar sua página ou qualquer outro meio disponibilizado pelo CCB com acesso ao público, como Blog, CCB Player, etc., para enviar mensagens particulares ao CCB, falar de assuntos financeiros com o CCB, denegrir a imagem ou fazer críticas públicas ao CCB e/ou a seus associados e visitantes, bem como fazer propaganda de outros sites ou serviços concorrentes ou não. A pratica de qualquer dos atos acima expostos é considerada falta grave, passivel de punição, que vai de advertência até a exclusão do quadro social, conforme exposto à cláusula 12, ressalvando-se ainda o direito de Ação de Indenização por Perdas e Danos Morais e Materiais, conforme o caso.</p>
                        <p>O Usuário concorda que o clubedoscompositores.com.br não assume qualquer responsabilidade ou obrigação pela exclusão ou falha no armazenamento de mensagens, outras comunicações ou Conteúdo mantido ou transmitido através do Serviço.</p>
                        <p>O Usuário concorda que o clubedoscompositores.com.br reserva-se o direito de desativar a conta que esteja inativa por um razoável período de tempo. O
                          Usuário reconhece, ainda, que o clubedoscompositores.com.br poderá modificar estas práticas gerais e limites a qualquer tempo, a seu exclusivo critério com ou sem notificação.</p>
                      </li>

                      {/* 11  */}
                      <li>
                        <h6>Modificações no Serviço</h6>
                        <p>O clubedoscompositores.com.br reserva-se o direito de, a qualquer tempo,
                          modificar ou descontinuar, temporariamente ou permanentemente, o Serviço ou parte dele, com ou sem notificação.
                        </p>
                      </li>

                      {/* 12  */}
                      <li>
                        <h6>Término</h6>
                        <p>O Usuário concorda que o clubedoscompositores.com.br, à seu livre critério,
                          poderá cancelar sua senha, sua conta ou parte dela ou a utilização do Serviço e remover ou descartar qualquer Conteúdo, incluindo, mas não se limitando, pela falta de pagamento ou se o clubedoscompositores.com.br acreditar que o Usuário esteja violando ou agindo de forma contrária à letra e ao espírito dos Termos do Uso.
                        </p>
                        <p>O Usuário concorda que o término de seu acesso ao Serviço, por qualquer razão constante deste Termos de Uso, pode ocorrer sem uma notificação prévia e reconhece e concorda que o clubedoscompositores.com.br poderá desativar ou apagar sua conta e todas as informações e dados constantes nesta conta e/ou bloquear o acesso a tais arquivos ou ao Serviço.</p>
                      </li>

                      {/* 13  */}
                      <li>
                        <h6> Negociações com Anunciantes</h6>
                        <p>A correspondência, negociação ou participação do Usuário em promoções com anunciantes, encontradas no ou divulgadas através do Serviço, incluindo pagamento ou entrega de bens e serviços, condições, garantias e apresentações associadas a tal negociação, ocorrem exclusivamente entre o Usuário e o anunciante.</p>
                        <p>O Usuário concorda que o clubedoscompositores.com.br não é responsável por qualquer perda e dano de qualquer tipo incorrida como resultado de tal negociação ou como resultado da presença do anunciante no Serviço.</p>
                      </li>

                      {/* 14  */}
                      <li>
                        <h6>Conexões (&quot;Links&quot;)</h6>
                        <p>O Serviço ou terceiros poderão fornecer &quot;links&quot; para outros sites da World
                          Wide Web ou outros recursos.
                        </p>
                        <p>Como o clubedoscompositores.com.br não tem controle sobre tais sites ou
                          recursos externos, o Usuário reconhece e concorda que o
                          clubedoscompositores.com.br não é responsável pela disponibilidade dos mesmos e não endossa ou se responsabiliza por qualquer
                          Conteúdo, propaganda, produtos, serviços ou outros materiais contidos ou disponibilizados através de tais sites ou recursos.
                        </p>
                      </li>

                      {/* 15  */}
                      <li>
                        <h6>Direitos de Propriedade Intelectual do clubedoscompositores.com.br e de
                          Terceiros
                        </h6>
                        <p>O Usuário reconhece e concorda que o Serviço, bem como qualquer software necessário utilizado em conexão com o Serviço (&quot;Software&quot;),
                            contém informações confidenciais de acordo com a Lei sobre Proteção à Propriedade Intelectual de Programa de Computador e normas
                            correlatas.
                        </p>
                        <p>O Usuário reconhece e concorda que o Conteúdo incluído em propagandas
                          patrocinadoras ou informações apresentadas ao Usuário através do Serviço ou anunciantes são protegidos por direitos autorais,
                            marcas, patentes ou outros direitos de propriedade intelectual e outra eventual legislação aplicável.
                        </p>
                        <p>
                          Salvo expressamente autorizado pelo clubedoscompositores.com.br ou
                          anunciantes, o Usuário concorda em não modificar, alugar, vender, distribuir
                          ou criar obras derivadas a partir do Serviço ou do Software, no todo ou em
                          parte.
                        </p>
                      </li>

                      {/* 16  */}
                      <li>
                        <h6>Garantia Limitada</h6>
                        <p><b>O Usuário expressamente concorda e está ciente de que:</b></p>
                        <ol className={styles.olABC}>
                          A 
                          <li>O Serviço é utilizado ao inteiro risco do Usuário. O Serviço é fornecido
                              ao Usuário na forma em que está disponível. O clubedoscompositores.com.br em razão das vedações indicadas acima ao Usuário,
                              não oferece garantias outras além das estabelecidas nestes Termos de Uso. O clubedoscompositores.com.br reserva-se o direito de
                              não prestar assistência ou suporte técnico aos usuários do Serviço.
                          </li>
                          B 
                          <li>
                            <b>O clubedoscompositores.com.br não pode garantir que:</b>
                            <ol className={styles.olRoman}>
                              <li>determinados serviços à disposição atenderão às necessidades do Usuário;</li>
                              <li>que o Serviço será prestado de forma ininterrupta, tempestiva, segura ou livre de erros;</li>
                              <li>que o resultado obtido pelo uso do Serviço será exato ou confiável;</li>
                              <li>que a qualidade de qualquer produto, serviço, informações ou outro
                                material adquirido ou obtido pelo Usuário através do Serviço atenderá às
                                expectativas;
                              </li>
                              <li>que quaisquer erros serão corrigidos na velocidade desejada pelo Usuário.</li>
                            </ol>
                          </li>
                          C 
                          <li> Qualquer obtenção de material, por meio de download ou outra forma,
                            durante uso do Serviço, é efetuada ao inteiro risco do Usuário e ao seu livre
                            critério, sendo o Usuário integralmente responsável por qualquer prejuízo
                            causado ao sistema do computador pessoal ou pela perda de dados resultantes do download ou por qualquer outra forma de acesso a tais materiais.
                          </li>
                        </ol>
                      </li>

                      {/* 17 */}
                      <li>
                        <h6>Limitação de Responsabilidade</h6>
                        <p><b>O Usuário expressamente concorda e está ciente de que o
                          clubedoscompositores.com.br não terá qualquer responsabilidade, seja
                          contratual ou extra-contratual, por quaisquer danos patrimoniais ou morais,
                          incluindo, sem limitação, danos por lucros cessantes, perda de fundo de
                          comércio ou de informações ou outras perdas intangíveis resultantes do:</b>
                        </p>
                        <ol className={styles.olRoman}>
                          <li>uso ou incapacidade de usar o Serviço;</li>
                          <li>custo de aquisição de bens ou serviços outros decorrentes da compra de
                            bens, informações e dados pelo ou através do serviço ou mensagens de
                            recebimento ou transações estabelecidas no ou através do Serviço;</li>
                          <li>acesso não autorizado às transmissões ou informações do Usuário, bem
                            como da alteração destes;
                          </li>
                          <li> orientações ou condutas de terceiros sobre o Serviço;</li>
                          <li>por motivos de força maior ou caso fortuito e atos praticados pelo
                            próprio Usuário.
                          </li>
                        </ol>
                      </li>

                      {/* 18 */}
                      <li>
                        <h6>Direitos Autorais</h6>
                        <p>O clubedoscompositores.com.br respeita os direitos de propriedade intelectual de terceiros e solicita que seus
                            Usuários façam o mesmo. Se o Usuário ou terceiros acreditam que suas obras foram copiadas de maneira que constitua
                            violação de direitos autorais, o Usuário ou terceiros deverão fornecer à administração do clubedoscompositores.com.br,
                            para que as providências cabíveis sejam tomadas, as seguintes informações:
                        </p>
                        <ol>
                          <li>assinatura normal ou eletrônica da pessoa autorizada a agir em nome do
                            titular dos direitos autorais;
                          </li>
                          <li>descrição da obra protegida por direito autoral que o Usuário ou terceiros
                            entendem ter sido infringido;
                          </li>
                          <li>descrição do local no site onde encontra-se o material que o Usuário ou
                            terceiros alegam estar infringindo direitos autorais;
                          </li>
                          <li>endereço, telefone e endereço de e-mail do Usuário ou terceiro
                            responsável;
                          </li>
                          <li>
                            declaração do Usuário ou de terceiros, mencionando acreditar de boa fé que o uso questionado não foi autorizado pelo titular dos direitos autorais, seu representante ou por lei;
                          </li>
                          <li>
                            declaração do Usuário, sob as penas da lei, indicando que as informações
                            contidas na notificação de infração são verdadeiras e que o Usuário é o
                            titular dos direitos autorais ou está autorizado a agir em defesa de tais
                            direitos.
                          </li>
                        </ol>
                        <p> administração do clubedoscompositores.com.br que receberá notificações de infração pode ser contatado no endereço:</p>
                        <p><b>webmaster@clubedoscompositores.com.br</b></p>
                      </li>

                      {/* 19 */}
                      <li>
                        <h6>Disposições Gerais</h6>
                        <p>Os Termos do Uso constituem o acordo integral entre o Usuário e o
                          clubedoscompositores.com.br e regerão a utilização do Serviço pelo Usuário.
                        </p>
                        <p>A execução, mostra ou baixa de arquivo musical, fotográfico ou de texto por
                          clubedoscompositores.com.br ou pelos  sites associados ao clube dos
                          compositores (radionline.com.br) é feita a título de
                          divulgação e promoção de autores, cantores e artistas, e promovida pelos próprios interessados ou seus prepostos.
                        </p>
                        <p>Desta forma, os autores e artistas, bem como qualquer pessoa que utilizar o site para divulgação de trabalho, seu ou de outrém,
                            expressamente abre mão de qualquer remuneração a título de direito autoral por exibição pública.
                        </p>
                        <p>
                          Assumem também total responsabilidade pelo pagamento de direitos conexos e eximem clubedoscompositores.com.br e seus sites associados por qualquer espécie de pagamento indenizatório por exibição de seu conteúdo, autorizando sua execução mesmo que não estejam mais associados ao site, sempre a critério deste.
                        </p>
                        <p>
                          Os Termos de Uso e o relacionamento entre o Usuário e o
                          clubedoscompositores.com.br serão regidos pelas leis da República Federativa do Brasil, sem consideração a qualquer disposição sobre conflito de leis.
                        </p>
                        <p>O Usuário e o clubedoscompositores.com.br concordam em submeter-se à
                          competência única e exclusiva dos tribunais localizados no Brasil e elegem o
                          foro central da comarca de São Paulo como
                          competente para dirimir qualquer questão referente ao presente Termo de Uso ou sobre a relação entre clubedoscompositores.com.br e Usuário.
                        </p>
                        <p>Caso o clubedoscompositores.com.br deixe de exercer ou executar qualquer
                          direito ou dispositivo dos Termos do Uso, isto não será caracterizado como
                          uma renúncia a tal direito ou dispositivo nem constituirá novação.
                        </p>
                        <p>
                          Se qualquer dispositivo dos Termos de Uso for considerado inválido por um
                          tribunal competente, as partes todavia concordam que o restante dos Termos de Uso deverão ser          interpretados de tal forma a refletir a intenção inicial das partes, e os outros dispositivos dos Termos de Uso permanecerão em pleno vigor e efeito.
                        </p>
                      </li>

                    </ol>
                  </div>
                </div>
              </div>

              {/* Quero gravar um CD. O que faço? */}
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingThirtyFour">
                  <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirtyFour " aria-expanded="false" aria-controls="collapseThirtyFour ">
                    Quero gravar um CD. O que faço?
                  </button>
                </h2>
                <div id="collapseThirtyFour" className={`accordion-collapse collapse`} aria-labelledby="headingThirtyFour" data-bs-parent="#accordionExample">
                  <div className={`accordion-body`}>
                    <h4>Quero gravar um CD. O que faço?</h4>
                    <p>O Clube dos Compositores tem uma gravadora e um selo associado, o selo Dallas Music. Através dele, você pode conseguir
                        gravar seu cd e ter distribuição nacional, que é a grande dificuldade encontrada pelos novos artistas.
                        A distribuição nacional é feita através da Music Box, Loja Virtual e Música Digital, para todo o Brasil e para o mercado
                        internacional.
                    </p>
                    <p>
                      Uma boa oportunidade para mostrar seu trabalho ao grande público antes de investir em um CD totalmente seu,
                      é participar dos CDS Coletâneas Clube dos Compositores, compostos de 20 faixas, com grandes nomes da música do Brasil.
                      Os custos são subsidiados, rateados entre todos os participantes e parcelados, tornando-o bastante acessível para a
                      grande maioria dos artistas.
                    </p>
                    <p>
                      Clique em <a href="https://www.clubedoscompositores.com.br/cd1/colet.asp"> Coletânea CBB</a> e submeta seu trabalho à apreciação dos produtores.
                      (apenas os trabalhos selecionados participarão das coletâneas CCB).
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </MainContainerStyles>
      </>
    )
}


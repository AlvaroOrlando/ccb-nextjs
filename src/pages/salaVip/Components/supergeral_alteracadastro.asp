<!--#INCLUDE FILE="usuarios.asp" -->
<!--#INCLUDE FILE="cep.asp" -->

<%If InsTr(Request.ServerVariables("HTTP_REFERER"), "www.clubedoscompositores.com.br") Then
  'Permitimos o acesso a p�gina, pois o usu�rio clicou em um link do pr�prio site
%>

<%
raiz = "/"
Server.Execute  raiz & "headerISO.asp" 
%>

<html>
<head>
  <meta charset="ISO-8859-1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="Keywords" Content="registro de m�sicas, registro de m�sica, registro de m�sicas, divulgac�o, publicidade, radios internet, radionline, radio ccb,   gravadoras, compositores, m�sicas, duplas sertanejas, direitos autorais, ecad, sicam, Sony, BMG, EMI, Continental, WEA, Virgin, Warner, Abril, Polygram, rock, pop, mpb, samba, pagode, sertanejo, rom�ntico, jazz, cl�ssico, country, est�dios, Real Audio, mp3, festival, festivais, m�sicos, produtores, letras, melodia, registro de m�sicas, Chico Buarque, Caetano Veloso, Roberto Carlos, Zez� di Camargo, partituras, cantores, bandas, sa�de, empregos, clubes">
  <meta name="Description" Content="registro de m�sicas, divulgac�o e publicidade em radios internet, radionline, radio ccb,  produtoras, gravadoras Sony, WEA, EMI, Polygram, BMG, Universal, Virgin, Abril, Continental, RGE, Warner, editoras, produtores, cantores, artistas, duplas e bandas. Direitos Autorais, Registro de m�sicas, Servicos, Assist�ncia Jur�dica.">

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
  
  <link rel="stylesheet" href="./css/globals.css" />
</head>

<style>
.pagamento-list li{
  list-style-type: decimal;
  margin-top: 1rem;
}

.pagamento-list{
  padding: 3rem;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 3rem;
}

.wrap-container{
  width: 100%; 
  max-width:920px; 
  margin: 0 auto; 
  background-color: #fff;
  padding-bottom: 1rem; 
}

.wrap-container-inputs{
  width: 100%;
  padding: 1rem 3rem 1rem 3rem;
  margin: 0 auto;
}

</style>

<body>

  <div class="bg">
    <div class="main-pagamentos_global mt-2">
      <div class="sub-container_global"> 
        <h1 style="font-family:'Oswald', sans-serif;" class="titulos_global"><a style="color: #cd1012;" href="">Sala VIP</a> > Alterar Perfil</h1>
        <div class="linha_global"></div>

        <!-- T�tulo -->
        <h4 class="subtitulos_global mt-3" style="font-family: 'Oswald', sans-serif; font-weight: bold;">
          Todos  os dados, inclusive nome, dever�o estar em letras min�sculas. 
          Somente as INICIAIS em mai�sculas.
        </h4>

        <!--C�digo ASP-->
        <div>
          <%
                
            Dim agencia, conta, digito, socio, email
            agencia = ""
            conta = ""
            digito=""

            socio=Trim(Request.Querystring("socio"))
            email=Trim(Request.Querystring("email"))


            ' Abre conexao com banco de dados
            Dim conexao

            ' Abre conexao com banco de dados

            Set Conexao = Server.CreateObject("ADODB.Connection")
            Conexao.Open ("DSN=MySQL ODBC 5.2w Driver;SERVER=localhost;UID=root;PWD=Cachimbo@321;DATABASE=mysql")


            'inicio rotina para evitar  nome repetido
            Set Recor = Server.CreateObject("ADODB.Recordset")

            sQuery = "SELECT * FROM clubecad WHERE socion = '" & socio & "'  AND (em_dia = 's' OR em_dia = 'S' OR em_dia = 'i') "

            '
            Recor.Open sQuery, Conexao, adCmdText
            If Recor.EOF Then
            Response.Write "<scr" & "ipt> alert(' Numero de socio/email invalido ou conta desativada temporariamente. Para reativar, clique em Servi�os - CAIXA/Secretaria. Obrigado.');var myWindow = window.open(""/supergeral.asp"");</scr" & "ipt>"
            Else
            pedidof = Recor("pedidof")
            'If  mid(pedidof,6,1) = "7"  Then
            forma_de_pgto = Recor("forma_de_pgto")
            frequencia_pgto = Recor("frequencia_pgto")
            agencia = Recor("agencia")
            digito_agencia = Recor("digito_agencia")
            conta = Recor("conta")
            digito = Recor("digito")
            tipo_conta = Recor("tipo_conta")
            musicas_na_internet = Recor("musicas_internet")
            If musicas_na_internet > 0 Then
            musicas_pagas = musicas_na_internet - 2
            End If

            'End If

            Dim netqtd, pedidof
            netqtd = Recor("musicas_internet")

            Dim totfatura, tot_semestral, tot_anual, totfatura_bol
            totfatura = left(Recor("Total_da_fatura_mensal"), len(Recor("Total_da_fatura_mensal"))-3)
            totfatura_bol = totfatura 
            totfatura_bol = totfatura_bol & ",00"
            semestre_brutal = totfatura*6
            ano_brutal = totfatura*12
            tot_semestral = Round((totfatura*6)*.90)
            tot_anual = Round((totfatura*12)*.85)
            tot_semestral = tot_semestral & ",00"
            tot_anual = tot_anual & ",00"

            Dim totfaturabackup
            totfatura = totfatura & ",00"
            totfaturabackup = totfatura

            mes = month(date)
            If Len(mes) < 2 Then
            mes = "0" & mes
            End If

            ano = year(date)
            Dim ano_mes, boleto_enviado_ate
            ano_mes = ano & mes
            boleto_enviado_ate = Recor("boleto_enviado_ate")
          %>
        </div>
            
        <form 
          method="post" 
          name="itaushopline" 
          OnSubmit=" return valida();" 
          action="supergeral_alteracadastro1_new.asp"
          class="mt-3"
        >

          <!--Dados Gerais-->
          <div class="wrap-container">
            <!-- PAINEL-->
            <div 
              class="painel"
              style="
                font-family: 'Bebas Neue', cursive;
              ">
                <h1
                  style="
                  margin-bottom: 0px;
                  margin-top: 5px;
                  "
                >DADOS GERAIS</h1>
            </div>

            <!-- Inputs Dados Gerais -->
            <section class="wrap-container-inputs">
              <!--Nome-->
              <div class="form-group mt-3">
                <label for="nome">Nome:</label>
                <input class="form-control" name="nome" type="text" id="nome" value="<% = Recor("nome") %>" readonly />
              </div>

              <!--S�cio-->
              <div class="form-group mt-3">
                <label for="socio">S�cio:</label>
                <input class="form-control" type="text" id="socio" value="<% Response.write Recor("socion")%>" readonly />
              </div>
                
              <!--Rua, N�mero, Complemento-->
              <div class="form-group mt-3">
                <label for="endereco">
                  Rua, n�mero, complemento
                  (40 posi��es):
                </label>
                <input class="form-control" name="endereco" id="endereco" onChange="document.itaushopline.alterou.value = 'sim';" type="text" value="<% = Recor("endereco") %>" maxlength="40" size="40">
              </div>

              <!--Cep, cidade, estado-->
              <div class="form-group mt-3">
                <label for="cep">Cep:</label>
                <input class="form-control" id="cep" name="cep" onChange="document.itaushopline.alterou.value = 'sim';" type="text" id="cep" value="<%=Recor("cep")%>" size="10" maxlength="9">
              </div>
                
              <!--Cidade-->   
              <div class="form-group mt-3">
                <label for="cidade">Cidade:</label>
                <input class="form-control" id="cidade" name="cidade" onChange="document.itaushopline.alterou.value = 'sim';" type="text" value="<% = Recor("cidade") %>" size="20" maxlength="30">
              </div>
                
              <!--Estado-->   
              <div class="form-group mt-3">
                <label for="estado">Estado: </label>
                <input class="form-control" id="estado" name="estado" onChange="document.itaushopline.alterou.value = 'sim';" type="text"  value="<% = Recor("estado") %>" size="3" maxlength="2">
                <span>(ex: SP) * Se Exterior, deixe em branco</span>
              </div>

              <!--Bairro-->   
              <div class="form-group mt-3">
                <label for="bairro">Bairro:</label>
                <input class="form-control" id="bairro" name="bairro" onChange="document.itaushopline.alterou.value = 'sim';" type="text" value="<% = Recor("bairro") %>" size="20" maxlength="30">
              </div>

              <!--Pa�s-->
              <div class="form-group mt-3">
                <label for="pais">Pa�s:</label>
                <input id="pais" class="form-control" name="pais" type="text" value="<% = Recor("pais") %>" size="20" maxlength="50">
              </div>
                
              <!--Fone-->
              <div class="form-group mt-3">
                <label for="fone">Fone:</label>
                <input class="form-control" id="fone" type="text" maxlength = "15" size = "15" name="telefone" value="<% = Recor("fone1") %>">
              </div>
              
              <!--CPF-->
              <div class="form-group mt-3">
                <label for="cpf">CPF:</label>
                <input class="form-control" id="cpf" type="text" maxlength ="14" size = "12" name="cpfcgc" value="<% = Recor("cgccpf") %>" readonly />
              </div>
              
              <!--Dia anivers�rio-->
              <div class="form-group mt-3">
                <label for="diaAniversario">Dia anivers�rio:</label>
                <input class="form-control" id="diaAniversario" type="text" maxlength="2" size="2" name="dianiver" value="<% = Recor("dianiver") %>" >
              </div>

              <!--M�s anivers�rio-->
              <div class="form-group mt-3">
                <label for="mesAniversario">Mes anivers�rio:</label>
                <input class="form-control" id="mesAniversario" type="text" maxlength ="2" size ="2" name="mesniver" value="<% = Recor("mesniver") %>" >
              </div>
                
              <!--E-mail-->
              <div class="form-group mt-3">
                <label for="email">E-mail:</label>
                <input class="form-control" id="email" type="text" maxlength = "50" size = "30" name="Email_cliente" value="<% = Recor("email") %>" readonly />
                
                <small style="color: #cd1012;">
                  Este � o seu email antigo! Deixe-o aqui e n�o delete.
                </small>
              </div>
                
              <!--Nome art�stico-->
              <div class="form-group mt-3">
                <label for="nart">Nome art�stico: </label>
                <input class="form-control" id="nart" name="nart" type="text"  value="<% = Recor("nome_artistico") %>" size="25" maxlength="30">
                <small style="color: #cd1012;">Importante! Este � o nome que aparecer� em todos os produtos CCB!  Se n�o tiver, repita seu nome.</small>
              </div>
            </section> 
          </div>

          <!--Pagamentos-->
          <div class="wrap-container">
            <!--  PAINEL-->
            <div class="painel mt-3" style="font-family: 'Bebas Neue', cursive;">
                <h1
                  style="
                    margin-bottom: 0px;
                    margin-top: 5px;
                  "
                >PAGAMENTOS</h1>
            </div>
            
            <!-- Inputs Pagamentos -->
            <section class="wrap-container-inputs mt-3">

              <!-- Informa��es -->
              <div>
                <h4 style="color: #02599a; font-family: 'Oswald', sans-serif;">Mensalidade</h4>
                <p>
                  Sua mensalidade total �:
                  <span style="color: green;"> R$ <%= totfatura %></span> 
                  <small>
                    (ref. a R$ 49,00 de mensalidade padr�o com duas m�sicas online +
                    <input type="hidden" name="totfatura" value="<% = totfatura %>">
                    <input type="hidden" name="alterou" value="nao">
                    R$ <%=3*musicas_pagas%>,00 referentes a <%=musicas_pagas%> m�sicas adicionais.
                  </small>
                </p>
                
                
                <h4 style="color: #02599a; font-family: 'Oswald', sans-serif;" class="mt-3">Op��es de pagamento:</h4>
                <p>Sua op��o atual � por pagamento
                  <%
                  If  frequencia_pgto <> "8" AND  frequencia_pgto <> "9" AND forma_de_pgto <> "4" AND forma_de_pgto <> "7" Then %>
                  <span>MENSAL e o valor de sua fatura � de:</span>
                  <span style="color: green;">
                    R$ <%response.write Recor("Total_da_fatura_mensal")%>
                  </span>
                  <% End If
                  If  forma_de_pgto = "7" Then %>
                  <span>
                    MENSAL com D�bito Autom�tico Bradesco e o valor de sua fatura � de:
                  </span>
                  <span style="color: green;">
                    R$<%response.write Recor("Total_da_fatura_mensal")%>
                  </span>
                  <% End If
                  If  frequencia_pgto = "8" Then %>
                  <span>SEMESTRAL e o valor de sua fatura � de: </span>
                  <span style="color: green;">
                    R$<%response.write Recor("fatura_semestral")%>
                  </span>
                  <% End If %>
                  <%
                  If  frequencia_pgto = "9" Then %>
                  <span>ANUAL e o valor de sua fatura � de: </span>
                  <span style="color: green;">
                    R$<%response.write Recor("fatura_anual")%>
                  </span>
                  <% End If
                  If  forma_de_pgto = "4" Then %>
                  <span>CART�O DE CR�DITO por d�bito autom�tico  e o valor de sua fatura � de: R$ </span>
                  <span style="color: green;">
                    R$<%response.write Recor("Total_da_fatura_mensal")%>
                  </span>
                </p>
                <% End If
                %>.
                
                
                <h4 style="color: #02599a; font-family: 'Oswald', sans-serif;" class="mt-3">Escolher  Forma de Pagamento:</h4>
                <p style="margin-bottom: 0px;">Clique na bolinha ao lado da op��o 1, 2, 3, 4 ou 5.</p>
                <p>Voc� tamb�m pode mudar apenas o dia de pagamento, deixando a forma atual.</p>
              </div>
              
              <!-- Pagamento -->
              <ul class="pagamento-list">
                
                <!-- D�bito Autom�tico Bradesco -->
                <li>
                  <div class="form-check">
                    <input id="debAut" type="radio" class="form-check-input" name="radiobutton" value="<%= totfatura %>"  onClick="javascript:mudei_valor(7);" >
                    <label class="form-check-label" for="debAut">D�bito Autom�tico Bradesco</label>
                    <small>(somente cliente Bradesco)</small>
                  </div>


                  <small style="font-style: italic; color: #595757;">Autorizo o d�bito em minha conta corrente Bradesco no valormensal de 
                    <span style="color: green;">R$<%= totfatura %>
                    </span>
                  </small>
                  
                  <!-- Tipo de Conta -->
                  <div class="mt-3">
                    <p>Tipo da conta BRADESCO:</p>

                    <!-- C.C. -->
                    <div class="form-check">
                      <input id="cc" class="form-check-input" type="radio" class="form-check-input" name="tipo_conta" onClick="contabilidade();" value="1"   >
                      <label class="form-check-label" for="cc">conta corrente</label>
                    </div>

                    <!-- Poupan�a -->
                    <div class="form-check">
                      <input id="poup" class="form-check-input" type="radio" class="form-check-input" name="tipo_conta" onClick="contabilidade();" value="2"  >
                      <label for="poup" class="form-check-label">poupan�a</label>
                    </div>
                    
                    <label class="mt-3" for="diaDeb">Melhor dia para d�bito:</label>
                    <select id="diaDeb" class="form-select mt-1" name="melhor_dia">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20" selected>20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                    </select>
                    
                    <!-- Ag�ncia -->
                    <div class="form-group mt-3">
                      <label for="ag">Ag�ncia (sem o d�gito):</label>
                      <input class="form-control" id="ag" type="text" name="agencia" maxlength="5" size="3" value="<%= agencia %>" >
                    </div>

                    <!-- Conta -->
                    <div class="form-group mt-3">
                      <label for="conta">Conta:</label>
                      <input class="form-control" id="conta" type="text" name="conta" maxlength="8" size="4" value="<%= conta %>" >
                    </div>

                    <!-- D�gito: -->
                    <div class="form-group mt-3">
                      <label for="dig">D�gito:</label>
                      <input class="form-control" id="dig" type="text" name="digito" maxlength="2" size="1" value="<%= digito %>" >
                    </div>
                  </div>
                </li> 
            
                
                <!-- D�bito Autom�tico VISA, MASTERCARD, DINERS, ELO,DISCOVER -->
                <li>
                  <div class="form-check">
                    <input id="debAut2" type="radio" class="form-check-input" name="radiobutton" value="<%= totfatura %>"  onClick="javascript:mudei_valor(4);" >
                    <label class="form-check-label" for="debAut2">D�bito Autom�tico VISA, MASTERCARD, DINERS, ELO,DISCOVER</label>
                  </div>
                  
                  <small style="font-style: italic; color: #595757;">
                    Apenas para cart�es de cr�dito. n�o v�lido para cart�es de d�bito. Autorizo o d�bito mensal em meu
                    Cart�o de Cr�dito abaixo, no valor mensal de
                    <span style="color: green;">
                      R$ <%= totfatura %>
                    </span> . 
                  </small>
                          
                  <!-- Melhor dia -->
                  <div class="mt-3">
                      <label for="melhorDiaMes">Melhor dia do m�s para d�bito: </label>
                      <select id="melhorDiaMes" class="form-select" name="dia_cartao">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20" selected>20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                      </select>
                  </div>
                      
                  <!-- Nome cart�o -->
                  <div class="form-group mt-3">
                    <label for="nomeCartao">Digite seu nome como est� no cart�o:</label>
                    <input class="form-control" id="nomeCartao" type="text" name="nome_no_cartao" maxlength="60" size="30" value="" >
                  </div>
                        
                  <!-- Cart�o emitido     -->
                  <div class="mt-3">
                    <label for="cartaoEmitido">Cart�o emitido por:</label>
                    <select id="cartaoEmitido" class="form-select" name="bandeira" onChange="javascript:mudei_valor2(this.value);">
                      <option value="1">Visa</option>
                      <option value="2">Mastercard</option>
                      <option value="3">Diners</option>
                      <option value="4">Elo</option>
                      <option value="5">Discover</option>
                    </select>
                  </div>
                        
                  <!-- N�mero cart�o    -->
                  <div class="form-group mt-3">
                    <label for="numCartao">N�mero do cart�o: </label>
                    <input class="form-control" id="numCartao" type="text" name="numcard" maxlength="16" size="15" value=""  >
                  </div>
                  
                  <!-- Validade -->
                  <div class="form-group mt-3">
                    <p style="color: #02599a; font-family: 'Oswald', sans-serif;">VALIDADE:</p>
                    <label for="validade">M�s (02 d�gitos)</label>
                    <input class="form-control" id="validade" type="text" name="mes_validade" size="4" maxlength="2" value="">
                  </div>

                  <!-- Ano -->
                  <div class="form-group mt-3">
                    <label for="anoCartao">Ano (02 d�gitos):</label>
                    <input class="form-control" id="anoCartao" type="text" name="ano_validade" size="4" maxlength="2" value="">
                  </div>
                          
                  <!-- C�digo Seguran�a       -->
                  <div class="form-group mt-3">
                    <label for="codSegu">C�digo de Seguran�a:</label>
                    <input class="form-control" id="codSegu" type="text" name="verificacao" maxlength="3" size="3" value=""  >
                  </div>
                </li>
                
                <!-- Boleto Mensal -->
                <li>
                  <div class="form-check">

                    <label for="boletoMensal">
                      Boleto Mensal: 
                      <small>
                        Valor 
                        <span style="color: green;">
                          R$ <%= totfatura %>
                        </span>.
                      </small>
                    </label>

                    <% If forma_de_pgto <> "4" AND   forma_de_pgto <> "7" AND  frequencia_pgto <> "8" AND frequencia_pgto <> "9" Then %>
                    <input id="boletoMensal" type="radio" class="form-check-input" name="radiobutton" value="<%= totfatura %>"  onClick="javascript:mudei_valor(0);">
                    <% Else %>
                    <input id="boletoMensal" type="radio" class="form-check-input" name="radiobutton" value="<%= totfatura %>"  onClick="javascript:mudei_valor(0);">
                    <% End If %>
                  </div>	  

                <!-- Melhor dia Vencimento -->
                <div class="mt-3">
                  <label for="melhorDiaVencimento">Melhor dia vencimento:</label>
                  <select id="melhorDiaVencimento" class="form-select" name="melhor_dia2">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20" selected>20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </select>
                </div>
                </li>            
                  
                <!-- Semestral Antecipado -->
                <li>
                  <% If  frequencia_pgto = "8" Then %>
                    <input id="pagSemAntec" type="radio" class="form-check-input" name="radiobutton_freq" checked onClick="javascript:mudei_frequencia_pgto(8);" >
                  <% Else %>
                    <input id="pagSemAntec" type="radio" class="form-check-input" name="radiobutton_freq"  onClick="javascript:mudei_frequencia_pgto(8);" >
                  <% End If %>
                  <label for="pagSemAntec">
                    Pagamento Semestral antecipado:
                    <span style="color:green;">
                      10% desconto
                    </span>:
                    De 
                    &nbsp;
                    <span style="text-decoration: line-through;">
                      R$<%= semestre_brutal %>,00 
                    </span>
                    &nbsp;
                    por <span style="color: green;">R$<%= tot_semestral %></span>
                  </label>
                </li>

                <!-- Anual Antecipado -->
                <li>
                  <% If  frequencia_pgto = "9" Then %>
                  <input id="pagAnualAnt" type="radio" class="form-check-input" name="radiobutton_freq" checked onClick="javascript:mudei_frequencia_pgto(9);" >
                  <% Else %>
                  <input id="pagAnualAnt" type="radio" class="form-check-input" name="radiobutton_freq"  onClick="javascript:mudei_frequencia_pgto(9);" >
                  <% End If %>

                  <label for="pagAnualAnt">
                    Pagamento Anual antecipado:
                    <span style="color:green;">
                      15% de desconto:
                    </span>
                    De
                    &nbsp;
                    <span style="text-decoration: line-through;">
                      R$<%= ano_brutal %>,00
                    </span>
                    &nbsp;
                    
                    por
                    <span style="color: green;">
                      R$<%= tot_anual %>
                    </span>
                  </label>
                </li>
              </ul>
            </section>
                  
            <!-- Bot�o -->
            <div class="text-center w-100">
              <button class="btn btn-primary w-50" type="submit" name="Submit22">ENVIAR DADOS</button>
            </div>
          </div>
              
          <!--Hidden Inputs -->
          <div>
            <input type="hidden" name="totsemestral" value="<%= tot_semestral %>">
            <input type="hidden" name="totanual" value="<%= tot_anual %>">
            <input type="hidden" name="totfaturabackup" value="<%= totfaturabackup %>">
            <input type="hidden" name="totfatura_bol" value="<%= totfatura_bol %>">
            <input type="hidden" name="xis" value="x">
            <input type="hidden" name="contabil" value="x">
            <input type="hidden" maxlength="8" size="8" name="pedido" value="<%= pedido %>">
            <input type="hidden" maxlength="8" size="8" name="pedidof" value="<%= pedidof %>">
            <input type="hidden" maxlength="11" name="valor" value="<%= dinheiro %>">
            <input type="hidden" name="produto" value="<%= produto %>">
            <input type="hidden" name="forma_de_pgto" value="<%=forma_de_pgto%>">
            <input type="hidden" name="frequencia_pgto" value="<%=frequencia_pgto%>">
            <input type="hidden" name="validade" value="0">
            <input type="hidden" name="cliente" value="clubedoscompositores">
            <input type="hidden" name="obs" maxlength="40" value="<%= instbol %>">
            <input type="hidden" name="sicam" value="0">
            <input type="hidden" name="socio" value="<%= Recor("socion") %>" maxlength="40">
            <input type="hidden" name="email" value="<%= email %>" maxlength="40">
          </div>
        </form>
      </div>
    </div>
  </div>

  <!--C�dio ASP-->
<div>
  <%
    Recor.Close
    'fim de rotina nova


    Conexao.Close
    Set Conexao = Nothing
    End If


    ' acesso invalido (acessou direto, fora do www.clubedoscompositores.com.br
    Else
    Response.write " Access denied! Your IP have been saved."
    End If		 
  %>
</div>
		 
  <script LANGUAGE="JavaScript">

  function alterou(){
      document.itaushopline.alterou.value = "sim";
      
  }	
  
  
  
  function contabilidade(){
  document.itaushopline.contabil.value = 'y';	 
  }	
  function mudei_valor(semestre_ano) {
  
  // Aten��o:  Modalidades de pagamento do CCB
  
  // forma_de_pgto em clubecad
  //             valor 4 = cart�o de cr�dito
  //             valor 7 = d�bito autom�tico bradesco 
  //                        valor 0 = boleto
  
  // frequencia de pagamento -  0 = mensal,   8 = semestral,  9 = anual
  
  
  document.itaushopline.forma_de_pgto.value =  semestre_ano;

  // quando for semestral ou anual, vai entrar na rotina abaixo - mudei_frequencia_pgto, caso contrario zera
  document.itaushopline.frequencia_pgto.value =  '0';

  document.itaushopline.xis.value =  'y';
  //document.write document.itaushopline.pedidof.substring(6,2).value;
  var estringue;
  estringue = document.itaushopline.pedidof.value;

  var pedef;

  }

  function mudei_frequencia_pgto(semestre_ano) {
  
  // Aten��o:  Modalidades de pagamento do CCB
  
  // forma_de_pgto em clubecad
  //             valor 4 = cart�o de cr�dito
  //             valor 7 = d�bito autom�tico bradesco 
  //                        valor 0 = boleto
  
  // frequencia de pagamento -  0 = mensal,   8 = semestral,  9 = anual
  
  
  document.itaushopline.frequencia_pgto.value =  semestre_ano;
  document.itaushopline.xis.value =  'y';


  }


  function valida() {



      var Form;
      Form = document.categoria;
      if (document.itaushopline.nome.value.length == 0) {
    alert("O nome � um campo obrigat�rio !");
          document.itaushopline.nome.focus();
          return false;
      }
      
    
    var novo_texto = tira_aspa(document.itaushopline.nome.value);
  document.itaushopline.nome.value = novo_texto;
    
    if (document.itaushopline.nart.value.length == 0) {
        document.itaushopline.nart.value = document.itaushopline.nome.value
    alert("O nome art�stico � um campo obrigat�rio! Importante! Este � o nome que constar� na PRIMEIRA P�GINA! Se n�o tiver nome art�stico, repita seu nome aqui (at� 30 caracteres).");
          document.itaushopline.nart.focus();
          return false;
      }
    
    var novo_texto = tira_aspa(document.itaushopline.nart.value);
  document.itaushopline.nart.value = novo_texto;
        
    
    
    if (document.itaushopline.endereco.value.length == 0) {
    alert("O endereco � um campo obrigat�rio !");
          document.itaushopline.endereco.focus();
          return false;
      }
    
    var novo_texto = tira_aspa(document.itaushopline.endereco.value);
  document.itaushopline.endereco.value = novo_texto;
    
    
    if (document.itaushopline.bairro.value.length == 0) {
    alert("O bairro � um campo obrigat�rio ! Se n�o souber, tecle C");
          document.itaushopline.bairro.focus();
          return false;
      }
    
    
    var novo_texto = tira_aspa(document.itaushopline.bairro.value);
  document.itaushopline.bairro.value = novo_texto;
    
    
    if (document.itaushopline.pais.value == 'brasil') {
    if (document.itaushopline.cep.value.length == 0) {
    alert("O CEP � um campo obrigat�rio !");
          document.itaushopline.cep.focus();
          return false;
      }
    
    

  var novo_texto = tira_aspa(document.itaushopline.pais.value);
  document.itaushopline.pais.value = novo_texto;
    
    
    S = document.itaushopline.cep.value;
      
  // Deixa so' os digitos no numero

      
  // Deixa so' os digitos no numero
  var Digitos = "0123456789";
  var temp = "";
  var digito = "";
      for (var i=0; i<S.length; i++){
        digito = S.charAt(i);
        if (Digitos.indexOf(digito)>=0){temp=temp+digito}
      };
      
  document.itaushopline.cep.value = temp; 
        
    
    
    
    
    if (document.itaushopline.cep.value.length != 8) {
    alert("N�mero de CEP inv�lido. Coloque apenas 8 d�gitos !");
          document.itaushopline.cep.focus();
          return false;
      } }
    
      var novo_texto = tira_aspa(document.itaushopline.cep.value);
  document.itaushopline.cep.value = novo_texto;
    
    if (document.itaushopline.cidade.value.length == 0) {
    alert("Cidade � um campo obrigat�rio !");
          document.itaushopline.cidade.focus();
          return false;
      }
    
    var novo_texto = tira_aspa(document.itaushopline.cidade.value);
  document.itaushopline.cidade.value = novo_texto;
    
    
    if (document.itaushopline.pais.value == 'brasil') {
    if (document.itaushopline.estado.value.length == 0) {
    alert("Estado � um campo obrigat�rio !");
          document.itaushopline.estado.focus();
          return false;
      }}
    if (document.itaushopline.Email_cliente.value.length == 0) {
    alert("Email � um campo obrigat�rio!");
          document.itaushopline.Email_cliente.focus();
          return false;
      }
    
    var novo_texto = tira_aspa(document.itaushopline.Email_cliente.value);
  document.itaushopline.Email_cliente.value = novo_texto;
    
    
    
    if (document.itaushopline.telefone.value.length == 0) {
    document.itaushopline.telefone.value=0;
      }
    
    var novo_texto = tira_aspa(document.itaushopline.telefone.value);
  document.itaushopline.telefone.value = novo_texto;
    
    
    
    if (document.itaushopline.dianiver.value.length == 0) {
    alert("Coloque seu dia de anivers�rio !");
          document.itaushopline.dianiver.focus();
          return false;
      }
    
    var novo_texto = tira_aspa(document.itaushopline.dianiver.value);
  document.itaushopline.dianiver.value = novo_texto;
    
    
    
    
    if (document.itaushopline.mesniver.value.length == 0) {
    alert("Coloque seu mes de anivers�rio !");
          document.itaushopline.mesniver.focus();
          return false;
      }
    
    
    var novo_texto = tira_aspa(document.itaushopline.mesniver.value);
  document.itaushopline.mesniver.value = novo_texto;
    
    
  // Testa se tem email e sobreemail
  var email1 = document.itaushopline.Email_cliente.value;
  var temp = 0;
  var digito = "";
  var certo = "";
  var wow = 0;
      for (var wow=0; wow<email1.length; wow++){
        digito = email1.charAt(wow);
        if (digito == "@"){temp=1};
      if (digito != " "){certo = certo + digito};
      }
    if (temp == 0) {    
    alert("Favor digitar um endereco de email v�lido!");
          document.itaushopline.Email_cliente.focus();
          return false;
      }
      
      if (document.itaushopline.Email_cliente.value.length == 0) {    
    alert("Favor digitar um endereco de email v�lido!");
          document.itaushopline.Email_cliente.focus();
          return false;
      }
    document.itaushopline.Email_cliente.value = certo
    
    
    
    
    
    



  if (document.itaushopline.xis.value == 'y') {
    
      


  if(document.itaushopline.forma_de_pgto.value=='7'){

  if (document.itaushopline.contabil.value == 'x') {
    alert("Marque o tipo de conta a ser debitada - conta corrente ou poupan�a.");
          
          return false;
      }





  if(document.itaushopline.agencia.value == '0'  || document.itaushopline.conta.value == '0' ) {alert("Os n�meros e d�gitos de ag�ncia e conta-corrente Bradesco s�o abrigat�rios para op��o de D�bito Autom�tico Bradesco!");
          document.itaushopline.agencia.focus();
          return false;
      } }


  var novo_texto = tira_aspa(document.itaushopline.agencia.value);
  document.itaushopline.agencia.value = novo_texto;

  var novo_texto = tira_aspa(document.itaushopline.conta.value);
  document.itaushopline.conta.value = novo_texto;




  if(document.itaushopline.forma_de_pgto.value=='4'){ 
  if(document.itaushopline.nome_no_cartao.value.length == 0 ) {alert("Digite o nome como est� grafado em seu cart�o de cr�dito!");
          document.itaushopline.nome_no_cartao.focus();
          return false;
      } 
    
    
      var novo_texto = tira_aspa(document.itaushopline.nome_no_cartao.value);
  document.itaushopline.nome_no_cartao.value = novo_texto;
    
    
  if(document.itaushopline.numcard.value.length != 16 &&document.itaushopline.numcard.value.length != 14 ) {alert("Digite o n�mero completo de seu cartao de cr�dito (16 d�gitos ou 14 para Diners)!");
          document.itaushopline.numcard.focus();
          return false;
      }
    
    
      var novo_texto = tira_aspa(document.itaushopline.numcard.value);
  document.itaushopline.numcard.value = novo_texto;

  var novo_texto = tira_aspa(document.itaushopline.validade.value);
  document.itaushopline.validade.value = novo_texto; 

  var novo_texto = tira_aspa(document.itaushopline.verificacao.value);
  document.itaushopline.verificacao.value = novo_texto;
    
    if(document.itaushopline.mes_validade.value.length != 2 ) {alert("Digite o mes de validade, como est� no cart�o de cr�dito!");
          document.itaushopline.mes_validade.focus();
          return false;
      } 	 
    if(document.itaushopline.ano_validade.value.length != 2 ) {alert("Digite os dois �ltimos d�gitos do ano de validade. !");
          document.itaushopline.ano_validade.focus();
          return false;
      } 
    document.itaushopline.validade.value = document.itaushopline.mes_validade.value + '/' + document.itaushopline.ano_validade.value;
    
      
      if(document.itaushopline.verificacao.value.length < 3 ) {alert("Coloque aqui os 3 ou 4 d�gitos de seguran�a.  O d�gito de seguran�a dos cart�es Visa, Diners e MasterCard corresponde aos tr�s �ltimos n�meros que aparecem no verso do cart�o.No cart�o Amex, o d�gito de seguran�a corresponde aos 4 n�meros localizados na frente do cart�o e do lado direito, acima da faixa num�rica. !");
          document.itaushopline.verificacao.focus();
          return false;
      } 
    
    
      
    
      
    } }






          return true;
  }
  </script>

  <script type="text/javascript" src="/agendamento/tira_aspa.js"></script>

  <script language="JavaScript" type="text/JavaScript">
  function MM_openBrWindow(theURL,winName,features) { //v2.0
    window.open(theURL,winName,features);
  }
  </script>

</body>
<%
raiz = "/"
Server.Execute  raiz & "footerISO.asp" 
%>
</html>

import BaseContainer from "@/components/Containers/BaseContainer";
import Container from "@/components/Containers/Container";
import MainContainer from "@/components/Containers/MainContainer";
import Painel from "@/components/Containers/Painel";
import Crumb from "@/components/Crumb";
import PropostaForm from "@/components/Forms/Proposta";
import LoginPropostaForm from "@/components/Forms/Proposta/login";
import Button from "@/components/Global/Button";
import Input from "@/components/Global/Input/input";
import Text from "@/components/Global/Text";

export default function Proposta(){
    return (
        <>
            <Crumb />

            <BaseContainer className="pt-0">

                <Painel content="COMPLETE SEUS DADOS" />

                <PropostaForm />

                {/* Verificacao CEP */}
                <div 
                    className="mt-3" 
                    style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}
                >
                    <Text align="center">
                        Atenção! Você só receberá sua Carteira de Compositor e eventuais Direitos Autorais se seu endereço estiver correto! Se o 
                        endereço acima estiver errado, verifique seu CEP correto e corríja-o clicando abaixo!
                    </Text>
                    <Button 
                        size="sm"
                        value="Clique aqui"
                    />
                </div>

                {/* Criacao de login */}
                <Container>
                    <Painel 
                        content="CRIAÇÃO DE LOGIN" 
                    />
                    <Container className="p-3">
                        <div className="mt-3">
                            <Text 
                                as="p" 
                                align="justify"
                            >
                                Entre com seu e-mail principal válido e uma senha de 6 a 8 caracteres. Guarde bem estes dados, que serão utilizados 
                                para você acessar sua área VIP e receber informações importantes!
                            </Text>

                            <Text 
                                as="p" 
                                align="justify"
                            >
                                Importante: Evite usar e-mails de Hotmail.com, Outlook.com ou Live.com.
                            </Text>
                        </div>

                        <LoginPropostaForm />

                        <Text
                            mt={3}
                            as="p"
                            italic
                            fs={6}
                            align="justify"
                        >
                            A mensalidade padrão dá direito a DUAS músicas tocando 24 horas na Radionline, CCB Player e em sua página. Para enviar 
                            músicas, letras e fotos para sua página, acesse a Área VIP após o cadastramento. Você deve ler e Aceitar os Termos 
                            de utilização de sites Internet bem como os direitos e obrigações dos sócios do Clube dos Compositores do Brasil. 
                            Para receber todos os benefícios, inclusive a Carteira de Compositor, você deverá pagar a Matrícula no valor de R$ 84,00 
                            e as mensalidades no valor de R$ 49,00.
                        </Text>

                        {/* Termos */}
                        <div className="mt-3" style={{display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
                            <Button 
                                value="Ler Termos de Uso"
                                type="button"
                            />

                            <div className="mt-3" style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem'}}>
                                <Input 
                                    type="checkbox"
                                    className="m-0"
                                />
                                <p className="m-0">
                                    Li e Concordo com os Termos de Uso e contrato de adesão.
                                </p>
                            </div>
                        </div>
                    </Container>
                </Container>
               
            </BaseContainer>
        </>
    )
}
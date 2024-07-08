import Input from "@/components/Global/Input/input";
import Text from "@/components/Global/Text";

export default function LoginPropostaForm(){
    return (
        <div style={{width: '100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
            <form
            style={{ width:'100%',  maxWidth: '802px' }}
            >
                <Input 
                    placeholder="E-mail"
                    className="mt-3"
                />

                <Input 
                    placeholder="Senha"
                    className="mt-3"
                />

                <Text
                mt={3}
                align="center"
                >
                 Repita e-mail e senha:
                </Text>

                <Input 
                    placeholder="Repita o e-mail"
                    className="mt-3"
                />
                <Input 
                    placeholder="Repita a senha"
                    className="mt-3"
                />
            </form>
        </div>
    )
}
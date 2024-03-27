import Button from "@/components/Global/Button";

/* eslint-disable @next/next/no-img-element */
export function Compositor(){
    return (
        <div 
            className="mb-5"
            style={{
                width:'90%',
                height:'100%',
                display:'flex', 
                flexDirection:'column',
                alignItems:'center',
                borderRadius:'8px',
                border:'1px solid rgb(229 231 235);',
                boxShadow: '0 1px 2px 0px rgba(82,129,177,0.4)'
            }}
        >
            {/* Profile */}
            <div
                className="p-4"
                style={{
                    width:'100%',
                    display:'flex', 
                    justifyContent:'space-between',
                    alignItems:'center',
                }}
            >
                <div
                    style={{
                        display:'flex',
                        alignItems:'center',
                        gap:'1rem',
                    }}
                >
                    <div
                        style={{
                            width:'76px',
                            height:'76px',
                            border:'none',
                            backgroundColor:'transparent;',
                        }}
                    >
                        <img style={{ width:'100%', objectFit:'cover', borderRadius:'50%',}} src="https://avatars.githubusercontent.com/u/92760374?v=4" alt="" />
                    </div>
                    <div style={{fontFamily: "Roboto",color:'rgb(75 85 99)' }}>
                        <h2 style={{fontSize:'1.4rem', marginBottom:'0px'}}>Álvaro Orlando</h2>
                        <p>Compositor</p>
                    </div>
                </div>

                {/* Botao */}
                <div>
                    <Button className="btn btn-outline-primary " value="Ver perfil"/>
                </div>
            </div>

            {/* Linha */}
            <div
                style={{
                    width:'100%',
                    // borderBottom: '1px solid #a0b9d1;',
                    borderBottom: '1px solid rgb(229 231 235);',
                }}
            >

            </div>

            {/* Bottom */}
            <div
                style={{
                    width:'100%',
                    height:'3rem',
                    display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                    color:'rgb(75 85 99)'
                }}
            >
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'262.25px', height:'100%', borderRight:'1px solid rgb(229 231 235)'}}>
                     Músicas registradas: &nbsp; <span>7</span>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'262.25px', height:'100%', borderRight:'1px solid rgb(229 231 235)'}}>
                    Músicas Online: &nbsp;<span>3</span>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'262.25px', height:'100%', borderRight:'1px solid rgb(229 231 235)'}}>
                    Músicas gravadas: &nbsp;<span>7</span>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'262.25px', height:'100%', borderRight:'1px solid rgb(229 231 235)'}}>
                    ISRCs: &nbsp;<span>7</span>
                </div>
            </div>

        </div>
    )
}
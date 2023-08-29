import Link from "next/link";
import ReactAudioPlayer from "react-audio-player";
import { Table } from "react-bootstrap";

export default function TabelaMusicasEstudio(){
    return (
        <div style={{width:"100%"}}>
            <Table bordered hover>
                <thead className="table-primary">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"><b>ESTILO MUSICAL</b></th>
                    <th scope="col"><b>EXEMPLOS</b></th>
                </tr>
                </thead>
                <tbody>
                {/* MPB */}
                <tr>
                    <th scope="row">1</th>
                    <td>MPB</td>
                    <td>
                    <Link href="">
                        mbp 1
                    </Link>
                        &nbsp;-&nbsp; 
                    <Link href="" >
                        mbp 2
                    </Link>
                    </td>
                </tr>

                {/* Rock */}
                <tr>
                    <th scope="row">2</th>
                    <td>POP/ROCK</td>
                    <td>
                    <Link href="">pop 1</Link> 
                        &nbsp;-&nbsp; 
                    <Link href=""> pop 2</Link> 
                        &nbsp;-&nbsp; 
                    <Link href=""> pop 3</Link> 
                        &nbsp;-&nbsp; 
                    <Link href=""> pop 4</Link>
                    </td>
                </tr>

                {/* Sertanejo */}
                <tr>
                    <th scope="row">3</th>
                    <td>SERTANEJO</td>
                    <td>
                    <Link href="">sertanejo 1</Link> 
                        &nbsp;-&nbsp; 
                    <Link href="">sertanejo 2</Link> 
                        &nbsp;-&nbsp; 
                    <Link href="">sertanejo 3</Link> 
                        &nbsp;-&nbsp; 
                    <Link href="">sertanejo 4</Link>
                    </td>
                </tr>

                {/* Samba */}
                <tr>
                    <th scope="row">4</th>
                    <td>SAMBA</td>
                    <td>
                    <Link href="">samba 1</Link> 
                        &nbsp;-&nbsp; 
                    <Link href=""> samba 2</Link>
                    </td>
                </tr>
                {/* Gospel */}
                <tr>
                    <th scope="row">5</th>
                    <td>GOSPEL</td>
                    <td>
                    <Link href="">gospel 1</Link> 
                        &nbsp;-&nbsp; 
                    <Link href=""> gospel 2</Link>
                    </td>
                </tr>

                {/* Romantico */}
                <tr>
                    <th scope="row">6</th>
                    <td>ROMÂNTICO</td>
                    <td>
                    <Link href="">Romântico 1</Link>
                    </td>
                </tr>

                {/* Marchinha */}
                <tr>
                    <th scope="row">7</th>
                    <td>MARCHINHA</td>
                    <td>
                    <Link href="">Marchinha 1</Link>
                    </td>
                </tr>
                </tbody>
            </Table>
            <div className="text-center">
            <ReactAudioPlayer
                src=""
                autoPlay
                controls
            />
            </div>
        </div>
    )
}
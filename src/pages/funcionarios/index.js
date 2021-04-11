import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../providers/auth';

function Func() {

    const history = useHistory()
    const funcionarios = ["Alisson", "Antônio", "Brenda", "Carlos", "Radija"]
    const { user, setUser } = React.useContext(AuthContext)
    return (
        <React.Fragment>
            {funcionarios.map((f, idx) => {
                return (<Button variant="dark" onClick={() => { setUser(f); history.push('/home') }}>
                    <Card bg='dark' style={{ width: '35rem' }}>
                                               <Card.Body>
                            <Card.Title>{f}</Card.Title>
                           
                        </Card.Body>
                    </Card>


                </Button>)
            })}

        </React.Fragment>

    )
}

export default Func
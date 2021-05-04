import React, {Component} from 'react'
import Printer, { print } from 'react-pdf-print'


const ids = ['sfaskfmkamdaçldmlçmalçdm']

class Printerpdf extends Component{
    render() {

      return (
        <div className='App'>
          <Printer>
              <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
                  Hello World!
              </div>
          </Printer>
          <input type='button' style={{ position: 'relative', float: 'right' }}
            onClick={() => print(ids)} value='Stampa' />
        </div>
      )
    }
  }
  
  export default Printerpdf
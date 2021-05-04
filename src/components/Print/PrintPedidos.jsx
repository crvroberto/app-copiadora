import React from 'react'


class Print extends React.PureComponent {
        
    render() {
        const item = this.props?.item
        console.log(item)
        return (
            <table>
                <thead>
                     <th>{item.objetos[0].name}</th>
                    <th>column 1</th>
                    <th>column 1</th>
                    <th>column 1</th>
                    <th>column 1</th>
                </thead>
                <tbody>
                    <tr>
                        <td>data 1</td>
                        <td>data 1</td>
                        <td>data 1</td>
                        <td>data 1</td>
                        <td>data 1</td>

                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Print
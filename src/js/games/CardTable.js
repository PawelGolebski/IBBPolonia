import React from 'react'


const CardTable = () => {
    return <div className='games__card'>
        <p className='card__title'>
            Tabela ligowa
        </p>
        <div className='table__wrapper'>
            <ol className='card__standings'>
                <li>IBB Polonia VC</li>
                <li>Durham Palatinates</li>
                <li>Malory Eagles UEL</li>
                <li>Richmond Docklands</li>
                <li>Sheffield Hallam</li>

            </ol>
            <table className='card__table'>
                <thead>
                    <tr className='table__row'>
                        <th className='table__head'>W</th>
                        <th className='table__head'>P</th>
                        <th className='table__lastCol'>L</th>
                    </tr>
                </thead>
            
                <tbody>
                    <tr>
                        <td className='table__col'>17</td>
                        <td className='table__col'>13</td>
                        <td className='table__col'>0</td>
                    </tr>

                    <tr>
                        <td className='table__col'>10</td>
                        <td className='table__col'>17</td>
                        <td className='table__col'>4</td>
                    </tr>

                    <tr>
                        <td className='table__col'>17</td>
                        <td className='table__col'>8</td>
                        <td className='table__col'>6</td>
                    </tr>

                    <tr>
                        <td className='table__col'>17</td>
                        <td className='table__col'>8</td>
                        <td className='table__col'>6</td>
                    </tr>

                    <tr>
                        <td className='table__col'>17</td>
                        <td className='table__col'>7</td>
                        <td className='table__col'>7</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
        

        <a href='#' className='card__button'>
            Zobacz całą tabelę
        </a>

    </div>
}

export default CardTable
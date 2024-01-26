import React, { Component } from 'react'
import { LOP } from './shared/ListOfPlayers'

// export default class Players extends Component {
//   render() {
//     return (
//       <div className='container'>
//         {LOP.map((player, id) => (
//           <div className='column' key={id}>
//             <div className='card'>
//               <img src={player.img} alt={player.name} />
//               <h3>{player.name}</h3>
//               <p className='title'>{player.club}</p>
//               <p><button>Detail</button></p>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }
export default class Players {
    return (
      <div className='container'>
        {LOP.map((player, id) => (
          <div className='column' key={id}>
            <div className='card'>
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <p className='title'>{player.club}</p>
              <p><button>Detail</button></p>
            </div>
          </div>
        ))}
      </div>
    )
}

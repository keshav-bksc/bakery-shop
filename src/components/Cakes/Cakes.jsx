import React, {useContext} from 'react';
import Cake from '../Cake/Cake';
import { AppContext } from '../../App';
import './Cakes.css';

const Cakes = () => {

  const {cakesData} = useContext(AppContext);

  return (
    <div className='cakes'>
      {cakesData.map((item) => {
        return <Cake key={item.id} cakeData={item} />
      })}
    </div>
  )
}

export default Cakes;

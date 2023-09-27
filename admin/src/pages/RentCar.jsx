import React from 'react';
import rentCar from "../assets/images/bmw.png";
import "../styles/rent-car.css";
import TrackingChart from '../charts/TrackingChart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const RentCar = () => {
  
  const percentage =50;
  const percentage02 = 40;

  return (
    <div className="rent__car">
      <div className="rent__car-wrapper">
        <h2 className="rent__car-title"> Rent Car</h2>
        <div className="rent__car-top">
          <div className="rent__car-img">
            <h2>2022 BMW </h2>
            <img src={rentCar} alt="" />
          </div>

          <div className="tracking__history">
           <h3>
            Tracking History
           </h3>
           <TrackingChart />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="rent__car-title">Offers</h2>

           <div className="filter__widget-01">
             <select>
               <option value="toyoto">Toyoto</option>
               <option value="bmw">BMW</option>
               <option value="audi">Audi</option>
               <option value="mahendra">Mahendra</option>
               <option value="suzuki">Suzuki</option>
             </select>
           </div>
         </div>

         <div className="offer__list">
           <div className="offer__item">
             <div className="box__01">
               <h3 className="client__name">Yukta Udas</h3>
               <h6 className="avg__price">
                 Rs. 10000 
                 <span> average price</span>
               </h6>

               <h6 className="market__price">
               Market average is Rs. 9500
               </h6>

               <span className='arrow__key'>
                <i class="ri-arrow-right-line"></i>
               </span>
             </div>

             <div className='circle__wrapper'>
               <div className="box__02">
                 <CircularProgressbar 
                   value={percentage02} 
                   text={`${percentage02}%`} 
                   styles={buildStyles({
                     pathColor: '#ff0000',
                     textColor: '#fff',
                     trailColor: '#0b0c28',
                     textSize: "18px",
                   })}
                 />
               </div>
               <h4>
                Impression Share
               </h4>
              </div>
             <div className="box__03">
               <span className="model__spend-icon">
                <i class="ri-car-line"></i>
               </span>
               <h6 className='spend__amount'>
                Rs. 10000
               </h6>
               <p className='spend__title'> Model Spend</p>
             </div>

             <div className="box__04">
               <span className="model__spend-icon">
               <i class="ri-share-forward-line"></i>
               </span>
               <h6 className='spend__amount'>
                Rs. 10000
               </h6>
               <p className='spend__title'> Model Spend</p>
             </div>

             <div className="box__05">
               <span className="model__spend-icon">
               <i class="ri-money-dollar-circle-line"></i>
               </span>
               <h6 className='spend__amount'>
                Rs. 1000
               </h6>
               <p className='spend__title'>Spend Per Unit Turn</p>
             </div>
           </div>

           <div className="offer__item">
             <div className="box__01">
               <h3 className="client__name">Rista Udas</h3>
               <h6 className="avg__price">
                 Rs. 15500 
                 <span> average price</span>
               </h6>

               <h6 className="market__price">
               Market average is Rs. 15000
               </h6>

               <span className='arrow__key'>
                <i class="ri-arrow-right-line"></i>
               </span>
             </div>

             <div className='circle__wrapper'>
               <div className="box__02">
                 <CircularProgressbar 
                   value={percentage} 
                   text={`${percentage}%`} 
                   styles={buildStyles({
                     pathColor: '#ff0000',
                     textColor: '#fff',
                     trailColor: '#0b0c28',
                     textSize: "18px",
                   })}
                 />
               </div>
               <h4>
                Impression Share
               </h4>
              </div>
             <div className="box__03">
               <span className="model__spend-icon">
                <i class="ri-car-line"></i>
               </span>
               <h6 className='spend__amount'>
                Rs. 10000
               </h6>
               <p className='spend__title'> Model Spend</p>
             </div>

             <div className="box__04">
               <span className="model__spend-icon">
               <i class="ri-share-forward-line"></i>
               </span>
               <h6 className='spend__amount'>
                Rs. 10000
               </h6>
               <p className='spend__title'> Model Spend</p>
             </div>

             <div className="box__05">
               <span className="model__spend-icon">
               <i class="ri-money-dollar-circle-line"></i>
               </span>
               <h6 className='spend__amount'>
                Rs. 1000
               </h6>
               <p className='spend__title'>Spend Per Unit Turn</p>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default RentCar;

import { useState } from 'react';
import './Toggle.css'
import Divider from '@mui/material/Divider';
import Card from './Card';
import { IoIosCheckmarkCircle } from "react-icons/io"






const Toggle = () => {

  const [selectMonthly, setSelectMonthly] = useState(true)

  return (
    <div>
      <div>

      </div>
      <div className='container'>
        <h1>Convinient Pricing</h1>
        <h3>Plan, build launch beautiful and consistent user interfaces for the web that<br /> drives meaningful engagement and growth for your brand</h3>

        <label class="switch" >
          <input type="checkbox" id="togBtn"
            onChange={() => {
              setSelectMonthly((prev) => !prev);
            }}
          />
          <div class="slider round">

            <span class="on">Monthly</span>
            <span class="off">Yearly</span>

          </div>
        </label>


        <div>
          <div className='card'>
            <div className='item item1'>

              <Card
                price={selectMonthly ? "$488" : "$49"}
                small2={selectMonthly ? "/ yearly" : "/ month"} />

              <h5>Standard</h5>
              <h6>The perfect way to get started and <br /> get used to our tools.</h6>

              <Divider variant="middle" />
              <ul>

                
                <li><IoIosCheckmarkCircle className='check' />1 end product</li>
                <li><IoIosCheckmarkCircle className='check' />3 custom Domains</li>
                <li><IoIosCheckmarkCircle className='check' />Community support</li>
                <li className='strike'><IoIosCheckmarkCircle className='check' />Community support</li>
                <li className='strike'><IoIosCheckmarkCircle className='check' />Community support</li>
                <li className='strike'><IoIosCheckmarkCircle className='check' />Community support</li>
              </ul>
              <button type="button" class="btn" onClick={event => window.location.href = 'https://dribbble.com/shots/15546325-Component-Library-Pricing/attachments/7327984?mode=media'}>Get Started</button>
            </div>
            <div className='item item2'>

              <Card
                price={selectMonthly ? "$968" : "$89"}
                small2={selectMonthly ? "/ yearly" : "/ month"}

              />



              <h5>Multisite</h5>
              <h6>The perfect way to get started and <br /> get used to our tools.</h6>

              <Divider variant="middle" />
              <ul>
                <li><IoIosCheckmarkCircle className='check' />1 end product</li>
                <li><IoIosCheckmarkCircle className='check' />3 custom Domains</li>
                <li><IoIosCheckmarkCircle className='check' />Community support</li>
                <li><IoIosCheckmarkCircle className='check' />Community support</li>
                <li className='strike'><IoIosCheckmarkCircle className='check' />Community support</li>
                <li className='strike'><IoIosCheckmarkCircle className='check' />Community support</li>

              </ul>

              <button type="button"
                onClick={event => window.location.href = 'https://dribbble.com/shots/15546325-Component-Library-Pricing/attachments/7327984?mode=media'}

                class="btn">Get Started
              </button>
            </div>


            <div className='item item3'>


              <Card
                price={selectMonthly ? "$1448" : "$129"}
                small={selectMonthly ? "/ yearly" : "/ month"} />

              <h5>Extended</h5>
              <h6>The perfect way to get started and <br /> get used to our tools.</h6>

              <Divider variant="middle" />
              <ul>
                <li><IoIosCheckmarkCircle className='check' />1 end product</li>
                <li><IoIosCheckmarkCircle className='check' />3 custom Domains</li>
                <li><IoIosCheckmarkCircle className='check' />Community support</li>
                <li><IoIosCheckmarkCircle className='check' />Community support</li>
                <li><IoIosCheckmarkCircle className='check' />Community support</li>
                <li><IoIosCheckmarkCircle className='check' />Community support</li>
              </ul>
              <button type="button" class="btn" onClick={event => window.location.href = 'https://dribbble.com/shots/15546325-Component-Library-Pricing/attachments/7327984?mode=media'}>Get Started</button>
            </div>
          </div>
        </div>

      </div>



      <footer>
        <p>Clone Creator: Sahira L. Abreu</p>

      </footer>
    </div>


  )
}

export default Toggle
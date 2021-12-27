import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';


const footerArray = [
  {
    title: "PRODUCT",
    list: [
      "Coding",
      "Prototyping",
      "Knowledge Sharing",
      "Feedback",
      "What’s New"
    ]
  },
  {
    title: "COMPANY",
    list: ["About", "Blog", "Careers", "Press", "Team"]
  },
  {
    title: "LEGAL",
    list: ["Terms", "Privacy", "Cookies", "Ad Choices"]
  },
  {
    title: "SUPPORT",
    list: ["Help Center", "Forums", "Status", "Contact"]
  }
]
function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.Container}>
        <div className={styles.leftdiv}>
          <h1 className=" text-4xl mb-5 font-bold">BufferOverflow</h1>
          <p className={"font-thin text-gray-400"}>Develop application or wordpress themese in just few clicks.</p>
          <div>
            <ul>
              <li>
                <a title='Follow Us of Facebook' href="http://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    style={{ fill: '#ffffff' }}
                  >
                    {' '}
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a title='Follow Us of Instagram' href="http://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 172 172"
                    style={{ fill: '#ffffff' }}
                  >
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#ffffff">
                        <path d="M57.32214,17.2c-22.12493,0 -40.12214,18.01386 -40.12214,40.14453v57.33333c0,22.12493 18.01386,40.12214 40.14453,40.12214h57.33333c22.12493,0 40.12214,-18.01386 40.12214,-40.14453v-57.33333c0,-22.12493 -18.01386,-40.12214 -40.14453,-40.12214zM126.13333,40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM86,51.6c18.9716,0 34.4,15.4284 34.4,34.4c0,18.9716 -15.4284,34.4 -34.4,34.4c-18.9716,0 -34.4,-15.4284 -34.4,-34.4c0,-18.9716 15.4284,-34.4 34.4,-34.4zM86,63.06667c-12.66573,0 -22.93333,10.2676 -22.93333,22.93333c0,12.66573 10.2676,22.93333 22.93333,22.93333c12.66573,0 22.93333,-10.2676 22.93333,-22.93333c0,-12.66573 -10.2676,-22.93333 -22.93333,-22.93333z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a title='Follow Us of Twitter' href="http://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    style={{ fill: '#ffffff' }}
                  >
                    {' '}
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a title='Follow Us of Github' href="http://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    style={{ fill: '#ffffff' }}
                  >
                    {' '}
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a title='Subscribe Us of YouTube' href="http://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    style={{ fill: '#ffffff' }}
                  >
                    <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>

            {

              footerArray.map((item,index)=>(
                <div className={styles.col} key={index}>
                <ul>
                  <h3 className={"mb-5 font-semibold"}>{item.title} </h3>
                  {item.list.map((lists,Index)=>(
                    <li  key={Index}>
                      <a className={"font-thin text-gray-400 hover:text-gray-100"} href="#">{lists}</a>
                    </li>
                  ))}
                </ul>
                </div>
              ))
            }
            {/* <ul>
              <h3>PRODUCT</h3>
              {PRODUCT.map((item, index) => (
                <li key={index}>
                  <a title='Follow Us of Facebook' href="http://">{item}</a>
                </li>
              ))}
            </ul> */}

          {/* <div className={styles.col}>
            <ul>
              <h3>COMPANY</h3>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Write On BufferOverflow</li>
              <li>Refer & Earn</li>
            </ul>
          </div>
          <div className={styles.col}>
            <ul>
              <h3>LEGAL</h3>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className={styles.col}>
            <ul>
              <h3>SUPPORT</h3>
              <li>Contact Us</li>
            </ul>
          </div> */}
        </div>
      </div>

      <hr />
      <a
      className={"text-gray-400 hover:text-gray-100"}
        href="https://BufferOverflow.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          © BufferOverflow 2021 | All rights reserved
        </span>
      </a>
    </footer>
  );
}

export default footer;

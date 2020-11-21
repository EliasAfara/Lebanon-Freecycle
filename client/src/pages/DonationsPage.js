import React from 'react';
import './PostCard.css';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DonationsPage = () => {
  return (
    <>
      <section className='post__wrapper'>
        <div className='post__card'>
          <div className='post__card-image'>
            <img
              src='https://cdn20.pamono.com/p/g/3/6/362466_jiei2h8vpp/vintage-belgian-black-leather-couch-1974-5.jpg'
              alt='Item'
            />
          </div>
          <div className='post__card-content'>
            <div className='post__card-info'>
              <div className='post__card-info-header'>
                <Link to='/profile/elias'>
                  <img
                    src='https://semantic-ui.com/images/avatar2/small/mark.png'
                    alt='Avatar'
                    className='header__avatar'
                  />
                </Link>
                <Link to='/profile/elias'>
                  <span className='header__fullname'>Elias Afara</span>
                </Link>

                <span className='header__ellipsis'>
                  <FaEllipsisV />
                </span>
              </div>
              <ul className='header__ul'>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Item(s): </span>Couch
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Category: </span>Fourniture
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Location: </span>Tyre
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Address: </span>Sour, Behind
                    Al Ekhlas Sweets Fournit ureFo urniture Fournitu reFourn
                    tureFo rnitu reFourni tureFou rnitureFourni ture ournit ur
                    eFourniture
                  </span>
                </li>
              </ul>
              <div className='item__description'>
                <span className='item__description-span'>
                  <span className='header__span'>Description: </span>Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed tempor, nunc
                  a fermentum rhoncus, nisi diam dictum purus, eu condimentum
                  sem enim ac ligula. Phasellus ac mi aliquet nulla congue
                  facilisis non a purus. Suspendisse maximus venenatis diam, sed
                  l.
                </span>
              </div>

              <div className='content__footer'>
                <button className='content__btn'>View More</button>
                <span className='content__date'>2 HOURS AGO</span>
              </div>
            </div>
          </div>
        </div>
        <div className='post__card'>
          <div className='post__card-image'>
            <img
              src='https://www.forschoolsdirect.co.uk/image/cache/catalog/iso%20chair-200x200.jpg'
              alt='Item'
            />
          </div>
          <div className='post__card-content'>
            <div className='post__card-info'>
              <div className='post__card-info-header'>
                <Link to='#!'>
                  <img
                    src='https://semantic-ui.com/images/avatar2/small/mark.png'
                    alt='Avatar'
                    className='header__avatar'
                  />
                </Link>
                <Link to='#!'>
                  <span className='header__fullname'>Elias Afara</span>
                </Link>

                <span className='header__ellipsis'>
                  <FaEllipsisV />
                </span>
              </div>
              <ul className='header__ul'>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Item(s): </span>Couch
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Category: </span>Fourniture
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Location: </span>Tyre
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Address: </span>Sour, Behind
                    Al Ekhlas Sweets Fournit ureFo urniture Fournitu reFourn
                    tureFo rnitu reFourni tureFou rnitureFourni ture ournit ur
                    eFourniture
                  </span>
                </li>
              </ul>
              <div className='item__description'>
                <span className='item__description-span'>
                  <span className='header__span'>Description: </span>Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed tempor, nunc
                  a fermentum rhoncus, nisi diam dictum purus, eu condimentum
                  sem enim ac ligula. Phasellus ac mi aliquet nulla congue
                  facilisis non a purus. Suspendisse maximus venenatis diam, sed
                  l.
                </span>
              </div>

              <div className='content__footer'>
                <button className='content__btn'>View More</button>
                <span className='content__date'>2 HOURS AGO</span>
              </div>
            </div>
          </div>
        </div>
        <div className='post__card'>
          <div className='post__card-image'>
            <img
              src='https://5.imimg.com/data5/DQ/XK/MY-56039866/wooden-chair-500x500.jpg'
              alt='Item'
            />
          </div>
          <div className='post__card-content'>
            <div className='post__card-info'>
              <div className='post__card-info-header'>
                <Link to='#!'>
                  <img
                    src='https://semantic-ui.com/images/avatar2/small/mark.png'
                    alt='Avatar'
                    className='header__avatar'
                  />
                </Link>
                <Link to='#!'>
                  <span className='header__fullname'>Elias Afara</span>
                </Link>

                <span className='header__ellipsis'>
                  <FaEllipsisV />
                </span>
              </div>
              <ul className='header__ul'>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Item(s): </span>Couch
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Category: </span>Fourniture
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Location: </span>Tyre
                  </span>
                </li>
                <li className='header__li'>
                  <span className='header__li-span'>
                    <span className='header__span'>Address: </span>Sour, Behind
                    Al Ekhlas Sweets Fournit ureFo urniture Fournitu reFourn
                    tureFo rnitu reFourni tureFou rnitureFourni ture ournit ur
                    eFourniture
                  </span>
                </li>
              </ul>
              <div className='item__description'>
                <span className='item__description-span'>
                  <span className='header__span'>Description: </span>Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed tempor, nunc
                  a fermentum rhoncus, nisi diam dictum purus, eu condimentum
                  sem enim ac ligula. Phasellus ac mi aliquet nulla congue
                  facilisis non a purus. Suspendisse maximus venenatis diam, sed
                  l.
                </span>
              </div>

              <div className='content__footer'>
                <button className='content__btn'>View More</button>
                <span className='content__date'>2 HOURS AGO</span>
              </div>
            </div>
          </div>
        </div>
        <div className='actions'>
          <ul className='actions__ul'>
            <li className=''>
              <i
                className='<i class="fa fa-pie-chart" aria-hidden="true"></i>'
                aria-hidden='true'
              ></i>
              Edit
            </li>
            <li className=''>
              <i className='fa fa-trash' aria-hidden='true'></i> Delete
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default DonationsPage;

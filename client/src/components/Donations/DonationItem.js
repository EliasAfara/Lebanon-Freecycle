import React from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';

// Styled Components
import * as S from './DonationsElements';

const DonationItem = () => {
  return (
    <>
      <S.Wrapper>
        <S.Card>
          <S.CardImage>
            <S.ItemImage
              src='https://cdn20.pamono.com/p/g/3/6/362466_jiei2h8vpp/vintage-belgian-black-leather-couch-1974-5.jpg'
              alt='Item'
            />
          </S.CardImage>
          <S.CardContent>
            <S.ContentDetails>
              <S.ContentHeader>
                <Link to='/profile/elias'>
                  <S.HeaderAvatar
                    src='https://semantic-ui.com/images/avatar2/small/mark.png'
                    alt='User Avatar'
                  />
                </Link>

                <S.HeaderUserFullName>
                  <Link
                    to='/profile/elias'
                    style={{
                      paddingBottom: '1px',
                      color: 'rgba(var(--i1d, 38, 38, 38), 1)',
                    }}
                  >
                    Elias Afara
                  </Link>
                </S.HeaderUserFullName>
                <S.HeaderEllipsis>
                  <FaEllipsisV style={{ width: '4px' }} />
                </S.HeaderEllipsis>
              </S.ContentHeader>
              <S.DetailsUnOrderedList>
                <S.ListItems>
                  <S.ListItemSpan>
                    <S.ListItemName>Item(s): </S.ListItemName>Couch
                  </S.ListItemSpan>
                </S.ListItems>
                <S.ListItems>
                  <S.ListItemSpan>
                    <S.ListItemName>Category: </S.ListItemName>Fourniture
                  </S.ListItemSpan>
                </S.ListItems>
                <S.ListItems>
                  <S.ListItemSpan>
                    <S.ListItemName>Location: </S.ListItemName>Tyre
                  </S.ListItemSpan>
                </S.ListItems>
                <S.ListItems>
                  <S.ListItemSpan>
                    <S.ListItemName>Address: </S.ListItemName>Sour, Behind Al
                    Ekhlas Sweets Fournit ureFo urniture Fournitu reFourn tureFo
                    rnitu reFourni tureFou rnitureFourni ture ournit ur
                    eFourniture
                  </S.ListItemSpan>
                </S.ListItems>
              </S.DetailsUnOrderedList>
              <S.ItemDescriptionDiv>
                <S.ItemDescription>
                  <S.ListItemName>Description: </S.ListItemName>Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed tempor, nunc
                  a fermentum rhoncus, nisi diam dictum purus, eu condimentum
                  sem enim ac ligula. Phasellus ac mi aliquet nulla congue
                  facilisis non a purus. Suspendisse maximus venenatis diam, sed
                  l.
                </S.ItemDescription>
              </S.ItemDescriptionDiv>

              <S.ContentFooter>
                <S.ContentBtn>View More</S.ContentBtn>
                <S.ContentDate>2 HOURS AGO</S.ContentDate>
              </S.ContentFooter>
            </S.ContentDetails>
          </S.CardContent>
        </S.Card>
      </S.Wrapper>
    </>
  );
};

export default DonationItem;

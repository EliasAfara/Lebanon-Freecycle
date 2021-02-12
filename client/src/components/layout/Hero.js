import React from 'react';
import { Button } from '../../common/Button/styles';
import * as S from './styles';

const Hero = () => {
  return (
    <section>
      <>
        <S.Hero>
          <S.Hero_Content>
            <S.HeroContent_Wrapper>
              <S.HeroH1>Freecycle Lebanon</S.HeroH1>{' '}
              <S.HeroText>
                <blockquote style={{ fontSize: '20px', fontStyle: 'italic' }}>
                  &ldquo;Be the change you want to see in the world.&rdquo; ~
                  Mahatma Gandhi
                </blockquote>
              </S.HeroText>
              <S.HeroButtonGroup>
                <S.HeroButton_Browse>
                  <S.HeroButton_Link to='/donations'>
                    <Button style={{ fontSize: '16px' }}>Browse</Button>
                  </S.HeroButton_Link>
                </S.HeroButton_Browse>
                <S.HeroButton_TakeAction>
                  <S.HeroButton_Link to='/register'>
                    <Button type='secondary' style={{ fontSize: '16px' }}>
                      Take Action
                    </Button>
                  </S.HeroButton_Link>
                </S.HeroButton_TakeAction>
              </S.HeroButtonGroup>
            </S.HeroContent_Wrapper>
          </S.Hero_Content>

          <S.HeroImage_container>
            <S.HeroMain_image
              loading='lazy'
              src='https://res.cloudinary.com/freecyclelebanon/image/upload/v1613122094/lebaneseProtest_lfc_gg7jw7.jpg'
              alt='Lebanon'
              draggable='false'
            />
          </S.HeroImage_container>
        </S.Hero>
      </>
    </section>
  );
};

export default Hero;

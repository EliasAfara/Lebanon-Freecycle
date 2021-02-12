import React from 'react';
// import { scroller } from 'react-scroll';
import { HowItWorksData } from '../../shared/HowItWorksData';
import { GiLifeSupport, GiNestedHearts } from 'react-icons/gi';
import { TiArrowRepeat } from 'react-icons/ti';
import {
  FaHandsHelping,
  FaHandHoldingHeart,
  FaHandHolding,
} from 'react-icons/fa';
import * as S from './styles';

const HowItWorksSteps = ({ title, content, icon }) => {
  const IconSelector = ({ icon }) => {
    if (icon === 'GiLifeSupport') {
      return <GiLifeSupport />;
    } else if (icon === 'GiNestedHearts') {
      return <GiNestedHearts />;
    } else if (icon === 'TiArrowRepeat') {
      return <TiArrowRepeat />;
    } else if (icon === 'FaHandsHelping') {
      return <FaHandsHelping />;
    } else if (icon === 'FaHandHoldingHeart') {
      return <FaHandHoldingHeart />;
    } else if (icon === 'FaHandHolding') {
      return <FaHandHolding />;
    } else {
      return '';
    }
  };
  return (
    <>
      <S.HowItWorkTile>
        <S.HowItWorkTile_Inner>
          <div>
            <S.InnerItemHeader>
              <IconSelector icon={icon} />
            </S.InnerItemHeader>
          </div>
          <div className='features-tiles-item-content'>
            <h4 style={{ marginTop: 0, marginBottom: '8px', fontSize: '24px' }}>
              {title}
            </h4>
            <p style={{ fontSize: '18px' }}>{content}</p>
          </div>
        </S.HowItWorkTile_Inner>
      </S.HowItWorkTile>
    </>
  );
};

const HowItWorks = () => {
  return (
    <section>
      <S.SectionContainer>
        <S.HowItWorksSection>
          <S.HowItWorksHeading>
            <S.HowItWorksH1>How It Works</S.HowItWorksH1>
          </S.HowItWorksHeading>

          <S.FeaturesWrapper>
            {HowItWorksData.map((item) => (
              <HowItWorksSteps
                key={item.id}
                title={item.title}
                content={item.content}
                icon={item.icon}
              />
            ))}
          </S.FeaturesWrapper>
        </S.HowItWorksSection>
      </S.SectionContainer>
    </section>
  );
};

export default HowItWorks;

import React, { Suspense } from 'react';
import loadable from '@loadable/component';

import { faq } from '../shared/FAQsData';
import { Card, ListGroup } from 'react-bootstrap';
import * as S from '../components/layout/styles';
import { Space, Spin } from 'antd';

const FAQ = loadable(() => import('../components/layout/FAQ'));
const Footer = loadable(() => import('../components/layout/Footer'));

const FAQPage = ({ match }) => {
  const faqSection = match.params.faq;

  return (
    <Suspense
      fallback={
        <div style={{ textAlign: 'center' }}>
          <Space size='middle'>
            <Spin size='large' />
          </Space>
        </div>
      }
    >
      <div className='containerMother'>
        <div className='public-container'>
          <S.PageContainer_FAQ>
            <S.SideContentContainer_FAQ>
              <Card style={{ width: '14rem', height: 'fit-content' }}>
                <Card.Header>Frequently Asked Questions</Card.Header>
                <ListGroup variant='flush'>
                  {faq.map((item, index) => (
                    <S.SideBarRoute to={`/faq/${item.title}`} key={index}>
                      <ListGroup.Item>{item.title}</ListGroup.Item>
                    </S.SideBarRoute>
                  ))}
                </ListGroup>
              </Card>
            </S.SideContentContainer_FAQ>

            <S.ContentContainer>
              <FAQ content={faq} faqSection={faqSection} />
            </S.ContentContainer>
          </S.PageContainer_FAQ>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default FAQPage;

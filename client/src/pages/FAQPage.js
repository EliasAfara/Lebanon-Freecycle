import React, { Suspense } from 'react';
import loadable from '@loadable/component';

import { faq } from '../shared/FAQsData';
import { List } from 'antd';
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
              <List
                header={<div>Frequently Asked Questions</div>}
                bordered
                dataSource={faq}
                renderItem={(item, index) => (
                  <List.Item>
                    <S.SideBarRoute to={`/faq/${item.title}`} key={index}>
                      {item.title}
                    </S.SideBarRoute>
                  </List.Item>
                )}
              />
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

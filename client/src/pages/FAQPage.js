import React from 'react';
import FAQ from '../components/layout/FAQ';
import { faq } from '../shared/FAQsData';
import { Card, ListGroup } from 'react-bootstrap';
import * as S from '../components/layout/styles';
// import FooterCopyright from '../components/layout/FooterCopyright';

const FAQPage = ({ match }) => {
  const faqSection = match.params.faq;

  return (
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

      {/* <FooterCopyright /> */}
    </S.PageContainer_FAQ>
  );
};

export default FAQPage;

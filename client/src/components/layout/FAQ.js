import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQComponent = ({ content, faqSection }) => {
  return (
    <>
      {content.map((item) => (
        <div key={item.id}>
          {item.title === faqSection &&
            item.content.map((contentItem) => (
              <Collapse
                key={contentItem.id}
                expandIconPosition='right'
                style={{ marginBottom: '8px' }}
              >
                <Panel header={contentItem.question} key={contentItem.id}>
                  <p>{contentItem.answer}</p>
                </Panel>
              </Collapse>
            ))}
        </div>
      ))}
    </>
  );
};

export default FAQComponent;

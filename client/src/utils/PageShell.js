import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import { TransitionGroup } from "react-transition-group";

// NEED TO BE FIXED CUZ ITS GIVING A WARNING

const PageShell = (Page) => {
  return (props) => (
    <div className='page'>
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={200}
        transitionName={'SlideIn'}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  );
};
export default PageShell;

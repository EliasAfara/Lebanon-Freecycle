import React, { useState, useEffect } from 'react';

import './Tabs.css';

const NavTabs = ({ firstTab, SecondTab }) => {
  const [showFirstTab, setShowFirstTab] = useState(false);
  const [showSecondTab, setShowSecondTab] = useState(false);
  const [activeTab, setActiveTab] = useState('FirstTab');

  useEffect(() => {
    if (activeTab == 'FirstTab') {
      setShowSecondTab(false);
      setShowFirstTab(!showFirstTab);
    } else if (activeTab == 'SecondTab') {
      setShowFirstTab(false);
      setShowSecondTab(!showSecondTab);
    }
  }, [activeTab]);

  return (
    <div className='navtabs__container'>
      <ul className='navtabs__ul'>
        <li className='navtabs__ul-li'>
          <span
            className={showFirstTab ? 'navtabs__span active' : 'navtabs__span'}
            role='tab'
            onClick={() => setActiveTab('FirstTab')}
          >
            {firstTab}
          </span>
        </li>
        <li className='navtabs__ul-li'>
          <span
            className={showSecondTab ? 'navtabs__span active' : 'navtabs__span'}
            role='tab'
            onClick={() => setActiveTab('SecondTab')}
          >
            {SecondTab}
          </span>
        </li>
      </ul>

      {showFirstTab && (
        <div className='navtabs__FirstTab'>
          Some glory in their birth, some in their skill, Some in their wealth,
          some in their body's force, Some in their garments though new-fangled
          ill; Some in their hawks and hounds, some in their horse; And every
          humour hath his adjunct pleasure, Wherein it finds a joy above the
          rest: But these particulars are not my measure, All these I better in
          one general best. Thy love is better than high birth to me, Richer
          than wealth,
        </div>
      )}

      {showSecondTab && (
        <div className='navtabs__equests'>
          prouder than garments' costs, Thus is his cheek the map of days
          outworn, When beauty lived and died as flowers do now, Before these
          bastard signs of fair were born, Or durst inhabit on a living brow;
          Before the golden tresses of the dead, The right of sepulchres, were
          shorn away, To live a second life on second head; Ere beauty's dead
          fleece made another gay: In him those holy antique hours are seen,
          Without all ornament, itself and true,
        </div>
      )}
    </div>
  );
};

export default NavTabs;

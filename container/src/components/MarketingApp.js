import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';
const MarketingApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};

export default MarketingApp;

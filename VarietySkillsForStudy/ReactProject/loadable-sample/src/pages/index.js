// import withSplitting from '../withSplitting';

// export const Home = withSplitting(() => import('./Home'));
// export const About = withSplitting(() => import('./About'));


// react-loadable
// 각 로더에대한 설정과 컴포넌트에 대한 설정이 가능하다.
import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
  return <div>로딩중...</div>;
};

export const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
export const About = Loadable({
  loader: () => import('./About'),
  loading: Loading
});
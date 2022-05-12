import React from 'react';
import renderWithRouter from '../helpers/render-with-router';
import HomeDashboard from './home.dashboard.component';

const match = {
  params: {id: 1},
  isExact: true,
  path: '',
  url: ''
};

function renderHome(){
  return renderWithRouter(<HomeDashboard match={match} canSearch />);
}

it('renders without failing', ()=>{
  renderHome();
});

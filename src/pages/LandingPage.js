import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';

import landingpage from 'json/landingPage';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = 'StayCation | Home';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingpage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingpage.mostPicked}
        />
        <Categories data={landingpage.categories} />
        <Testimony data={landingpage.testimonial} />
        <Footer />
      </>
    );
  }
}

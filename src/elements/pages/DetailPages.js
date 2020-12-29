import React, { Component } from 'react';
import itemDetails from 'json/itemDetails.json';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import PageDetailDescription from 'parts/PageDetailDescription';
import FeaturedImage from 'parts/FeaturedImage';
import BookingForm from 'parts/BookingForm';

console.log(itemDetails);
export default class DetailPages extends Component {
  componentDidMount() {
    window.title = 'Detail Pages';
    window.scrollTo(0, 0);
  }

  render() {
    console.log(itemDetails);
    const breadcrumd = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumd} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={itemDetails} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={itemDetails} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

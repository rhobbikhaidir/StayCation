import React, { Component } from 'react';
import InputNumber from 'elements/Form/InputNumber';
import InputDate from 'elements/Form/InputDate';
import Breadcrumb from 'elements/Breadcrumb';
import itemDetails from 'json/itemDetails.json';

export default class Example extends Component {
  render() {
    const breadcrumbList = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: '100vh' }}
        >
          <div className="col-auto">
            <InputNumber value={3} />
          </div>
        </div>
      </div>
    );
  }
}

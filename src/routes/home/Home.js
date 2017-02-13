/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import s from './Home.css';
import Flag from '../../components/Flag';
import Link from '../../components/Link';

const countries = require('./countries.json');

/* eslint max-len: ["error", 200]*/
class Home extends React.Component {

  render() {
    const topCountries = [];
    countries.forEach((country) => {
      if (country.type === 9) {
        topCountries.push(country);
      }
    });
    topCountries.sort((a, b) => a.id - b.id);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h2>Top mobile app trends in the world in 2017</h2>
            {topCountries.map((country) => (
              <Link key={`country_id_${country.id}`} to={`/top-mobile-app-trend-in-${country.countryName.toLowerCase().split(' ').join('-')}/${country.countryCode}`}>
                <Flag countryCode={country.countryCode} countryName={country.countryName} size={30} />
              </Link>
            ))}
            <br />
            <Link to={'/top-mobile-app-trend-in-the-world'}>
              <Button bsStyle="primary"><Glyphicon glyph="search" /> View more counties</Button>
            </Link>
          </center>
          <center>
            <h2>Infographic highlighting the top mobile app trends in 2017</h2>
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

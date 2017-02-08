/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Flag from '../../components/Flag';

class Home extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <p className={s.description}>
              Infographic highlighting the top mobile app trends in 2017
            </p>
            <Flag countryCode="vn"countryName="Vietnam" size={9} />
            <Flag countryCode="jp"countryName="Japan" size={9} />
            <Flag countryCode="us"countryName="America" size={9} />
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

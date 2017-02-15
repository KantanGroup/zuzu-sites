/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Image } from 'react-bootstrap';
import Rater from 'react-rater';
import s from './TopColumn.css';
import Link from '../../components/Link';

class TopColumn extends React.Component {
  static propTypes = {
    countryName: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { apps, countryName } = this.props;
    if (apps != null && apps.length > 0) {
      return (
        <div>
          {apps.map(app => (
            <Link key={`app_id_${app.index}`} to={`/top-mobile-app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/${app.appId}`}>
              <div className={s.app}>
                <div className={s.appImage}>
                  <Image src={`${app.icon.startsWith('http') ? app.icon : `http:${app.icon}`}`} rounded width={85} height={85} alt={`Trend app ${app.appId}`} />
                </div>
                <div className={s.appDescription}>
                  <div className={s.appName}>{app.title}</div>
                  <div className={s.appDeveloper}>{app.developerId}</div>
                  <Rater interactive={false} rating={app.score} />
                  <div className={s.appPrice}>{app.price === '0' ? 'Free' : app.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    }
    return (
      <div>
        Server undermaintain
      </div>
    );
  }
}

export default withStyles(s)(TopColumn);

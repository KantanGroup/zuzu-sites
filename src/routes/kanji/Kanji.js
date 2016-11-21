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
import s from './Kanji.css';

class Kanji extends React.Component {
  static propTypes = {
    code: React.PropTypes.number,
    kanji: React.PropTypes.object,
  }

  render() {
    const { code } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 style={{ fontSize: 72 }}><b>{String.fromCharCode(code)}</b></h1>
          <ul className={s.news}>
            Kanji {String.fromCharCode(code)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Kanji);

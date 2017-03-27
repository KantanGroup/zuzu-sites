/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLList as List,
} from 'graphql';

import AppIndexType from './AppIndexType';

const AppIndexTypes = new ObjectType({
  name: 'AppIndexs',
  fields: {
    topsellingFree: { type: new List(AppIndexType) },
    topsellingNewFree: { type: new List(AppIndexType) },
    topsellingPaid: { type: new List(AppIndexType) },
    topsellingNewPaid: { type: new List(AppIndexType) },
    topgrossing: { type: new List(AppIndexType) },
    topapps: { type: new List(AppIndexType) },
  },
});

export default AppIndexTypes;

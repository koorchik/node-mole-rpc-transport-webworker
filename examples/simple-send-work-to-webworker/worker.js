import 'babel-polyfill';
import expose from '../../expose';

import { sum, multiply } from '../utils';

expose({ sum, multiply }).catch(console.error);

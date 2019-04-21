import 'babel-polyfill';
import expose from '../../expose';

import { sum, multiply } from '../utils';

async function main() {
    await expose({ sum, multiply });
}

main().catch(console.error);

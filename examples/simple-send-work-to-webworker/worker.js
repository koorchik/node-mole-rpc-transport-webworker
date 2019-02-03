import 'babel-polyfill';
import factory from '../../factory';

import { sum, multiply } from '../utils';

async function main() {
    await factory.expose({ sum, multiply });
}

main().catch(console.error);

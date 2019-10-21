'use strict';

import * as test from '../node_modules/tape';
import { Apple } from "./apple";

test("testing apple", t => {
    let newApple = new Apple();
    let actual: string = newApple.getApple();
    let expected: string = 'Apple is a fruit';

    t.equal(actual, expected);
    t.end();
});
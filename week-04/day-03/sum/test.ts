'use strict';

import * as test from '../node_modules/tape';
import { Summing } from "./sum";

test("Sum of numbers", t => {
    
    let testList = new Summing;
    testList._list = [1, 2, 3, 4, 5];
    let actual = testList.sum();
    let expected = 15;
    t.equal(actual, expected, "Test for summing elements has been completed.");

    let testList2 = new Summing;
    testList2._list = [];
    let actual2 = testList2.sum();
    let expected2 = 0;
    t.equal(actual2, expected2, "Test for compering 'sum' to 'empty list' has been completed.");

    let testList3 = new Summing;
    testList3._list = [5];
    let actual3 = testList3.sum();
    let expected3 = 5;
    t.equal(actual3, expected3, "Tesing with one element in 'list' has been completed.");

    t.end();
});
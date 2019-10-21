'use strict';

import * as test from '../node_modules/tape';
import { Anagramma } from "./anagram";

test("testing anagrams", t => {
  let newAnagram = new Anagramma();
  let actual = newAnagram.anagram();
  let expected = true;

  t.equal(actual, expected);
  t.end();
});
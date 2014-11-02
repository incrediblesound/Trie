/* global trie, describe, it, expect, should */

describe('trie()', function () {
  'use strict';
  var tree;

  beforeEach(function () {
    tree = new Trie();
  });

  it('exists', function () {
    expect(Trie).to.be.a('function');
    expect(tree).to.be.a('object');
  });

  it('insert and reconstructs words', function () {
    var doc = "While a member of Knickerbocker Engine Company No. 12 of the New York City Fire Department, Alexander Joy Cartwright became involved in playing town ball (a similar game to baseball, and an older one) on a vacant lot in Manhattan. In 1845, the lot became unavailable for use, and the group was forced to look for another location. They found a playing field, the Elysian Fields, a large tree-filled parkland across the Hudson River in Hoboken, New Jersey run by Colonel John Stevens, which charged $75 a year to rent. In order to pay the rental fees, Cartwright organized a ball club so that he could collect the needed money. The club was named the \"Knickerbockers\", in honor of the fire company where Cartwright was a member. The Knickerbockers club was organized on September 23, 1845. The first officers were Duncan F. Curry, president, William R. Wheaton, vice-president, and William H. Tucker, secretary-treasurer.";
    tree.insertDocument(doc);
    var list = tree.reconstruct();
    expect(list.join(' ')).to.equal(doc);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});

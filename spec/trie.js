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
    tree.insert('words');
    tree.insert('woes');
    tree.insert('word');
    tree.insert('worship');
    var list = tree.reconstruct();
    console.log(list);
    expect(list.length).to.equal(4);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});

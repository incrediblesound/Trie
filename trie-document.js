var forEach = function(array, fn){
  for(var i = 0; i < array.length; i++){
    fn(array[i], i);
  }
}

var Trie = function(value){
  this.value = value ? value.data[0] : '';
  this.children = [];
  this.locations = [];
  this.stop = false;
  if(value){
    value.data = value.data.substr(1, value.data.length);
    if(value.data.length){
      this.children.push(new Trie(value));
    } else {
      this.stop = true;
      this.locations.push(value.location)
    }
  }
}

Trie.prototype.insert = function(value, place){
  if(place === undefined){ place = 0; }
  if(place === value.data.length){
    this.stop = true;
    this.locations.push(value.location);
  } else {
    var character = value.data[place];
    var returned = false;
    forEach(this.children, function(child){
      if(child.value === character){
        child.insert(value, place+1);
        returned = true;
      }
    })
    if(!returned){
      value.data = value.data.substr(place, value.data.length);
      this.children.push(new Trie(value));
    }
  }
}

Trie.prototype.reconstruct = function(value, results){
  value = value || '';
  results = results || [];
  value = value + this.value;
  if(this.stop){
    forEach(this.locations, function(idx){
      results[idx] = value;
    })
  }
  if(this.children.length){
    forEach(this.children, function(child){
      results = child.reconstruct(value, results);
    })
  }
  return results;
}

Trie.prototype.insertDocument = function(document){
  var splitDocument = document.split(' ');
  for(var k = 0; k < splitDocument.length; k ++) {
    if(splitDocument[k].length > 0){
      this.insert({ data: splitDocument[k], location: k });
    }
  }
}
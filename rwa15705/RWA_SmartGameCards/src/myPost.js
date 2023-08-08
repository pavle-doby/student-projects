export  function myPost(url, obj){
 return fetch(url, {
  method: 'post',

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(obj)

})
.then(response =>  response.json()) //returns jsons response
.then(json => {
  console.log('parsed json: ', json);
  return true;
})
.catch(ex => {
  console.log('parsing failed: ', ex);
  return false;
});

}


export  function myPut(url, ObjekatKojiMenjaStari){

    const urlObjekta = url + "/" +ObjekatKojiMenjaStari.id;
    
    fetch(urlObjekta, {
    method: 'put',  
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(ObjekatKojiMenjaStari)
    })
    .then(response =>  response.json()) //returns jsons response
    .then(json => console.log('parsed json: ', json))
    .catch(ex => console.log('parsing failed: ', ex));

}

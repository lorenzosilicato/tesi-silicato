
//Questo era un esempio di snippet per imparare ad utilizzare i cookies, non fa nulla per l'app
export function load({cookies}){
  const visited = cookies.get('visited');
  
  cookies.set('visited', 'true', {path : '/'});

  return{
    visited : visited === 'true'
  };
}

const registerRoute = (navConfig) => {
  let route = [];
  let navs = navConfig;

  let comps = require.context('../docs', true, /\.md$/);

  let childRoutes = comps.keys().map(key => comps(key));
  let newArr = comps.keys();

  function addRoute (page) {

    let component =   getComponent(page);
    route.push({
      path: page.path,
      component: component
    })

  }

  function getComponent(page){
      for(let i = 0; i <newArr.length; i++){
          let item  = newArr[i]
          let arr = item.split("/");
          let file = arr.slice(-1);
          let fileName = file[0].replace(/\..+$/g,"");
          if( "/" + fileName == page.path){
              return childRoutes[i].default;
          }
      }
      return null;
  }


  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })
  return route
}

export default registerRoute

function functionconnect(reactelement , element){
    const created = document.createElement(reactelement.type)
    created.innerHTML = reactelement.children
    for (const key in reactelement.props) {
        created.setAttribute(key , reactelement.props[key])
    }
  element.appendChild(created)
    
}



const reactelement = {
    type: 'a' ,
    props: {
href: 'www.google.com' ,
target: '_blank'
    } ,
    children: 'welcome to link'
}
// ye sare chiz react ke andar chalte rehta h
const element = document.querySelector('#root')
functionconnect(reactelement , element)

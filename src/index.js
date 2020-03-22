import _ from 'lodash';


component = () =>  {
    const element = document.createElement('div');

    //Lodash is required for _
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    return element;
}

document.body.appendChild(component());

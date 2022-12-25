const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.getElementById('intrinsic-switch');

const changeSize = () => {
    awesome.setAttribute('data-sizing', intrinsicSwitch.checked ? 'intrinsic' : 'extrinsic' )
}

intrinsicSwitch.addEventListener('change', changeSize)
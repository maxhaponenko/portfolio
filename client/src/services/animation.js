

export function animatePosition(item, direction, size) {
    if (direction === 'left') {
        item.style.left = size; 
    } else if (direction === 'right') {
        item.style.right = size;
    } else if (direction === 'top') {
        item.style.top = size;
    } else if (direction === 'bottom') {
        item.style.bottom = size
    }
}

export function animateOpacity(item, opacityLevel) {
    item.style.opacity = opacityLevel
}
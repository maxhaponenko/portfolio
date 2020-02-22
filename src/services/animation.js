

export function animatePosition(item, direction, size) {
    const animate = () => {
        if (direction === 'left') {
            item.style.left = size; 
        } else if (direction === 'right') {
            item.style.right = size;
        } else if (direction === 'top') {
            item.style.top = size;
        } else if (direction === 'bottom') {
            item.style.bottom = size
        }
        window.requestAnimationFrame(animate)
    }
    window.requestAnimationFrame(animate)
}

export function animateOpacity(item, opacityLevel) {
    item.style.opacity = opacityLevel
}
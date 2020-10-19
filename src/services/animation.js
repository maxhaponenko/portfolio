

export const animatePosition = (item, direction, size) => {
    const animate = () => {
        if (direction === 'left') {
            item.current.style.left = size; 
        } else if (direction === 'right') {
            item.current.style.right = size;
        } else if (direction === 'top') {
            item.current.style.top = size;
        } else if (direction === 'bottom') {
            item.current.style.bottom = size
        }
    }
    window.requestAnimationFrame(animate)
}

export function animateOpacity(item, opacityLevel) {
    item.style.opacity = opacityLevel
}
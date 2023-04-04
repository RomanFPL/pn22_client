export function handleClickOutside(element, eventType, dispatch, action) {
    const eventHandler = (event) => {
            const isClickInsideBlock = element.current && element.current.contains(event.target);
            if (!isClickInsideBlock) {
                dispatch(action)
            }
        };
    document.addEventListener(eventType, eventHandler);
}
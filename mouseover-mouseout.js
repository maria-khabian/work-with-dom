const createTooltip = (text) => {
  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  return tooltip;
};

//mouseover
document.addEventListener('mouseover', (event) => {
  const { target } = event;
  //console.log(target);
  const isOverCreateButton = target.className.includes('create-task-block__button');

  if (isOverCreateButton) {
    //console.log('ddd');
    const taskBlockHTML = target.closest('.create-task-block');
    //console.log(taskBlockHTML);
    const forMe = taskBlockHTML?.dataset.forMe;
    //console.log(forMe);

    if (forMe) {
      const tooltipHTML = createTooltip(`Мне ${forMe}7 лет. ДР 23 ноября`);
      target.append(tooltipHTML);
    }
  }
});

//mouseout
document.addEventListener('mouseout', (event) => {
  const { target } = event;
  const isOutCreateButton = target.className.includes('create-task-block__button');
  if (isOutCreateButton) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
});

//mousemove
// document.addEventListener('mousemove', (event) => {
//   console.log(event);
// });

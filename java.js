// Get the chart and label elements
const chart = document.getElementById('chart');
const labels = document.getElementById('labels');

// Get the bars and labels
const bars = chart.querySelectorAll('.bar');
const labelElements = labels.querySelectorAll('.label');

// Loop through the labels and set their position based on the corresponding bar
labelElements.forEach((label, index) => {
  const bar = bars[index];
  label.style.left = bar.offsetLeft + 'px';
});

// Set up event listeners to allow the user to drag the bars and labels
bars.forEach(bar => {
  let isDragging = false;
  let startOffset = 0;

  bar.addEventListener('mousedown', e => {
    isDragging = true;
    startOffset = e.offsetY;
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      const newHeight = chart.offsetHeight - e.clientY + startOffset;
      bar.style.height = newHeight + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});

labelElements.forEach(label => {
  let isDragging = false;
  let startX = 0;

  label.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX - label.offsetLeft;
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      const newLeft = e.clientX - startX;
      label.style.left = newLeft + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});

  var divElement = document.querySelector("class name");
  var ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    entry.target.style.minHeight = cr.height + "px";
    }
  });
  ro.observe(divElement);

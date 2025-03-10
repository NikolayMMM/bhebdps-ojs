function rotateText(rotator) {
  const cases = rotator.querySelectorAll('.rotator__case');
  let activeIndex = Array.from(cases).findIndex(caseItem => caseItem.classList.contains('rotator__case_active'));

  cases[activeIndex].classList.remove('rotator__case_active');
  activeIndex = (activeIndex + 1) % cases.length;
  cases[activeIndex].classList.add('rotator__case_active');
}

document.addEventListener("DOMContentLoaded", function() {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    setInterval(() => rotateText(rotator), 1000);
  });
});

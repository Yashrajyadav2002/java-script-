function normalize(s, strict) {
  s = s.toLowerCase();
  if (strict) {
    return s.replace(/[^a-z]/g, '');
  }
  return s.replace(/[\s\W_]+/g, '');
}

function sortedChars(s) {
  return s.split('').sort().join('');
}

function renderPreview(container, text) {
  container.innerHTML = '';
  if (!text) return;
  for (let ch of text) {
    const el = document.createElement('div');
    el.className = 'chip';
    el.textContent = ch;
    container.appendChild(el);
  }
}

const a = document.getElementById('textA');
const b = document.getElementById('textB');
const checkBtn = document.getElementById('checkBtn');
const swapBtn = document.getElementById('swapBtn');
const clearBtn = document.getElementById('clearBtn');
const resultArea = document.getElementById('resultArea');
const resultBadge = document.getElementById('resultBadge');
const resultText = document.getElementById('resultText');
const extra = document.getElementById('extra');
const previewA = document.getElementById('previewA');
const previewB = document.getElementById('previewB');
const lenInfo = document.getElementById('lenInfo');
const timeInfo = document.getElementById('timeInfo');
const strict = document.getElementById('strict');

function checkAnagram() {
  const start = performance.now();
  const rawA = a.value;
  const rawB = b.value;
  const nA = normalize(rawA, strict.checked);
  const nB = normalize(rawB, strict.checked);
  const sA = sortedChars(nA);
  const sB = sortedChars(nB);

  renderPreview(previewA, sA);
  renderPreview(previewB, sB);

  lenInfo.textContent =` Len A: ${nA.length} • Len B: ${nB.length}`;
  timeInfo.textContent = `Checked in ${(performance.now()-start).toFixed(2)} ms`;

  if (!nA && !nB) {
    resultArea.style.display = 'none';
    return;
  }
  resultArea.style.display = 'flex';

  if (sA === sB && nA.length === nB.length) {
    resultBadge.className = 'badge good';
    resultBadge.textContent = '✓';
    resultText.textContent = "Yes — anagrams!";
    extra.textContent = `Sorted letters: ${sA}`;
  } else {
    resultBadge.className = 'badge bad';
    resultBadge.textContent = '✕';
    resultText.textContent = "Not anagrams";
    extra.textContent = `Sorted A: ${sA} • Sorted B: ${sB}`;
  }
}

checkBtn.addEventListener('click', checkAnagram);
swapBtn.addEventListener('click', () => {
  const temp = a.value;
  a.value = b.value;
  b.value = temp;
  checkAnagram();
});
clearBtn.addEventListener('click', () => {
  a.value = '';
  b.value = '';
  previewA.innerHTML = '';
  previewB.innerHTML = '';
  resultArea.style.display = 'none';
  lenInfo.textContent = '—';
  timeInfo.textContent = 'Ready';
});

[a,b,strict].forEach(el => el.addEventListener('input', checkAnagram));

// default sample
a.value = 'Listen';
b.value = 'Silent';
checkAnagram();
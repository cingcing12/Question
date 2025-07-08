const container = document.querySelector('.container');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const body = document.querySelector('body');
const title = document.querySelector('.title');
const loading = document.querySelector('.loading');
const containerrect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

const wait = async () => {
    const newPromise = await new Promise(resolve => {
        setTimeout(() => {
            resolve("Successfully!");
        }, 2000)
    })
    return newPromise;
}

yesBtn.addEventListener('click', async () => {
    loading.classList.remove('hidden');
    body.classList.add('active');
    await wait();
    loading.classList.add('hidden');
    body.classList.remove('active');
    title.textContent = `I love you too o leap.😝🤍`;
    document.querySelector('.imgChange').src = "https://i.pinimg.com/originals/72/28/59/72285905c3eb0728c65cf941425690ce.gif";
    document.querySelector('.cotnainerBtn').remove()
})

window.addEventListener('load', () => {
    loading.classList.remove('hidden');
    body.classList.add('active');
    loading.addEventListener('transitionend', () => {
        loading.classList.add('hidden');
        body.classList.remove('active');
    })
});

noBtn.addEventListener('mouseover', (e) => {
    const top = Math.floor(Math.random() * (containerrect.height - noBtnRect.height)) + 1;
    const left = Math.floor(Math.random() * (containerrect.width - noBtnRect.width)) + 1;
    e.target.style.top = top + "px";
    e.target.style.left = left + "px";
})
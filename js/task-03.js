const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
const elements = [];

for(const el of images) {

  const some = galleryEl.insertAdjacentHTML('beforeend', `<li><img src = '${el.url}' alt = '${el.alt}' width = "360px"></li>`);
  elements.push(some);
}

galleryEl.style.cssText = `
display: flex;
alight-items: center;
justify-content: space-between;
list-style-type: none;
margin: 0;`
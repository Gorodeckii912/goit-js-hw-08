import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items';


const galleryContainer = document.querySelector('.gallery');




galleryContainer.innerHTML = galleryItems.map(({preview, original}) => 
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="" title=""/>
            </a>
        </li>`).join("");

// galleryContainer.innerHTML = galleryItems.map((item) => {

//     const {preview, original, description} = item
//     console.log(item)

//     return `
//     <li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img class="gallery__image" src="${preview}" alt="" title=""/>
//         </a>
//     </li>`
// }).join("");


const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });




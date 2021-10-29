const mailLi = document.querySelector('.mail-li');
const mailP = document.querySelector('.email-container p');

mailLi.addEventListener('click', () => {
   mailP.style.setProperty('opacity', '1');
   setTimeout(() => {
      mailP.style.setProperty('opacity', 0);
   }, 10000);
});


const tilesContainer = document.querySelector('.tiles-container');

const getJson = async () => {
   const response = await fetch('./data/projectData.json');
   const jsonData = await response.json();
   const data = jsonData.projectsData;
   console.log(data);
   return data;
}

const createProjectTile = (link, image, title) => {
   const projectTile = document.createElement('div');
   projectTile.classList.add('project-tile');
   tilesContainer.appendChild(projectTile);

   const a = document.createElement('a');
   a.setAttribute('target', '_blank');
   a.setAttribute('href', link);
   projectTile.appendChild(a);

   const img = document.createElement('img');
   img.setAttribute('src', image);
   a.appendChild(img);

   const captionWrapper = document.createElement('p');
   captionWrapper.classList.add('caption-wrapper');
   captionWrapper.innerHTML = `<i class="fas fa-chevron-left"></i> ${title} <span>/</span><i class="fas fa-chevron-right"></i>`
   a.appendChild(captionWrapper);
}

const renderTiles = async () => {
   const data = await getJson();

   for(const project in data){
      createProjectTile(data[project].link, data[project].image, data[project].title);
   }
}

renderTiles();
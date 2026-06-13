document.addEventListener("DOMContentLoaded", async () => {

    const footerComponent = "footer-component.html";
   const headerComponent = "header-component.html";

   const footers = document.querySelectorAll("#footer");
   const headers= document.querySelectorAll("#header");

   for (let footer of footers){

      const src = footer.getAttribute("src");

      const resp = await fetch(src);
      const html = await resp.text();

      footer.outerHTML = html;
   } 


    for (let header of headers){

      const src = header.getAttribute("src");

      const resp = await fetch(src);
      const html = await resp.text();

      header.outerHTML = html;
   } 

})
   
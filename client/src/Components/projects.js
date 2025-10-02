import HttpServices from "../Api/Axios";

const PROJECTS_WRAPPER = document.querySelector("#projectsWrapper");
const api = new HttpServices("http://localhost:1337/api/");
const projects = () => {
  api.getData(`blogs?populate=*`).then((data) => {
    let renderHTML = data?.data
      ?.map(
        (item) => `    <div
            class="relative group h-[564px] overflow-hidden rounded-[25px]"
          >
   
            <div class="absolute inset-0">
              <img
                src="http://localhost:1337${item?.image?.url}"
                alt="DeepVision"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          
         
    
          
         
            <div class="relative h-full flex flex-col justify-end p-6">
              <span
                class="absolute top-8 left-8 border border-[#45CEC1] text-[#fff] text-[12px] font-mano font-medium px-4 py-2 rounded-full bg-transparent"
              >
       ${item?.tag}
              </span>
          
              <div
                class="transition-all p-4 duration-500 group-hover:-translate-y-4 translate-y-[90px]"
              >
                <h3
                  class="text-[#F5F5F5] text-xl md:text-2xl font-sora font-normal "
                >
                ${item?.title}
                </h3>
          
                <div
                  class="mt-3 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p class="text-white text-[16px] font-sora font-light leading-[30px] mb-3">
                  ${item?.desc}
                  </p>
                  <span class="post-more-button inline-block">
                    <a
                      href="https://demo.artureanec.com/themes/aiero/projects/deepvision-enhancing-image-recognition-with-neural-networks/"
                      class="text-[#F5F5F5] font-normal text-[14px] hover:underline"
                    >
                      Explore more
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>`
      )
      .join("");
    PROJECTS_WRAPPER && (PROJECTS_WRAPPER.innerHTML = renderHTML);
  });
};
export default projects;

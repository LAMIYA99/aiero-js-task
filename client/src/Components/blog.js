import HttpServices from "../Api/Axios";

const BLOG_WRAPPER = document.querySelector("#blogWrapper");
const api = new HttpServices("http://localhost:1337/api/");
const blog = () => {
  api.getData("posts?populate=*").then((res) => {
    let blogs = res?.data
      ?.map(
        (
          item
        ) => `  <a href="./blogdetail.html?id=${item?.id}">
      <div class="rounded-[20px] overflow-hidden border border-gray-300">
        <div class="relative">
          <img
            src="http://localhost:1337${item?.image?.url}"
            alt="Blog post cover"
            class="w-full h-[474px] object-cover rounded-t-[20px]"
          />

          <div
            class="absolute bottom-0 left-10 pt-[20px] pr-[24px] pb-[4px] pl-[24px] text-center rounded-t-[25px] bg-[#FFFFFF] text-sm px-3 py-1"
          >
            2 Jan 2025 / andrew
          </div>
        </div>
        <div class="p-6">
          <h2
            class="text-[40px] mt-8 font-normal font-sora leading-[50px] mb-4 tracking-tight"
          >
            ${item?.name}
          </h2>
          <p class="text-gray-600 font-mano text-[16px] mb-4">
            A discussion on the ethical considerations and data privacy issues
            surrounding AI applications
          </p>
          <p class="text-sm text-gray-500 py-4">/ AI Aiero / Technology /</p>
        </div>
      </div>
    </a>`
      )
      .join("");
    BLOG_WRAPPER && (BLOG_WRAPPER.innerHTML = blogs);
  });
};
export default blog;

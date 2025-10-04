import HttpServices from "../Api/Axios";

const BLOG_DETAIL_WRAPPER = document.querySelector("#blogDetailWrapper");

const blogDetail = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const api = new HttpServices("http://localhost:1337/api/");

  api.getData(`/posts?filters[id]=${id}&populate=*`).then((res) => {
    const posts = res?.data?.[0];
    console.log(posts);
    if (!posts) return;

    let renderHtml = `  
              <a href="./blogdetail.html?id=${posts?.id}">
      <div class="relative">
        <img
   src="http://localhost:1337${posts?.image?.url}"
          alt="Blog post cover"
          class="w-full h-[474px] object-cover rounded-t-[20px]"
        />

        <div
          class="absolute bottom-0 left-10 pt-[20px] pr-[24px] pb-[4px] pl-[24px] text-center rounded-t-[25px] bg-[#FFFFFF] text-sm px-3 py-1"
        >
          2 Jan 2025 / andrew
        </div>
      </div>
    </a>`;

    BLOG_DETAIL_WRAPPER && (BLOG_DETAIL_WRAPPER.innerHTML = renderHtml);
  });
};

export default blogDetail;

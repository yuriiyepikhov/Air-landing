var e=document.querySelector(".slider"),r=e.querySelector(".slider__slides"),t=e.querySelector(".slider__arrow-btn--left");e.querySelector(".slider__arrow-btn--right").addEventListener("click",function(){var e=r.offsetWidth,t=r.scrollWidth-e,l=Math.round(r.scrollLeft);r.scrollLeft=t-l<=1?0:l+e}),t.addEventListener("click",function(){var e=r.offsetWidth,t=r.scrollWidth-e,l=Math.round(r.scrollLeft);r.scrollLeft=l<=1?t:l-e});
//# sourceMappingURL=index.79737874.js.map

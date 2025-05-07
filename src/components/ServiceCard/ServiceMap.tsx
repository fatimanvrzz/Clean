import { useState, useRef, useEffect } from "react";

const ServiceMap = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const menuItems: string[] = ["Home", "Commercial", "Specialized", "Post-Renovation"];
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const indicatorRef = useRef<HTMLHRElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  useEffect(() => {
    const moveIndicator = () => {
      if (indicatorRef.current && containerRef.current) {
        const item = itemRefs.current[activeItem];
        if (item) {
          const itemLeft = item.offsetLeft - containerRef.current.scrollLeft;
          const itemWidth = item.offsetWidth;

          indicatorRef.current.style.width = `${itemWidth}px`;
          indicatorRef.current.style.left = `${itemLeft}px`;
        }
      }
    };

    moveIndicator();

    containerRef.current?.addEventListener("scroll", moveIndicator);
    window.addEventListener("resize", moveIndicator);
    return () => {
      containerRef.current?.removeEventListener("scroll", moveIndicator);
      window.removeEventListener("resize", moveIndicator);
    };
  }, [activeItem]);

  return (
    <div className="flex-col cursor-pointer">
      <div className="relative overflow-x-auto scrollbar-hide" ref={containerRef}>
        <ul className="flex items-center gap-[4rem] text-[#5C5C5E] text-[1.45rem] whitespace-nowrap">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                if (el) {
                  itemRefs.current[index] = el;
                }
              }}
              className={`flex-shrink-0 ${activeItem === index ? "text-[#000000]" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative my-3 mb-[2.5rem]">
        <hr
          ref={indicatorRef}
          className="absolute rounded-2xl border-2 border-[#0F42FF] z-10 transition-all duration-300"
          style={{ width: "0", left: "0" }}
        />
        <hr className="relative rounded-2xl border-t-[0.21875rem] border-[#DAD8D6]" />
      </div>
    </div>
  );
};

export default ServiceMap;
